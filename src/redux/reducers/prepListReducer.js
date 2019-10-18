const preplistReducer = (state = [], action) => {
    switch (action.type) {
        // case 'ADD_TO_PREPLIST':         
        //     return action.payload
        // case 'REMOVE_FROM_PREPLIST':            
        //     return action.payload;
        case 'SET_PREPLIST':
            return action.payload;
        default:
            return state;
    }
};


export default preplistReducer;