const menuReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MENU':
            return action.payload;
        case 'SET_MENU_FOR_STATION':
            return action.payload;
        default:
            return state;
    }
};


export default menuReducer;