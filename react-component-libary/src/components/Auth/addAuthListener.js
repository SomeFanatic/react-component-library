import firebase from 'firebase/app';

export const addAuthListener = (callback) => {
  const onChange = (user) => {
    // ak už bol user existuje
    if (user) {
      callback({})
    } else {
      callback(null);
    }
  }
  // keď sa zmení auth state usera zavolá funkciu onChange
  return firebase.auth().onAuthStateChanged(onChange);
}