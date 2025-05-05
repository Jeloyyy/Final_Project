//Routes
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'

import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/dashboard/*" element={<Dashboard />}></Route>
    </Routes>
  )
}

export default App