import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import TextToVideo from './Pages/Text-to-Video'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-to-video" element={<TextToVideo />} />
      </Routes>
    </Router>
  )
}

export default App
