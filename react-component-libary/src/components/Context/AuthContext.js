
import React, { useContext, useState, useEffect } from 'react';
import { auth } from './../firebase';
import { PropTypes } from 'prop-types';
import firebase from 'firebase/app';

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

   // -------------------------------TEST--------------------------------------------
  function alternativeLogins(authWith, signInMethod) {
    let provider;
    // default is google
    switch (authWith) {
      case "google":
        provider = new firebase.auth.GoogleAuthProvider();
        break;   
      case "facebook":
        provider = new firebase.auth.FacebookAuthProvider();
        break;
      case "twitter":
        provider = new firebase.auth.TwitterAuthProvider();
        break;
      case "github":
        provider = new firebase.auth.GithubAuthProvider();
        break;
      case "apple":
        provider = new firebase.auth.OAuthProvider('apple.com');
        break;
      case "yahoo":
        provider = new firebase.auth.OAuthProvider('yahoo.com');
        break;
      case "microsoft":
        provider = new firebase.auth.OAuthProvider('microsoft.com');
        break;       
      default:
        provider = new firebase.auth.GoogleAuthProvider();
        break; 
    }
        // default mehtod is redirect
    signInMethod === "popup" ? 
    firebase.auth().signInWithPopup(provider)
    :
    firebase.auth().signInWithRedirect(provider);
  }


  // firebase funkcia ktorá trigeruje iné funkcie pri zmene user state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
      setLoading(false);
    })
    return unsubscribe
  }, []);
  
  const value = { currentUser, signup, login, logout, resetPassword, updateEmail, updatePassword, alternativeLogins };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
 AuthProvider.propTypes = {
  children: PropTypes.object
}; 
