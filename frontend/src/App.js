
import React from 'react';
import {Route,Routes } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Doctors from './pages/Doctors';
import Login from './pages/Login';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import MyAppointments from './pages/MyAppointments';
import Appointment from './pages/Appointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (

    <div className= "mx-4 sm:mx-[10%]">
      <Navbar/>
     
      <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/doctors' element = {<Doctors/>}/>
      <Route path = '/doctors/:speciality' element = {<Doctors/>}/>
      <Route path = '/login' element = {<Login/>}/>
      <Route path = '/admin' element = {<Admin/>}/>
      <Route path = '/about' element = {<About/>}/>
      <Route path = '/contact' element = {<Contact/>}/>
      <Route path = '/my-appointments' element = {<MyAppointments/>}/>
      <Route path = '/appointments' element = {<Appointment/>}/>
      </Routes>
    <Footer/>
    </div>
  );
}

export default App;