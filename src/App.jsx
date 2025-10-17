import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import {HomePage} from './pages/HomePage.jsx'
import {Menu} from './pages/Menu.jsx'
import {Locations} from './pages/Locations.jsx'
import {AboutUS} from './pages/AboutUS.jsx'
import {CustomerStories} from './pages/CustomerStories.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/Menu" element={<Menu />}></Route>
      <Route path="/Locations" element={<Locations />}></Route>
      <Route path="/AboutUS" element={<AboutUS />}></Route>
      <Route path="/CustomerStories" element={<CustomerStories />}></Route>
    </Routes>
     
    </>
  )
}

export default App
