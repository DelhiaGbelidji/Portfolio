import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/navbar/Nav"
import About from "./components/about/About"
import Experience from "./components/experience/Experience"
import Portfolio from "./components/portfolio/Portfolio"
import Formation from "./components/formation/Formation"
import Contacts from "./components/contacts/Contacts"


export const App = () => {
  return (
    <div style={{paddingBottom: "20px"}}> 
      <Header />
      <Nav/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Formation/>
      <Contacts/>
    </div >
  )
}

export default App;