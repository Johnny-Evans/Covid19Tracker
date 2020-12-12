import React from "react";
import Card from "./Card/Card";
import Spinner from "../UI/Spinner/Spinner";
import { connect } from "react-redux";
import classes from "./Cards.module.css";

function Cards(props){
    let cards = (
        <React.Fragment>
            <Spinner />
            <Spinner />
            <Spinner />
        </React.Fragment>
    );
    if(props.globalStats.length && !props.showSelected){
        cards =  props.globalStats.map( stat => {
            return(
                <Card
                    title={stat.title} 
                    key={stat.total}
                    total={stat.total}
                    new={stat.new}
                    color={stat.color}
                    lastUpdated={props.lastUpdated}
                    ly={stat.ly}
                />
            );
        })
    }  else if (props.showSelected && props.selectedCountry){
        cards =  props.selectedCountry.map( stat => {
            return(
                <Card
                    title={stat.title} 
                    key={stat.total}
                    total={stat.total}
                    new={stat.new}
                    color={stat.color}
                    lastUpdated={props.lastUpdated}
                />
            );
        })
    }

    return(
        <div className={classes.cards}>
            {cards}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        globalStats: state.globalStats,
        selectedCountry: state.selectedCountry,
        lastUpdated: state.date
    }
}

export default connect(mapStateToProps)(Cards);