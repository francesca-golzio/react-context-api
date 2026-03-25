/* import { NavLink } from 'react-router-dom';
import menu from '../data/menu' */
import Navbar from "./Navbar"

function AppHeader() {

  return (
    <>
      <header>

        <Navbar />
        
      </header>
    </>
  )

}

export default AppHeader

/* lista non centralizzata con menu.map */
{/* <li className="nav-item">
  <NavLink to="/" className="nav-link" aria-current="page">Home </NavLink>
</li>
<li className="nav-item">
  <NavLink to="/products" className="nav-link">Products </NavLink>
</li>
<li className="nav-item">
  <NavLink to="/about" className="nav-link">About </NavLink>
</li> */}