import './App.css'
import card1 from "./images/card1.jpg"
import card2 from "./images/card2.jpg"
import card3 from "./images/card3.png"
function Body(props) {
console.log(props) 
    return ( 
    <main>

    <div className="App">
      <div className='card-cont'>
      <img src={props.item.img} alt="pic" />

      </div>
      <div className='side' >
        <p className='country'>♻  { props.item.country.toUpperCase()} <span>View on Google Maps</span></p>
        <h2 className='name'>{props.item.name}</h2>
        <h6 className='rating'>{props.item.rating}</h6>
        <p className='details'>{props.item.details}
            </p>
            </div>
     </div>

    </main>
  )
}

export default Body
