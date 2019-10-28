const defaultState = {userId: 0, stationId: 0, station: ''}

const userStationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_STATION_FOR_USER':
            return {userId: action.userId, stationId: action.stationId, station: action.name }
        case 'RESET_USER_STATION':
            return defaultState;
        default:
            return state;
    }
};
export default userStationReducer;

