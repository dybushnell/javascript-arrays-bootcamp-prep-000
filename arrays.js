var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(a,b){
  var aNew = [b, ...a]
  return aNew
}

function destructivelyAddElementToBeginningOfArray(a,b){
  a.unshift(b);
  return a;
}

function addElementToEndOfArray(a,b){
  var aNew = [...a, b]
  return aNew
}

function destructivelyAddElementToEndOfArray(a,b){
  return [...a, b]
}