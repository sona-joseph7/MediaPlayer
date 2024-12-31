
import {Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import History from './pages/History'
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css'
Routes
function App() {


  return (
    <>
      {/* pth for Landing(http://localhost:5174/), Home(http://localhost:5174/home), History(http://localhost:5174/history) */}
      {/* header */}
      <Header/>

      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/history' element={<History/>}/>
      </Routes>
      {/* footer */}
      <Footer/>

    </>
  )
}

export default App
