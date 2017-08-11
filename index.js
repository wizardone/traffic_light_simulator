let trafficLight = require('./functions.js')

console.log('Starting sequence...')
let currentDirection = trafficLight.directions.shift()
trafficLight.greenLight(currentDirection)
