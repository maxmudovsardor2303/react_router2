import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import Login from './components/login/login'
import Cars from './components/cars/cars'
function App() {

  return (
    <>
    <h1 className='text-center'>Learn react-router-dom</h1>
     <Routes>
      <Route path='' element={<Login/>}/>
      <Route path='cars' element={<Cars/>}/>
      <Route path='cars' element={<Cars/>}/>
     </Routes>
    </>
  )
}

export default App
