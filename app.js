/**
 * webserver.
 * implementacion pendiente
 */
'use strict';

const http = require('http'); // importa paquete http
const express = require('express'); // importo libreria express
const bodyParser = require('body-parser'); // importo body-parser
const cors = require('cors');

const initApp = (options, routes) => {
    const app = express(http); // creo el webserver
    app.use(cors(options.cors || null)); // limito quien puede ingresar
    app.use(bodyParser.json(options.bodyParser.json || null)); // parseo json

    if(routes) app.use(routes); // aplico ruteo (pendiente)

    let port = process.env.PORT || options.port || 8010; // defino puerto del webserver
    let host = options.host || '127.0.0.1'; // ip en la que escuchara request

    // inicio el webserver
    app.listen(port, host, () => console.log('Server iniciado en http://%s:%s/', host, port));

    return app;
}

// inicio la app
initApp();
