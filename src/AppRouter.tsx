import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Start from './pages/start'
import AboutMe from './pages/aboutMe'
import Error from './pages/error'
import Menu from './components/menu'

function AppRouter() {

  return (
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path='/' element={<Start/>}/>
        <Route path='/about' element={<AboutMe/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
