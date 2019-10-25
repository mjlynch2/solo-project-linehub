const orderReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ORDER':
            return action.payload;
        case 'SET_ORDER_TODAY':
            return action.payload;
        default:
            return state;
    }
};


export default orderReducer;