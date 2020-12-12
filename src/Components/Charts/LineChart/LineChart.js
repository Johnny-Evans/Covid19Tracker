import React from "react";
import Spinner from ".././../UI/Spinner/Spinner";
import { connect } from "react-redux";
import { Line } from "react-chartjs-2";
import classes from "./LineChart.module.css";

function LineChart(props){
    let chart = (
        props.dialyData.length ?
        <Line 
            data={{
                labels: props.dialyData.map(data => data.date),
                datasets: [{
                    data: props.dialyData.map(data => data.confirmed),
                    label: 'Confirmed',
                    borderColor: '#5a7fdb'
                }, {
                    data: props.dialyData.map(data => data.deaths),
                    label: 'Deaths',
                    borderColor: '#ff0a0a'
                }]
            }}
        /> : <Spinner />
    );

    return(
        <div className={classes.chart}>
            {chart}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        dialyData: state.dailyStats
    }
}

export default  connect(mapStateToProps)(LineChart);