const logoReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_BRANDS':
            return action.payload;
        default:
            return state;
    }
};

export default logoReducer;