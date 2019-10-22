const defaultState = {id: 0, station: ''}

const userStationReducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SET_STATION_FOR_USER':
            return {id: action.id, station: action.name }
        default:
            return state;
    }
};
export default userStationReducer;

