var routes = [
    {
        method: ['GET'],
        path: '/healthcheck',
        handler: function (request, reply) {
            reply('Greenlight');
        }
    }
]

module.exports = routes;