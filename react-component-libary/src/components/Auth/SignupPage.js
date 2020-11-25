import React ,{ useRef, useState } from 'react';
import styled from 'styled-components';
import { Link, BrowserRouter as Router, useHistory } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import ErrorAlert from '../Alert/ErrorAlert';
import AlternativeLogins from './AlternativeLogins';

const SignupPage = () => {
  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();
  const loginPassword2Ref = useRef();
  const { signup } = useAuth();
  const [ error, setError] = useState('');
  const [ loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    if (loginPasswordRef.current.value !== loginPassword2Ref.current.value) {
      return setError('Heslá sa nezhodujú');
    }
    try {
      setError('');
      setLoading(true);
      await signup( loginEmailRef.current.value, loginPasswordRef.current.value);
      history.push('/')
    } catch(err) {
      switch (err.code) {
        case "auth/email-already-exists":
          setError(`Zadaný email už bol zaregistrovaný`);
        break;

        case "auth/email-already-in-use":
          setError(`Zadaný email už bol zaregistrovaný`);
        break;

        case "auth/invalid-password":
          setError(`Heslo musí mať minimálne 6 znakov`);
        break;

        case "auth/weak-password":
          setError(`Nedostatočne silné heslo`);
        break;

        
        default:
          setError(`Účet sa nepodarilo vytvoriť skúste znava prosím, kód chyby: ${err.code}`);
        break;
    
      }
    }
    setLoading(false);
  }
  return (
    <Router>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Signup>
            <AppLogo>
                <Logo>
                  <h1>Onelist</h1>
                </Logo>
              </AppLogo>
              {error && <ErrorAlert alertMesage={error}/>}
              <Input type="email" ref={loginEmailRef} required placeholder="zadajte email..." id="loginEmail"/>
              <Input type="password" ref={loginPasswordRef} required placeholder="zadajte heslo..." id="loginPassword"/>
              <Input type="password" ref={loginPassword2Ref} required placeholder="zadajte hesloznova..." id="loginPassword2"/>
              <Button disabled={loading} type="submit">Registrovať sa</Button>
              <TitleWrapper>
                <AltLoginTitle>Prihláste sa pomocou:</AltLoginTitle>
              </TitleWrapper>
                <AlternativeLogins />
              <RowContainer>
                <Link to='/login'><h4>Prihlásenie</h4></Link>
                <Link to='/passwordreset'><h4>Zabudnuté heslo</h4></Link>
              </RowContainer>
          </Signup>
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

const Signup = styled.div`
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
const TitleWrapper = styled.div`
position: relative;
width:100%;
box-sizing: border-box;
padding: 0 10% 0 10%;
text-align: center;
`
const AltLoginTitle = styled.h3`
 color: grey;
 padding-bottom: 10px;
 border-bottom: 1px solid rgba(128,128,128,0.404);`

export default SignupPage;
