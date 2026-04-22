
import './App.css'
import { Route, Routes } from 'react-router'
import Rootlayouts from './layouts/Rootlayouts'
import Registration from './pages/Registration'
import Home from './pages/Home'


function App() {

  return (
    <Routes>
      <Route element={<Rootlayouts />}>
        <Route path='/' element={<Home />} />
        <Route path='/registration' element={<Registration />} />
      </Route>
    </Routes>
  )
}

export default App
