import './App.css'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Contacto from './Components/Contacto'
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contacto' element={<Contacto/>}/>
    </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
