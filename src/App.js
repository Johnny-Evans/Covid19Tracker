import React, {useEffect} from "react";
import { connect } from "react-redux";
import axios from "axios";
import * as actionTypes from "./Store/actionTypes";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";

function App(props) {
  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://api.covid19api.com/summary')
      props.fetchGlobalStats(response.data);
      console.log(response);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}

const mapStateToProps = state => {
  return {
    globalStats: state.global
  }
}

const mapDispatchToProps = dispatch => {
  return {
      fetchGlobalStats: (data) => dispatch({type: actionTypes.FETCH_ALL_STATS, data: data})
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
