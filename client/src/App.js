import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import Dashboard from './Pages/Dashboard.jsx';
import General from './Components/General';
import Schedule from './Components/Schedule';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Login /> }/>
        <Route path='/register' element={ <Register /> }/>
        <Route path='/dashboard' element={ <Dashboard /> }/>
        <Route path='/general' element={ <General /> }/>
        <Route path='/schedule' element={ <Schedule /> }/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
