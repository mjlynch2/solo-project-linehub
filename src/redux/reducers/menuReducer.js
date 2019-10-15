const menuReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_MENU':
            return action.payload;
        default:
            return state;
    }
};


export default menuReducer;