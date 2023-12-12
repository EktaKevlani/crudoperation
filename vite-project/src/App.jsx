import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Routers,Routes,Route, Form } from "react-router-dom"
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import ShowSingleData from './components/pages/ShowSingleData'
import Create from './components/pages/Create'
import Update from './components/pages/Update'

function App() {
  
  return (
    <>
   
    <Routers>
      <Navbar></Navbar>
      
      {/* <Home></Home> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/ShowSingleData/:userId" element={<ShowSingleData/>}/>
        <Route path="/update/:formId" element={<Update/>}/> 
        <Route path="/create" element={<Create/>}/> 
       
      </Routes>
    </Routers>
    </>
  )
}

export default App
