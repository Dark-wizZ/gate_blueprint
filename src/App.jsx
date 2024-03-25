import { useState } from 'react'
import './App.scss'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import { AuthContextprovider } from './context/AuthContext'
import Home from './pages/Home'
import Syllabus from './pages/Syllabus'

function App() {
  return (
    <>
      <AuthContextprovider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/syllabus' element={<Syllabus />} />

          </Routes>
        </BrowserRouter>
      </AuthContextprovider>
    </>
  )
}

export default App
