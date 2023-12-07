import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import About from './pages/About'
import Profile from './pages/Profile'
import Header from './components/Header'

const App = () => {
  return (
   <div>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signout" element={<SignOut/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/profile" element={<Profile/>} />

      </Routes>
      </BrowserRouter>
   </div>
  )
}

export default App