import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Layout/Header'
import Menu from './pages/Layout/Menu'
import Main_1 from './pages/Layout/Main_1'
import Footer from './pages/Layout/Footer'

function App() {
  
  
  return (
    <>
      <div className="wrap">
        <Header></Header>

        <section>
          <Menu>
          </Menu>
          <Main_1>
          </Main_1>
        </section>
        <Footer>
        </Footer>
      </div>
    </>
  )
}

export default App
