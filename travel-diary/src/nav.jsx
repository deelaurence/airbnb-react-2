import './App.css'
import logo from "./images/airbnb-logo.png"
function Nav(){
    return(
        <nav>
            <img className='logo' src={logo} alt="logo"/>
            {/* <h3 className='nav-title' >my travel experience</h3> */}
        </nav>
    )
}

export default Nav