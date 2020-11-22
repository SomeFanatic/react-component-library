import firebase from 'firebase/app';

export const signOut = async () => {
  try {
     await firebase.auth().signOut();
  } catch (err) {
    throw new Error('Nepodarilo sa odhlásiť');
  }
}