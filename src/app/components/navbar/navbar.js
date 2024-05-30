"use client"
import React from "react";
import {useStore} from '../../state/navbar-state'
function Navbar() {
  const nav_text  = useStore(state => state.navbar_text)
  return (
    <nav className="navbar w-full h-10 px-10 bg-white flex justify-between">
      
    <h1>{nav_text}</h1>
    <h1>Thasmai</h1>

</nav>
  );
}

export default Navbar;
