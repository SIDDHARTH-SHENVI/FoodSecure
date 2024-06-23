import React from 'react';
import Home from './home/Home';

import { Route, Routes } from "react-router-dom"
import Donor from './donors/Donor';
import Hotel from './hotels/Hotel';
import Vol from './volun/Vol';
import Signup from './components/Signup';



function App() {
  return (<>
  
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/donors' element={<Donor/>}/>
    <Route path='/hotels' element={<Hotel/>}/>
    <Route path='/vol' element={<Vol/>}/>
    <Route path='/signup' element={<Signup/>}/>
  </Routes>
  
</>)
}

export default App;
