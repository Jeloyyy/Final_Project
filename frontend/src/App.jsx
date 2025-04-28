//Routes
import Login from './pages/login'
import Register from './pages/register'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Users from './pages/Users'
import Home from './pages/Home'

import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard" element={<Dashboard />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/users" element={<Users />}></Route>
      <Route path="/home" element={<Home />}></Route>

    </Routes>
  )
}

export default App