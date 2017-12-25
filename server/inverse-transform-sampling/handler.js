const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
const binomial = (n, k, p) => factorial(n) / (factorial(k) * factorial(n - k)) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports.inverseTransformSampling = (event, context, callback) => {
    const {n, p} = event;
    const target = Math.random();
    let current = 0;
    let k = 0;
    while ((target >= current) && (k <= n)) {
        current += binomial(n, k, p);
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
