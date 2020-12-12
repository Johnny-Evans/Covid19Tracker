import React, {useState, useEffect} from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionTypes from "./Store/actionTypes";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Dropdown from "./Components/Dropdown/Dropdown";
import LineChart from "./Components/Charts/LineChart/LineChart";
import BarChart from "./Components/Charts/BarChart/BarChart";
import ErrorModal from "./Components/UI/Modal/Modal";

function App(props) {
  const [dropValue, setDropValue] = useState('');
  const [showSelected, setShowSelected] = useState(dropValue.length);
  const [error, setError] = useState(null);

  const { fetchGlobalStats, fetchDailyStats, fetchSelectedCountry } = props;

  useEffect(() => {
    async function fetchData(){
      await axios.get('https://api.covid19api.com/summary')
      .then(response => {
        fetchGlobalStats(response.data);
        const selelctedCountry = response.data && response.data.Countries.filter(cntry => cntry.Country === dropValue)[0];
        showSelected && fetchSelectedCountry(selelctedCountry, dropValue)
      })
      .catch(error => {
        setError(error);
        console.log('Error', error.message);
      })
    }

    async function fetchDailyData(){
      await axios.get('https://covid19.mathdro.id/api/daily')
      .then(dailySummary => {
        fetchDailyStats(dailySummary.data)
      })
      .catch(error => {
        setError(error);
      });
    }
    fetchData();
    fetchDailyData();
  }, [dropValue, showSelected, fetchGlobalStats, fetchDailyStats, fetchSelectedCountry]);

  function updateDropValue(e){
    setDropValue(e.target.value)
    setShowSelected(e.target.value.length);
  }

  let chart = <LineChart />;
  if(dropValue && showSelected){
    chart = <BarChart dropValue={dropValue}/>
  }

  return (
    <React.Fragment>
      {error ? <ErrorModal message={error.message}/> :
      <div>
        <Header title={dropValue}/>
        <Cards countries={props.countries} showSelected={showSelected}/>
        <Dropdown dropValue={dropValue} changed={updateDropValue}/>
        {chart}
      </div> }
    </React.Fragment>
  );;
}

const mapStateToProps = state => {
  return {
    globalStats: state.global,
    countries: state.countries
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchGlobalStats: (data, dropValue) => dispatch({type: actionTypes.FETCH_ALL_STATS, data: data, dropValue: dropValue}),
      fetchDailyStats: (data) => dispatch({type: actionTypes.FETCH_DAILY_SUMMARY, data: data}),
      fetchSelectedCountry: (data, dropValue) => dispatch({type: actionTypes.FETCH_SELECTED_COUNTRY, data: data, dropValue: dropValue})
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
