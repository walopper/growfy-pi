/**
 * webserver
 */
'use strict';

const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const initApp = (options, routes) => {
    const app = express(http);
    app.use(cors(options.cors || null));
    app.use(bodyParser.json(options.bodyParser.json || null));

    if(routes) app.use(routes);

    let port = process.env.PORT || options.port || 8010;
    let host = options.host || '127.0.0.1';

    app.listen(port, host, () => console.log('Server iniciado en http://%s:%s/', host, port));

    return app;
}

const app = initApp();

module.exports = initApp;

10 + 5