import { Routes, Route } from 'react-router-dom'

import Home from '../layouts/Landing/Home'
import Login from '../layouts/auth/Login'
import Signup from '../layouts/auth/Signup'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default AppRoutes