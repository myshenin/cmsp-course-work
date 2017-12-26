const aws = require('aws-sdk');
const lambda = new aws.Lambda({
    region: 'eu-central-1'
});

module.exports.calculate = (event, context, callback) => {
    const input = JSON.parse(event.body);

    if (!input.data) {
        input.data = {};
    }
    if (!input.data.inverseTransformSampling) {
        input.data.inverseTransformSampling = [];
    }
    if (!input.data.metropolisMethod) {
        input.data.metropolisMethod = [];
    }
    if (!input.data.neumannMethod) {
        input.data.neumannMethod = [];
    }

    Promise.all([
        new Promise((resolve, reject) => lambda.invoke({
            FunctionName: 'inverse-transform-sampling-dev-hello',
            Payload: JSON.stringify({
                p: input.p,
                n: input.n
            })
        }, (error, data) => {
            if (error) {
                callback(null, {
                    statusCode: 500,
                    body: JSON.stringify(error),
                });
                reject();
            } else {
                const result = JSON.parse(JSON.parse(data.Payload).body);
                const part = input.data.inverseTransformSampling.find(item => item.value === result.value);
                if (part) {
                    part.amount++;
                } else {
                    input.data.inverseTransformSampling.push(Object.assign({amount: 1}, result));
                }
                resolve();
            }
        })),

        new Promise((resolve, reject) => lambda.invoke({
            FunctionName: 'metropolis-method-dev-hello',
            Payload: JSON.stringify({
                p: input.p,
                n: input.n
            })
        }, (error, data) => {
            if (error) {
                callback(null, {
                    statusCode: 500,
                    body: JSON.stringify(error),
                });
                reject();
            } else {
                const result = JSON.parse(JSON.parse(data.Payload).body);
                const part = input.data.metropolisMethod.find(item => item.value === result.value);
                if (part) {
                    part.amount++;
                } else {
                    input.data.metropolisMethod.push(Object.assign({amount: 1}, result));
                }
                resolve();
            }
        })),

        new Promise((resolve, reject) => lambda.invoke({
            FunctionName: 'neumann-method-dev-hello',
            Payload: JSON.stringify({
                p: input.p,
                n: input.n
            })
        }, (error, data) => {
            if (error) {
                callback(null, {
                    statusCode: 500,
                    body: JSON.stringify(error),
                });
                reject();
            } else {
                const result = JSON.parse(JSON.parse(data.Payload).body);
                const part = input.data.neumannMethod.find(item => item.value === result.value);
                if (part) {
                    part.amount++;
                } else {
                    input.data.neumannMethod.push(Object.assign({amount: 1}, result));
                }
                resolve();
            }
        })),

        new Promise((resolve, reject) => lambda.invoke({
            FunctionName: 'analitic-dev-hello',
            Payload: JSON.stringify({
                p: input.p,
                n: input.n
            })
        }, (error, data) => {
            if (error) {
                callback(null, {
                    statusCode: 500,
                    body: JSON.stringify(error),
                });
                reject();
            } else {
                const result = JSON.parse(JSON.parse(data.Payload).body);
                input.data.analitic = result;
                resolve();
            }
        })),
    ])
        .then(() => {
            const response = {
                statusCode: 200,
                headers: {
                    "Access-Control-Allow-Origin" : "*"
                },
                body: JSON.stringify(input)
            };

            callback(null, response);
        });

};
