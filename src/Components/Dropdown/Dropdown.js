import React from "react";
import classes from "./Dropdown.module.css";
import { connect } from "react-redux";

function Dropdown(props){
    return(
        <div className={classes.dropdown}>
            <label htmlFor="">Choose Country</label>
            <select value={props.dropValue} onChange={props.changed}>
                <option value=''>Global</option>
                {props.allCountries && props.allCountries.map(country => {
                    return <option key={country.Country} value={country.Country}>{country.Country}</option>
                })}
            </select>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        allCountries: state.countries
    }
}

export default connect(mapStateToProps)(Dropdown);