'use strict';

const Promise = require('bluebird');

module.exports = function(lambdaFunction, params) {
    return new Promise((resolve, reject) => {

        const functionName = `${this.options.serviceToLoad}-${this.options.environment}-${lambdaFunction}`;

        this.lambda.invoke({
            FunctionName: functionName,
            Payload: JSON.stringify(params, null, 2)
        }, function(error, data) {
            if (error) {
                reject(error);
            } else {
                resolve(data.Payload)
            }
        });

    });
};

