'use strict';

const Joi     = require('joi'),
      AWS     = require('aws-sdk');

const validateOptions = (options) => {
    const schema   = Joi.object().keys({
        accessKeyId    : Joi.string().optional(),
        secretAccessKey: Joi.string().optional(),
        region         : Joi.string().optional().default('us-east-1'),
        environment    : Joi.string().optional().default('dev')
    });

    return Joi.validate(options, schema);
};

module.exports = function(options) {
    validateOptions(options || {});

    this.options = options;

    AWS.config.update({
        accessKeyId    : options.accessKeyId,
        secretAccessKey: options.secretAccessKey,
        region         : options.region
    });

    this.lambda  = new AWS.Lambda();
};
