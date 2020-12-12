import * as actionTypes from "./actionTypes";

const initialState = {
    globalStats: [],
    dailyStats: [],
    selectedCountry: null,
    countries: null,
    date: null
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.FETCH_ALL_STATS:
            const confirmed = {
                title: "Confirmed",
                color: "#5a7fdb",
                total: action.data.Global.TotalConfirmed,
                new: action.data.Global.NewConfirmed
            }
    
            const recovered = {
                title: "Recovered",
                color: "#8ACA2B",
                total: action.data.Global.TotalRecovered,
                new: action.data.Global.NewRecovered
            }
            
            const deaths = {
                title: "Deaths",
                color: "#ff0a0a",
                total: action.data.Global.TotalDeaths,
                new: action.data.Global.NewDeaths
            }

            const globalStatistics = [confirmed, recovered, deaths]
            return {
                ...state,
                globalStats: globalStatistics,
                countries: action.data.Countries,
                date:  new Date(action.data.Date).toDateString() 
            }
        case actionTypes.FETCH_DAILY_SUMMARY:
            const dailySummary = action.data.map(dailySum => {
                return {
                    confirmed: dailySum.confirmed.total,
                    deaths: dailySum.deaths.total,
                    date: dailySum.reportDate
                }
            })
            return {
                ...state,
                dailyStats: dailySummary
            }
        case actionTypes.FETCH_SELECTED_COUNTRY:
            const confirmedSC = {
                title: "Confirmed",
                color: "#5a7fdb",
                total: action.dropValue && action.data.TotalConfirmed,
                new: action.dropValue && action.data.NewConfirmed,
                ly: true
            }
    
            const recoveredSC = {
                title: "Recovered",
                color: "#8ACA2B",
                total: action.dropValue && action.data.TotalRecovered,
                new: action.dropValue && action.data.NewRecovered,
                ly: true
            }
            
            const deathsSC = {
                title: "Deaths",
                color: "#ff0a0a",
                total: action.dropValue && action.data.TotalDeaths,
                new: action.dropValue && action.data.NewDeaths
            }
            const selected = [confirmedSC, recoveredSC, deathsSC]
            return {
                ...state,
                selectedCountry: selected
            }
        default:
            return state;
    }
}

export default reducer;