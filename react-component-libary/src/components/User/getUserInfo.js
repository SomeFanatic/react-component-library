import firebase from 'firebase/app';
// Vytiahni z databázy info o userovy ktorého id je zadané ako parameter
export const getUserInfo = async userId => {
  const userInfoDoc = await firebase.firestore()
    .collection('users')
    .doc(userId)
    .get();
  const userInfo = userInfoDoc.data();

  if (!userInfo) return null;

  return {
    ...userInfo,
    id: userInfoDoc.id
  };
}
