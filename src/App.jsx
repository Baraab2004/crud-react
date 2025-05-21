import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Users from './users/Users'
import Create from './users/CreateUser'


import Footer from './footer/Footer'
import Home from './home/Home'
import Details from './users/Details'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/create' element={<Create/>}/>
        <Route path='/users/:id' element={<Details/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
