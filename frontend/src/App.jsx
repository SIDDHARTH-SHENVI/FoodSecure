import React from 'react';
import Home from './home/Home';

import { Navigate, Route, Routes } from "react-router-dom"
import Donor from './donors/Donor';
import Hotel from './hotels/Hotel';
import Vol from './volun/Vol';
import Signup from './components/Signup';

import toast, { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider.jsx';




function App() {
  const [authUser,setAuthUser]=useAuth();
console.log(authUser);
  return (<>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/donors' element={authUser? <Donor/>:<Navigate to="/signup"/>}/>
    <Route path='/hotels' element={authUser? <Hotel/>:<Navigate to ="/signup"/>}/>
    <Route path='/vol' element={<Vol/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  <Toaster />
  
</>)
}

export default App;
