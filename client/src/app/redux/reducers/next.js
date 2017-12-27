const next = (state = null, action) => {
    switch (action.type) {
        case 'GET_NEXT_FULFILLED': {
           state = action.payload.data;
        } break;
    }
    return state;
};

export default next;