import { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons'
import Navbar from './common/components/Navbar'
import Main from './mainpage/Main'


function App() {
  const [count, setCount] = useState(0)
  library.add(fab, faLock, faEnvelope,faUser)
  return (
    <>
      <Main></Main>
    </>
  )
}

export default App
