import React from 'react'
import LoginPage from './components/Auth/LoginPage'
import SignupPage from './components/Auth/SignupPage'
import PasswordResetPage from './components/Auth/PasswordResetPage'
import UpdateProfilePage from './components/Auth/UpdateProfilePage'
import { FetchData } from './components/API/FetchData'

function App () {
  return (
    <>
      <LoginPage />
      <SignupPage />
      <PasswordResetPage />
      <UpdateProfilePage />
      <FetchData />
    </>
  )
}

export default App
