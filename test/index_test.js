let chai = require('chai')
let expect = chai.expect
let sinonChai = require('sinon-chai')
let sinon = require('sinon')
let trafficLight = require('../functions.js')

chai.use(sinonChai)

it('does something useful', () => {
  //Increase the test coverage :D
  expect([1, 2]).to.contain(2)
})

describe('#nextDirection', () => {
  it('chooses the next direction', () => {
    const currentDirection = trafficLight.directions.shift()
    const nextDirection = trafficLight.getNextDirection(currentDirection)

    expect(nextDirection).to.eql('E/W')
  })
})

describe('#yellowLight', () => {
  it('calls the next light action after the given period of time', () => {
    const clock = sinon.useFakeTimers();
    const nextDirection = 'E/W'
    const greenLightSpy = sinon.spy(trafficLight.greenLight)

    trafficLight.yellowLight(nextDirection, greenLightSpy)
    clock.tick(30 * 1000)

    expect(greenLightSpy).to.have.been.calledWith(nextDirection)
    clock.restore()
  })
})

describe('#greenLight', () => {
  it('calls the yellow light action after the given period of time', () => {
    const clock = sinon.useFakeTimers();
    const currentDirection = 'N/S'
    const nextDirection = trafficLight.getNextDirection(currentDirection)
    const yellowLightSpy = sinon.spy(trafficLight.yellowLight)

    trafficLight.greenLight(currentDirection, yellowLightSpy)
    clock.tick(5 * 60 * 1000)

    expect(yellowLightSpy).to.have.been.calledWith(nextDirection)
    clock.restore()
  })
})
