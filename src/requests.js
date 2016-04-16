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
