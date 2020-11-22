import { getCurrentUser } from './../auth/getCurrentUser';
import { getUserInfo } from './getUserInfo';
// Ak je prihlásený užívateľ daj získaj jeho id
// a spusŤ funkciu na získanie jeho údajov z databázy
export const getCurrentUserInfo = async () => {
  const currentUser = getCurrentUser();
  if (!currentUser) return null;
  return await getUserInfo(currentUser.id);
}