// Your code here
function mapToNegativize(array) {
  return array.map(i => i * -1)
}

function mapToNoChange(array) {
  return array.map(i => i)
}

function mapToDouble(array) {
  return array.map(i => i * 2)
}

function mapToSquare(array) {
  return array.map(i => i**2)
}

function reduceToTotal(array, start=0) {
  const reducer = function(accumulate, current) {return accumulate + current}
  return array.reduce(reducer + start)
}

function reduceToAllTrue() {

}

function reduceToAnyTrue() {

}
