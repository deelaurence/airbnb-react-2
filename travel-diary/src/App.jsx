// import reactLogo from './assets/react.svg'
import './App.css'
import Body from './body'
import Nav from './nav'
import React from 'react'
import ReactDOM from 'react-dom/client'

import card1 from "./images/card1.jpg"
import card2 from "./images/card2.jpg"
import card3 from "./images/card3.png"
import data from "./data"

function App() {
  const mapped = data.map((single)=>{
    return <Body item={single}/>
  })
  console.log(mapped)
  return (
    <div>
 <Nav/>
<section className='parent-cont'>

{mapped}
</section>
  
 
  
    </div>
      
  )
}

export default App
