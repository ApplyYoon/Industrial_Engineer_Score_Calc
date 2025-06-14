import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Layout/Header'
import Menu from './pages/Layout/Menu'
import Main_2 from './pages/Layout/Main_2'
import Footer from './pages/Layout/Footer'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div className="wrap">
        <Header></Header>

        <section>
          <Menu>
          </Menu>
          <Main_2>
          </Main_2>
        </section>
        <Footer>
        </Footer>
      </div>
    </>
  )
}

export default App
