import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Score_1st from './Score_1st.jsx'
import Score_2nd from './Score_2nd.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/getscore/1st" element={<Score_1st/>} />
          <Route path="/getscore/2nd" element={<Score_2nd/>} />
        </Routes>
    </BrowserRouter>
  </StrictMode>,
)
