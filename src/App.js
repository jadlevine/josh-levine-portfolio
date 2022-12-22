import './App.css'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
import 'react-pdf/dist/esm/Page/TextLayer.css'
import { Routes, Route } from 'react-router-dom'
import HeaderNav from './components/HeaderNav'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Resume from './pages/Resume'
import ContactFooter from './components/FooterContact'

function App() {
  return (
    <div className="App">
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <ContactFooter />
    </div>
  )
}

export default App
