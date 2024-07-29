import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin } from './pages/Signin'
import { Signup } from './pages/Signup'
import { VerifyOtp } from './pages/VerifyOtp'
import { Dashboard } from './pages/Dashboard'
function App() {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Signin/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/verify-otp" element={<VerifyOtp/>} />
      <Route path="/verify-otp" element={<VerifyOtp/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

     </Routes>
     </BrowserRouter>
      
    </>
  )
}

export default App
