'use strict';

const singleton = require('nc-singleton');
const Hoek      = require('hoek');

const Plugin = function Plugin() {
    this.options = {};

    return singleton.call(this, Plugin);
};

Hoek.merge(Plugin.prototype, {
    configure : require('./methods/configure'),
    getService: require('./methods/get-service')
});

/**
 * Export Instance to the world!
 *
 * @type {function(this:{})}
 */
module.exports = Plugin.bind({});
