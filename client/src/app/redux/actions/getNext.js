const axios = require('axios');

const getNext = (payload) => {
    return {
        type: 'GET_NEXT',
        payload: axios.post('https://u5a5mkgeid.execute-api.eu-central-1.amazonaws.com/dev/cmsp/calculate', payload)
    };
};

export default getNext;