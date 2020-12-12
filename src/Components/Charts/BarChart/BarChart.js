import React from "react";
import Spinner from "../../../Components/UI/Spinner/Spinner";
import classes from "../LineChart/LineChart.module.css";
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";

function BarChart(props){
    return(
        <div className={classes.chart}>
            {props.selectedCountry ?
            <Bar
                data={{
                    labels:['Infected Today', 'Recovered Today', 'Deaths Today'],
                    datasets: [{
                        label: 'Number of people',
                        backgroundColor: ['#5a7fdb', '#8ACA2B', '#ff0a0a'],
                        data: [
                            props.selectedCountry[0].new,
                            props.selectedCountry[1].new,
                            props.selectedCountry[2].new
                        ]
                    }]
                }} 
                options={{
                    legend: {display: false},
                    title: {display: true, text:`Current State in ${props.dropValue}`}
                }}
            /> : <Spinner />}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        selectedCountry: state.selectedCountry
    }
}

export default connect(mapStateToProps)(BarChart);