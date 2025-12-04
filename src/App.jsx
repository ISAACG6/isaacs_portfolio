import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Portfolio from './portfolio';
import Header from './Header';
import Resume from './Resume';
import  Footer  from './Footer';
import Navigation from './Navbar';

function App() {

  return (
    <div>

    <Navigation />
    <Header />
    <Portfolio />
    <Resume />
    <Footer />

    </div>
   
  )

}

export default App
