import React, { useState } from 'react'
import './Home.css'
import Nav from '../../Components/Nav/Nav'
import Tickets from '../../Components/Tickets/Tickets'


const Home = () => {
  return (
    <div id="home" >
    <Nav/>    
    <Tickets/>

    </div>
  )
}

export default Home