var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var aNew = [b, ...a]
  return aNew
}

function destructivelyAddElementToBeginningOfArray(a,b){
  return a.unshift(b)
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
  return a[b]
}

function destructivelyRemoveElementFromBeginningOfArray(a,b){
  return a.shift(b)
}

function removeElementFromBeginningOfArray(a){
  return a.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(a){
  return a.pop()
}

function removeElementFromEndOfArray(){
}