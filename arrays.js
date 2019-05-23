var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var aNew = [b, ...a]
  return aNew
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b)
  return a
}

function addElementToEndOfArray(a,b){
  var aNew = [...a, b]
  return aNew
}

function destructivelyAddElementToEndOfArray(a,b){
  a.push(b)
  return a
}


function accessElementInArray(a,b){
  console.log(a[b])
}