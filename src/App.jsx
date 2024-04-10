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

      <Card
        heading={"Minali"}
        address={"Gampaha"}
        age={"20"}>
      </Card>

      <Card
        heading={"Lasindu Umayanga"}
        address={"Kalutara"}
        age={"21"}>
      </Card>

      <Card
        heading={"Hansani Gayasha"}
        address={"Colombo"}
        age={"24"}>
      </Card>

      <Card
        heading={"Dhananjaya Sandaruwan"}
        address={"Aralaganwila"}
        age={"20"}>
      </Card>

      <Card
        heading={"Kalana Dhananjaya"}
        address={"Anuradhapura"}
        age={"22"}>
      </Card>

      <Card
        heading={"Yasindu Nipun"}
        address={"Aluthgama"}
        age={"26"}>
      </Card>

      <Card
        heading={"Tharindu Madhushan"}
        address={"Polonnaruwa"}
        age={"28"}>
      </Card>
    </div>


  )
}

export default App
