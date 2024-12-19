import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Pilot from './components/Pilot/Pilot'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div class="home">
      <video muted loop autoPlay>
        <source src="/droneshot.mp4" type="video/mp4"/>
      </video>
      <section className="App-header">
        <NavBar className="nav"/>
        <Pilot/>
      </section>
    </div>
      
    </>

  )
}

export default App
