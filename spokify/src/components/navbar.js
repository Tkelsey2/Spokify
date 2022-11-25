import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// Card Component
function Navbar () {
    return(
      <div className='nav'>
  <img src='spokify/src/assets/albumicon.png' className='navimage'></img>
  <img src='spokify/src/assets/musicicon.png' className='navimage'></img>
 </div>
    )
  }
  
  export default Navbar