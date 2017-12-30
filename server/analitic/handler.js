const factorial = (n) => n === 0 ? 1 : n * factorial(n - 1);
const binomial = (n, k, p) => (factorial(n) / (factorial(k) * factorial(n - k))) * Math.pow(p, k) * Math.pow(1 - p, n - k);

module.exports.analitic = (event, context, callback) => {
    const {n, p} = event;
    let total = 0;
    let _p_ = [];
    for (let i = 0; i < n + 1; i++){
        let tmp = binomial(n, i, p);
        _p_.push(tmp);
    }

    _p_ = _p_.map((item, index) => {
        return {
            value: index,
            p: item
        }
    });

    const response = {
        statusCode: 200,
        body: JSON.stringify(_p_),
    };

    callback(null, response);
};
