const iterationAmount = (state = 0, action) => {
    switch (action.type) {
        case 'SET_ITERATION_AMOUNT': {
            state = action.payload;
        } break;
    }
    return state;
};

export default iterationAmount;