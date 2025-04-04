import React from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Destination from './Pages/Destination'
import About from './Pages/About'
import Details from './Pages/Details'
import Contact from './Pages/Contact'
import Booking from "./Pages/Booking"
import Dashboard from './Pages/Dashboard'
import Upcoming from './Components/Upcoming'
import Payment from './Components/Payment'
import BookingSomali from "./Components/booking/BookingSomalia"
import Sign from "./Pages/Sign"
import Login from "./Pages/Login"
import Result from './Pages/Result'
import SlideDash from './Components/SlideDash'
import Admin from './Pages/Admin'


function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/destination' element={<Destination/>} />
      <Route path='/booking' element={<Booking/>} />
      <Route path='/dashboard' element={<Dashboard/>} />
      {/* <Route path='/home2' element={<Home2/>} /> */}
      <Route path='/bookingsomali' element={<BookingSomali/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/contact' element={<Contact/>} /> 
      <Route path='/upcoming' element={<Upcoming/>} />
      <Route path='/payment' element={<Payment/>} />
      <Route path='/' element={<Sign/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/result' element={<Result/>} />
      <Route path='/slide' element={<SlideDash/>} />
      <Route path='/admin' element={<Admin/>} />

    </Routes>
  )
}

export default App
