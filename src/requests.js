import { auth } from './auth';

function headers() {
  var ret = new Headers({
    'Content-Type': 'application/json'
  });

  if (auth.getToken()) {
    ret.append('Authorization', 'Bearer ' + auth.getToken());
  }

  return ret;
}

//const baseUrl = 'http://localhost:8001';
const baseUrl = 'https://reflectives.herokuapp.com';

export function sendPasswordless(user) {
  let data = new FormData();
  data.append('user', user);

  return new Promise((resolve, reject) => {
    fetch(`${baseUrl}/auth`, {
      method: 'POST',
      body: data
    }).then(response => {
      if (response.status === 200) {
        resolve();
      } else {
        reject();
      }
    }).catch(reject);
  });
}

export function verifyAuth(token, uid) {
  return new Promise((resolve, reject) => {
    if (token && uid) {
      fetch(`${baseUrl}/auth?token=${token}&uid=${uid}`).then(response => {
        if (response.status === 200) {
          return response.json().then(json => resolve(json.token));
        }

        genericResponseHandler(response, resolve, reject);
      }).catch(reject);
    } else {
      reject();
    }
  });
}

export function submitReflections(reflections) {
  return new Promise((resolve, reject) => {
    if (!auth.getToken()) {
      return reject();
    }

    fetch(`${baseUrl}/reflections`, {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ reflections })
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then(json => resolve(json));
      }

      genericResponseHandler(response, resolve, reject);
    }).catch(reject);
  });
}

export function fetchReflectionCollections() {
  return new Promise((resolve, reject) => {
    if (!auth.getToken()) {
      return reject();
    }

    fetch(`${baseUrl}/reflections`, {
      method: 'GET',
      headers: headers()
    }).then((response) => {
      if (response.status === 200) {
        return response.json().then(json => resolve(json));
      }

      genericResponseHandler(response, resolve, reject);
    }).catch(reject);
  });
}

function genericResponseHandler(response, resolve, reject) {
  if (response.status === 422) {
    return response.json().then(json => reject(json));
  } else if (response.status === 401 && auth.getToken()) {
    window.location.href = '/';
    auth.logout();
  }

  reject({});
}
