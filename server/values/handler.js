const M = (array) => array.reduce((accumulator, current) => accumulator + ((current.amount || current.p) * current.value), 0) /
    (array.reduce((accumulator, current) => accumulator + current.amount, 0) || 1);
const D = (array) => - Math.pow(M(array), 2) + M(array.map(item => Object.assign(item, {value: Math.pow(item.value, 2)}))) ;

module.exports.values = (event, context, callback) => {
    const {
        inverseTransformSampling,
        metropolisMethod,
        neumannMethod,
        analitic
    } = event.data;
    const values = {
        inverseTransformSampling: {
            M: M(inverseTransformSampling),
            D: D(inverseTransformSampling),
        },
        metropolisMethod: {
            M: M(metropolisMethod),
            D: D(metropolisMethod),
        },
        neumannMethod: {
            M: M(neumannMethod),
            D: D(neumannMethod)
        },
        analitic: {
            M: M(analitic),
            D: D(analitic),
        }
    };
    const response = {
        statusCode: 200,
        body: JSON.stringify(values),
    };

    callback(null, response);
};
