import React from "react";
import classes from "./Header.module.css";
import VirusLogo from "../../assets/coronavirus.jpg";

function Header(){
    return(
        <div className={classes.header}>
            <h1>C<img src={VirusLogo} alt="Covid-19"/>vid-19</h1>
            <h1>Global</h1>
        </div>
    );
}

export default Header;