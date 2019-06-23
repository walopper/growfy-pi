const SerialPort = require('serialport')
const soilController = require('./controllers/soil.controller')

const Readline = SerialPort.parsers.Readline

function arduinoConnect() {
    try {
        const port = new SerialPort('/dev/ttyACM0', {
            baudRate: 9600
        })

        if(!port) throw 'No se pudo conectar a /dev/ttyACM0'

        const parser = new Readline()

        port.pipe(parser)
        parser.on('data', soilController)

    } catch (error) {
        console.error('No se pudo conectar con raspi', error)
        setTimeout(arduinoConnect, 2000) // reintento en 2 segundos
    }
}

arduinoConnect() // conecto con arduino

