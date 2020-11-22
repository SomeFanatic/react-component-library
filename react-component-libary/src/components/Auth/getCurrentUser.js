import firebase from 'firebase/app';
// Získaj ID aktuálne prihláseného usera
export const getCurrentUser = () => {
  const user = firebase.auth().currentUser;
  if (!user) return null;
  return {
    id: user.uid,
  };
}