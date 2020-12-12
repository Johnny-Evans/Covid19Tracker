import React from "react";
import classes from "./Header.module.css";
import VirusLogo from "../../assets/coronavirus.jpg";

function Header(props){
    return(
        <div className={classes.header}>
            <h1>C<img src={VirusLogo} alt="Covid-19"/>VID-19 Tracker</h1>
            <h1>{props.title ? props.title : "Global"}</h1>
        </div>
    );
}

export default Header;