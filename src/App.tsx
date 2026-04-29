import './App.css'
import { Route, Routes } from 'react-router'
import Rootlayouts from './layouts/Rootlayouts'
import Registration from './pages/Registration'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import ContactPage from './pages/ContactPage'
import Login from './pages/Login'


function App() {

  return (
    <Routes>
      <Route element={<Rootlayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/login' element={<Login />} />
      </Route>
    </Routes>
  )
}

export default App
