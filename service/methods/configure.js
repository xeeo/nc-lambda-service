'use strict';

const Joi = require('joi'),
      aws = require('aws-sdk');

const validateOptions = (config) => {
    const schema = Joi.object().keys({
        serviceToLoad: Joi.string().required(),
        environment  : Joi.string().required(),
        lambda       : Joi.any().required()
    });

    return Joi.validate(config, schema);
};

module.exports = function(config) {
    validateOptions(config || {});

    this.lambda = config.lambda;
    delete config.lambda;
    this.options = config;
};
