const next = (state = null, action) => {
    switch (action.type) {
        case 'GET_NEXT_FULFILLED': {
            console.log('GET_NEXT');
        } break;
    }
    return state;
};

export default next;