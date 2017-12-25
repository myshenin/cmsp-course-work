const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
const binomial = (n, k, p) => factorial(n) / (factorial(k) * factorial(n - k)) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports.neumannMethod = (event, context, callback) => {
    const {n, p} = event;
    const c = binomial(n, Math.ceil(n / 2), p);
    let point = {
        x: null,
        y: null
    };

    do {
        point.x = Math.round(Math.random() * n);
        point.y = Math.random() * c;
    } while (point.y >= binomial(n, point.x, p));

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            value: point.x,
        }),
    };

    callback(null, response);
};
