const directions = ['N/S', 'E/W']
const periods = {
  yellow: 30 * 1000,
  green: 5 * 60 * 1000
}

let getNextDirection = (currentDirection) => {
  if (currentDirection == 'N/S'){
    return 'E/W'
  }
  else if (currentDirection == 'E/W'){
    return 'N/S'
  }
}

let yellowLight = (nextDirection, nextLight) => {
  console.log(`Yellow light running. Next direction: ${nextDirection}`)

  setTimeout(() => {
    const nextAction = nextLight || greenLight
    nextAction(nextDirection)
  }, periods.yellow)
}

let greenLight = (currentDirection, nextLight) => {
  console.log(`Green light for direction ${currentDirection}`)

  setTimeout(() => {
    const nextAction = nextLight || yellowLight
    const nextDirection = getNextDirection(currentDirection)
    nextAction(nextDirection)
  }, periods.green)
}

module.exports = {
  getNextDirection, yellowLight, greenLight, directions, periods
}
