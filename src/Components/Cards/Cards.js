import React, {useEffect} from "react";
import Card from "./Card/Card";
import { connect } from "react-redux";
import classes from "./Cards.module.css";

function Cards(props){
    useEffect(() => {
        console.log(props.globalStats);
    });
    return(
        <div className={classes.cards}>
            {props.globalStats.map( stat => {
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
            })}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        globalStats: state.globalStats,
        lastUpdated: state.date
    }
}

export default connect(mapStateToProps)(Cards);