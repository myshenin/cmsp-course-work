const next = (state = {}, action) => {
    switch (action.type) {
        case 'GET_NEXT_FULFILLED': {
           state = action.payload.data;
        } break;
        case 'UPLOAD_NEXT': {
            state = action.payload;
        } break;
    }
    return state;
};

export default next;