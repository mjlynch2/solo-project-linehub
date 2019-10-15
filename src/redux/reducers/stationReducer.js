const stationReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_STATIONS':
            return action.payload;
        default:
            return state;
    }
};


export default stationReducer;
