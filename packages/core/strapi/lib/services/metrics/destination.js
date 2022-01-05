'use strict';

const fetch = require('node-fetch');
const { Plugin } = require('../../itly/index');

module.exports = class extends Plugin {
  constructor() {
    super('packages-core-strapi');
  }

  track(_, event, options) {
    fetch('http://localhost:4000/track', {
      method: 'POST',
      mode: 'no-cors',
      body: JSON.stringify({
        ...event,
        ...event.properties, // there is another 'properties' object on 'options', so this needs to be spread separately to avoid overwrite
        ...options,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
};
