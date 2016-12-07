'use strict';

const Hoek = require('hoek');

let Plugin = function Plugin() {
    this.options = {};
};

Hoek.merge(Plugin.prototype, {
    configure: require('./methods/configure'),
    invoke   : require('./methods/invoke')
});

/**
 * Export Instance to the world!
 *
 * @type {function(this:{})}
 */
module.exports = Plugin.bind({});
