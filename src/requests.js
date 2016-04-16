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

export function verifyAuth(token, uid) {
  return new Promise((resolve, reject) => {
    if (token && uid) {
      fetch(`http://localhost:8001/auth?token=${token}&uid=${uid}`).then(response => {
        if (response.status === 200) {
          response.json().then(json => {
            resolve(json.token);
          });
        } else { reject(); }
      }).catch(reject);
    } else {
      reject();
    }
  });
}

export function submitReflections(reflections) {
  return new Promise((resolve, reject) => {
    fetch('http://localhost:8001/reflections', {
      method: 'POST',
      headers: headers(),
      body: JSON.stringify({ reflections })
    }).then((response) => {
      if (response.status === 200) {
        response.json().then(json => resolve(json));
      }
      else { reject(); }
    }).catch(reject);
  });
}
