import React from 'react'
import '../App.css';
import Navigation from '../Components/Navigation';
import LoginInput from '../Components/LoginInput';

const Login = (props) => {
  return (
      <div className='background'>
        <Navigation />
        <div style={{ height: 400, backgroundColor: "#bababa", maxWidth: 400, margin: "auto", borderRadius: 10}}>
              <LoginInput user={props.user} setUser={props.setUser}/>
        </div>
      </div>
  )
}

export default Login