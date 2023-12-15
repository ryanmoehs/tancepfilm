import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Film from './pages/Film'
import Actor from './pages/Actor'
import './App.css'

function App() {

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/film' element={<Film/>}/>
          <Route path='/actor' element={<Actor/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
