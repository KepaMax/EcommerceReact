import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegisterPage from './auth/RegisterPage'
import LoginPage from './auth/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginPage></LoginPage>
    </>
  )
}

export default App
