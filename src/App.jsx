import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {


  return (
    <div id='body'>
      <Card
        heading={"Chamikara Ruchiranga"}
        address={"Maggona"}
        age={"28"}>
      </Card>

      <Card
        heading={"Wathmal Bandara"}
        address={"Katubedda"}
        age={"27"}>
      </Card>

      <Card
        heading={"Binara Dulsara"}
        address={"Thalpitiya"}
        age={"24"}>
      </Card>
    </div>


  )
}

export default App
