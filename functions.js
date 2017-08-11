const directions = ['N/S', 'E/W']

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
  }, 30 * 1000)
}

let greenLight = (currentDirection, nextLight) => {
  console.log(`Green light for direction ${currentDirection}`)

  setTimeout(() => {
    const nextAction = nextLight || yellowLight
    const nextDirection = getNextDirection(currentDirection)
    nextAction(nextDirection)
  }, 5 * 60 * 1000)
}

module.exports = {
  getNextDirection, yellowLight, greenLight, directions
}
