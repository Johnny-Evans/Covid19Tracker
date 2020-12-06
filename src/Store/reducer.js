import * as actionTypes from "./actionTypes";

const initialState = {
    globalStats: [],
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
        default:
            return state;
    }
}

export default reducer;