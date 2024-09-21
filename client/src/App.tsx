import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './login/Login.tsx'
import {NextUIProvider} from '@nextui-org/react'


function App() {
  return (
    <>
    <NextUIProvider><Login/></NextUIProvider>
    </>
  )
}

export default App
