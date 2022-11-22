import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/navbar/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Formation from "./components/formation/Formation"
import Contacts from "./components/contacts/Contacts"
import Footer from "./components/footer/Footer"


export const App = () => {
  return (
    <> 
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Formation/>
      <Contacts/>
      <Footer/> 

    </>
  )
}

export default App;