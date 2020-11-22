
import React, { useContext, useState, useEffect } from 'react'
import { auth } from './../firebase';
import { PropTypes } from 'prop-types';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [ currentUser, setCurrentUser ] = useState();
  const [ loading, setLoading ] = useState(true);
  // firebase funkcia na registráciu
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }
  function logout() {
    return auth.signOut();
  }
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }
  function updateEmail(email) {
    return currentUser.updateEmail(email);
  }
  function updatePassword(password) {
    return currentUser.updatePassword(password);
  }
  function loginWithPopup(provider) {
    return auth.signInWithPopup(provider);
  }
  // firebase funkcia ktorá trigeruje iné funkcie pri zmene user state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, []);
  
  const value = { currentUser, signup, login, logout, resetPassword, updateEmail, updatePassword, loginWithPopup };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
 AuthProvider.propTypes = {
  children: PropTypes.object
}; 
