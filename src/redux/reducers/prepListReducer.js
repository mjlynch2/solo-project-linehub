const prepListReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_PREPLIST':
            return [...state, action.payload];
        case 'REMOVE_FROM_PREPLIST':
            state = state.filter(item => item !== action.payload);
            console.log(state);
            
            return state;
        default:
            return state;
    }
};


export default prepListReducer;