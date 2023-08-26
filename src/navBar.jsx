import React from 'react'
import {ImCart} from "react-icons/im";
import { Link } from "react-router-dom";

function NavBar({ cartNum }) {
  return (
    <div className="navBar">
      <Link to="/">Katy Beauty Shop</Link>
      <Link to="/cart" className="cart-items">
        <ImCart style={{ marginLeft: 10 }} />
        <div className="cart-num">{cartNum}</div>
      </Link>
      <div className="meet-team-link">
        <Link to="/meetTeam">Meet the Team</Link>
      </div>
    </div>
  );
}


export default NavBar;