import React from 'react';
import styled from 'styled-components';

export default function AlternativeLogins(onAlternativeLoginClicked) {
/*   const { alternativeLogins } = useAuth();
  // trigger function:
  const history = useHistory();
  const onAlternativeLoginClicked = async (authWith, signInMethod) => {
    await alternativeLogins(authWith, signInMethod);
    history.push('/');
} */
    return (
      <>
         <div style={{display: "flex", flexDirection: "row"}}>
          
          <IconContainer>
            <GoogleIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" 
              alt="google login icon"
              onClick={() => onAlternativeLoginClicked("google", "redirect")}
              />
          </IconContainer>
          <IconContainer>
            <FacebookIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/facebook.svg" 
              alt="facebook login icon"
              onClick={() => onAlternativeLoginClicked("facebook", "redirect")}  
              />
          </IconContainer>
          <IconContainer>
            <TwitterIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/twitter.svg" 
              alt="twitter login icon"
              onClick={() => onAlternativeLoginClicked("twitter", "redirect")}  
              />
          </IconContainer>
          <IconContainer>
            <MicrosoftIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/microsoft.svg" 
              alt="microsoft login icon"
              onClick={() => onAlternativeLoginClicked("microsoft", "redirect")}  
              />
          </IconContainer>
          <IconContainer>
            <GitHubIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/github.svg" 
              alt="github login icon"
              onClick={() => onAlternativeLoginClicked("github", "redirect")}  
              />
          </IconContainer>
          <IconContainer>
            <AppleIconImg 
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/apple.png" 
              alt="apple login icon"
              onClick={() => onAlternativeLoginClicked("apple", "redirect")}  
              />
          </IconContainer>
        </div>
      </>
    );
  }
const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
  margin: 10px;
  cursor: pointer; 
`
const GoogleIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 10px;
`
const FacebookIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 12px;
  border-radius: 4px;
  background-color: #3b5998;
`
const MicrosoftIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 13px;
  border-radius: 4px;
  background-color: #2F2F2F;
`
const TwitterIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 15px;
  border-radius: 4px;
  background-color: #55acee;
`
const GitHubIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 11px;
  border-radius: 4px;
  background-color: #333333;
`
const AppleIconImg = styled.img`
  position: relative;
  width: auto;
  height: 100%;
  padding: 15px;
  border-radius: 4px;
  background-color: #000000;
`