import { Routes, Route } from 'react-router-dom'

import Home from '../layouts/Landing/Home'
import Login from '../layouts/auth/Login'
import Signup from '../layouts/auth/Signup'
import OTP from '../layouts/auth/OTP'
import dashboard from '../layouts/Dashboard/dashboard'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-otp" element={<OTP />} />
      <Route path="/dashboard" element={<dashboard />} />
    </Routes>
  )
}

export default AppRoutes