import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
function App() {
  let [userName, setUserName] = useState<string>('')
  let [password, setPassword] = useState<string>('')
  return (
    <>
      <div>
      </div>
      <h1>LoadStar</h1>
      <div className="card">
    <h3>UserName:</h3> 
    <input value={userName}></input>
    <h3>Password:</h3>
    <input value={password}></input>
    </div>
    <button>Login</button>
     
    </>
  )
}

export default App
