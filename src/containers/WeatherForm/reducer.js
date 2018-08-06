const initState = {
    weatherData : {},
    errorMessage: ''
}

export const weatherReducer = (state = initState, action) => {
    switch(action.type){
        case 'SET_WEATHER_DATA':   
            return {
                ...state, 
                weatherData: action.payload
            }
        case 'SET_ERROR_MESSAGE':   
            return {
                ...state, 
                errorMessage: action.payload
            }
        default:
            return state;
    }
}
