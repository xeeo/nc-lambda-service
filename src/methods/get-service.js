'use strict';

module.exports = function(serviceToLoad) {
    if (!(typeof serviceToLoad === 'string' || serviceToLoad instanceof String)) {
        throw new Error('Service name has to be specified');
    }

    const Service = require('../../service/implementation');
    const service = new Service();

    service.configure({
        serviceToLoad: serviceToLoad,
        environment  : this.options.environment,
        lambda       : this.lambda
    });

    return service;
};
