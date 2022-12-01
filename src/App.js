import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
      <footer id="footer">
        <h2>Footer</h2>
        <h4>Put social links here... linkedIn, github, email?</h4>
        <h4>anchor to bottom of page?</h4>
      </footer>
    </div>
  )
}

export default App
