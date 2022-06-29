import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import General from './Components/General';
import Schedule from './Components/Schedule';
import Scheduling from './Pages/Scheduling';
import Animals from './Pages/Animals';

function App() {

  const [user, setUser] = useState({})

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login user={user} setUser={setUser}/> }/>
        <Route path='/register' element={ <Register user={user} setUser={setUser}/> }/>
        <Route path='/dashboard' element={ <Dashboard user={user} setUser={setUser}/> }/>
        <Route path='/general' element={ <General user={user} setUser={setUser}/> }/>
        <Route path='/schedule' element={ <Schedule user={user} setUser={setUser}/> }/>
        <Route path='/scheduling/:petid' element={ <Scheduling user={user} setUser={setUser}/> }/>
        <Route path='/animal' element={ <Animals user={user} setUser={setUser}/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
