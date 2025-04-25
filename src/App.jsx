import './App.css'
import Home from './pages/Home.jsx'
import NavBar from './components/NavBar.jsx'
import { Routes, Route } from 'react-router-dom'
import Project from './pages/Project.jsx'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        {/* <Route path="*" element={<Home/>} /> */}
      </Routes>
    </>
  )
}

export default App
