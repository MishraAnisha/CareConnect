import React from 'react'
import Home from '../Pages/Home';
import Services from '../Pages/Services';
import Contact from '../Pages/Contact';
import Signup from '../Pages/Signup';
import Login from '../Pages/Login';
import Doctors from '../Pages/Doctors/Doctors';
import Doctorsdetails from '../Pages/Doctors/Doctorsdetails';

import {Routes,Route} from 'react-router-dom';
const Routers = () => {
  return (
    <Routes>
        <Route path="/" element= {<Home />}/>
        <Route path="/home" element= {<Home />}/>
        <Route path="/Doctors" element= {<Doctors />}/>
        <Route path="/Doctors/:id" element= {<Doctorsdetails />}/>
        <Route path="/Services" element= {<Services />}/>
        <Route path="/login" element= {<Login />}/>
        <Route path="/register" element= {<Signup />}/>
        <Route path="/contact" element= {<Contact />}/>
    </Routes>
  )
}

export default Routers