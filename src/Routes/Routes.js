import React from 'react'
import { Routes , Route } from 'react-router-dom'

// Pages 
import LoginForm from '../Components/LoginForm/LoginForm'
import Home from '../Pages/Home/Home'
export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm />}/>
      <Route path='/logged'  element={<Home/>}/>
    </Routes>
  )
}