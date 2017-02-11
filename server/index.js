'use strict';

const Hapi = require('hapi');
const Routes = require('./routes');

const server = new Hapi.Server();
server.connection({ port: 5000, host: 'localhost' });

//register routes
server.route(Routes);

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});