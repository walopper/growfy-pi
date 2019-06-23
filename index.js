const SerialPort = require('serialport')
const soilController = require('./controllers/soil.controller')

const Readline = SerialPort.parsers.Readline

var serial

try {
  const port = new SerialPort('/dev/ttyACM0', {
    baudRate: 9600
  })
  
  const parser = new Readline()
  
  port.pipe(parser)
  parser.on('data', data => soilController(data))


} catch(error) {
  console.error("No se pudo conectar con raspi")
}

