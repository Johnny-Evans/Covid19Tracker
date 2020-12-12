import React from "react";
import classes from "./Card.module.css";
import CountUp from "react-countup";

function Card(props){
    return(
        <div className={classes.Card} style={{borderBottom: `12px solid ${props.color}`}}>
            <h1 className={classes.title}>{props.title}</h1>
            <div>
                <div className={classes.text + " " + classes.total}>
                    <h2>Total {props.title}</h2>
                    <h3><CountUp 
                            start={0}
                            end={props.total}
                            duration={2.5}
                            separator=","
                        />
                    </h3>
                </div>
                <div className={classes.text + " " + classes.new}>
                    <h2>{props.title} Today</h2>
                    <h3><CountUp 
                            start={0}
                            end={props.new}
                            duration={2.5}
                            separator=","
                        />
                    </h3>
                </div>
                <div className={classes.text + " " + classes.date}>
                    <h2>Last Updated</h2>
                    <h3>{props.lastUpdated}</h3>
                </div>
            </div>
        </div>
    );
}

export default Card;