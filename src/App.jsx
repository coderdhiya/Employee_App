import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from'./pages/Home'
import Form from'./pages/Form'
import Front from'./pages/Front'
import React from 'react'

export default function App() {
  return (
    <div >
      <Navbar/>
      <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/home" element={<Home />} />
          <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  )
}