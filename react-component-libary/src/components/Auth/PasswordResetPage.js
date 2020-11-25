import React ,{ useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter as Router } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext';
import ErrorAlert from '../Alert/ErrorAlert';
import MessageAlert from '../Alert/MessageAlert';

const PasswordResetPage = () => {
  const loginEmailRef = useRef();
  const { resetPassword} = useAuth();
  const [ error, setError] = useState('');
  const [ message, setMessage] = useState('');
  const [ loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setMessage('');
      setError('');
      setLoading(true);
      await resetPassword(loginEmailRef.current.value);
      setMessage('Potrebné informácie vám boli zaslané na vašu e-mailovú adresu');
    } catch(err) {
      switch (err.code) {
        case "auth/wrong-password":
          setError(`Nesprávne heslo`);
        break;

        case "auth/user-not-found":
          setError(`Zadaný užívateľ neexistuje`);
        break;

        default:
          setError(`Nepodarilo resetovať heslo, skúste znava prosím, kód chyby: ${err.code}`);
        break;
    
      }
    }
    setLoading(false);
  }
  return (
    <Router>
      <Container>
        <Form onSubmit={handleSubmit}>
          <PasswordReset>
            <AppLogo>
                <Logo>
                  <h1>Onelist</h1>
                </Logo>
              </AppLogo>
              {error && <ErrorAlert alertMesage={error}/>}
              {message && <MessageAlert alertMesage={message}/>}
              <Input type="email" ref={loginEmailRef} required placeholder="zadajte email..." id="loginEmail"/>
              <Button disabled={loading} type="submit">Resetovať</Button>
              <RowContainer>
              <Link to='/signup'><h4>Registrácia</h4></Link>
              <Link to='/login'><h4>Prihlásenie</h4></Link>
              </RowContainer>
          </PasswordReset>
        </Form>
      </Container>
    </Router>
  );
}
const RowContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`
const Form = styled.form`
position: relative;
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
align-items: center;
justify-content: center;
`

const PasswordReset = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 4px;
  width: 98%;
  max-width: 450px;
  height: auto;
  padding: 20px;
  box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12);
`

const AppLogo = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0 0 0;
`
const Logo = styled.div`
  color: grey;
  display: block;
  width: 100%;
  text-align: center;
  font-size: 35px;
  font-style: italic;
  padding: 30px 10px;
  margin: 0;
  box-sizing: border-box;
  cursor: context-menu;
`
const Input = styled.input`
  border: none;
  border-radius: 4px;
  padding: 10px 15px;
  margin-bottom: 20px;
  width: 90%;
  height: 50px;
  font-size: 15px;
  border: 1px solid rgba(128, 128, 128, 0.404);
`
const Button = styled.button`
  border: none;
  border-radius:4px;
  padding: 10px 15px;
  margin-bottom: 10px;
  width: 90%;
  height: 50px;
  font-size: 15px;
  background-color: #2196F3;
  color: whitesmoke;
  letter-spacing: 1px;
  &:hover {
    background-color: #8BC34A;
  }
`


export default PasswordResetPage;



