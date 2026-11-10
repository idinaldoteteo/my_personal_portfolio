import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Start from './pages/start'
import AboutMe from './pages/aboutMe'
import Error from './pages/error'
import Header from './components/header'
import Footer from './components/footer'
import Post from './components/post'
import data from '../db.json'

function AppRouter() {

  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Start data={data} />}/>
        <Route path='about' element={<AboutMe data={data} />}/>
        <Route path='posts/:id' element={<Post/>}/>
        <Route path="*" element={<Error/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default AppRouter
