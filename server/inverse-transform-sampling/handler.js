const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
const binomial = (n, k, p) => factorial(n) / (factorial(k) * factorial(n - k)) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports.inverseTransformSampling = (event, context, callback) => {
    event.body = JSON.parse(event.body);
    //SEND IT IN API REQUEST
    const target = Math.random();
    let current = 0;
    let k = 0;
    while (target >= current) {
        current += binomial(event.body.n, k, event.body.p);
        k++;
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            value: k
        }),
    };

    callback(null, response);
};
