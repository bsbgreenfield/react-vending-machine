import React from "react";
import "./Items.css"
import { Link } from "react-router-dom";
function HomeLink(){
    return(
       <Link to={"/"} className="home">Home</Link>
    )
}

export default HomeLink