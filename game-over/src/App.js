import './App.css'
import { Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import { BASE_URL } from './globals'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])
  return (
    <div>
      <div>
        <header>
          <Nav
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
          />
        </header>
        <main>
          <Routes>
            <Route
              index
              element={<Home user={user} authenticated={authenticated} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/login"
              element={
                <Login
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              }
            />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
