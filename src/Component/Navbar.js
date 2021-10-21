import * as React from 'react';
import { NavLink } from 'react-router-dom';
import "./Navbar.css"

export default function Navbar() {
  return (
    <div className="nav-par">
    <div className="nav">                                           
       {/* <img className="logo" src={Logo} /> */}
       <div className="links">
          
          <NavLink exact className="link" to="/Home" activeClassName="underline">Home</NavLink>
          <NavLink exact className="link" to="/Tableform" activeClassName="underline">Table</NavLink>
          <NavLink exact className="link" to="/edit-user/${id}" activeClassName="underline">Edit</NavLink>

        
       </div>                                   
    </div>
</div>
  );
}
