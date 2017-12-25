const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
const binomial = (n, k, p) => factorial(n) / (factorial(k) * factorial(n - k)) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports.metropolisMethod = (event, context, callback) => {
    const {n, p} = event;
    let current = Math.round(Math.random() * n);
    let next = 0;

    for (let i = 0; i < Math.ceil(Math.random() * 50); i++) {
        if (Math.random() < 0.5) {
            next = current - 1;
        } else {
            next = current + 1;
        }

        if ((next < 0) || (next > n)) continue;
        else if (binomial(n, current, p) < binomial(n, next, p)) {
            current = next;
        } else if (Math.random() < binomial(n, next, p) / binomial(n, current, p)) {
            current = next;
        }
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify({
            value: current,
        }),
    };

    callback(null, response);
};
