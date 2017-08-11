let trafficLight = require('./functions.js')

console.log('Starting sequence...')
trafficLight.greenLight(trafficLight.directions.shift())
