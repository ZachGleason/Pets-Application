import React from 'react'
import '../App.css';
import Navigation from '../Components/Navigation';
import LoginInput from '../Components/LoginInput';

const Login = () => {
  return (
      <div className='background'>
        <Navigation />
        <div style={{ height: 400, backgroundColor: "#bababa", maxWidth: 400, margin: "auto", borderRadius: 10}}>
              <LoginInput />
        </div>
      </div>
  )
}

export default Login