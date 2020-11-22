import React from 'react';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase/app';

export const alternativeLogins = async (authWith, signInMethod) => {
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
  await firebase.auth().signInWithPopup(provider)
  :
  await firebase.auth().signInWithRedirect(provider);
}

// trigger function:
const history = useHistory();
const onAlternativeLoginClicked = async (authWith, signInMethod) => {
  // first arg "google", "facebook", "twitter" ...
  // second arg "popup" or "redirect"
  await alternativeLogins(authWith, signInMethod);
  history.push('/');
}


// trigger button
const loginBtn = () => {
  return (
    <button 
      onClick={() => onAlternativeLoginClicked("google", "redirect")}>
      Sign in whith Google
    </button>
  ) 
}

