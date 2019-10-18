const preplistReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_PREPLIST':
            return action.payload;
        default:
            return state;
    }
};


export default preplistReducer;