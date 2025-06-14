import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './pages/Layout/Header'
import Menu from './pages/Layout/Menu'
import Main_3 from './pages/Layout/Main_3'
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
          <Main_3>
          </Main_3>
        </section>
        <Footer>
        </Footer>
      </div>
    </>
  )
}

export default App
