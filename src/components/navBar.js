import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => { 
    return (
      <div>
        <Link className="navbar bg-primary" to="/">React Native Tuanle273
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
             <li>
            <Link to="/About">About</Link>
          </li>
        </ul>
      </Link>
      </div>
    );
};

export default Navbar;