import React from 'react'
import Navigation from '../Components/Navigation';
import RegisterInput from '../Components/RegisterInput';

const Register = (props) => {
  return (
      <div className='background'>
        <Navigation />
        <div style={{ height: 580, backgroundColor: "#bababa", maxWidth: 400, margin: "auto", borderRadius: 10}}>
            <RegisterInput user={props.user} setUser={props.setUser}/>
        </div>
     </div>
  )
}

export default Register