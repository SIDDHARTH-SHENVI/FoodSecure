import React from 'react';
import Home from './home/Home';

import { Route, Routes } from "react-router-dom"
import Donor from './donors/Donor';



function App() {
  return (<>
  {/* <Home/>
  <Donors/> */}
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/donors' element={<Donor/>}/>

  </Routes>
</>)
}

export default App;
