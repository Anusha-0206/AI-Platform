import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import TextToVideo from './Pages/Text-to-Video'
import TextToAudio from './Pages/Text-to-Audio'
import Profile from './Pages/Profile'
import AccountSettings from './Pages/AccountSettings'
import CancelSubscription from './Pages/CancelSubscription'
import ChangePassword from './Pages/ChangePassword'
import Language from './Pages/Language'
import Copyright from './Pages/Copyright'
import ForgotPassword from './Pages/ForgotPassword'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import TextToImage from './Pages/Text-to-Image'
import WatermarkRemover from './Pages/WatermarkRemover'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/text-to-video" element={<TextToVideo />} />
        <Route path="/text-to-audio" element={<TextToAudio />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/settings" element={<AccountSettings />} />
        <Route path="/profile/cancel" element={<CancelSubscription />} />
        <Route path="/profile/password" element={<ChangePassword />} />
        <Route path="/profile/language" element={<Language />} />
        <Route path="/text-to-image" element={<TextToImage />} />
        <Route path="/copyright" element={<Copyright />} />
        <Route path="/watermark-remover" element={<WatermarkRemover />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot" element={<ForgotPassword />} />
      </Routes>
    </Router>
  )
}



export default App
