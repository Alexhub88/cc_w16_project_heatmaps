import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/map1">Map1</Link>
    </li>
    <li>
      <Link to="/map2">Map2</Link>
    </li>
  </ul>
);

export default Navbar;
