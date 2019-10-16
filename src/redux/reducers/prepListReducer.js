const prepListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_PREPLIST':
            return [...state, action.payload];
        default:
            return state;
    }
};


export default prepListReducer;