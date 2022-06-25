
const myEach = (arrayCollection, alertCb) => {
  Object.values(arrayCollection).forEach(item => alertCb(item))

  return arrayCollection

}
const myMap = (arrayCollection, callback) => {
const values = Object.values(arrayCollection);

callback = values.map(value => 
  value * 3)

return callback
}


const myReduce = (arrayCollection, callback, acc) => {
  let values = Object.values(arrayCollection);

  if (!acc) {
    acc = values[0];
    values = values.slice(1);
  }


  for (let i = 0; i < values.length; i++) {
    acc = callback(acc, values[i], values);
  }
  return acc

}


const myFind = (arrayCollection, target) => {
  let values = Object.values(arrayCollection)
  for(let num = 0; num< arrayCollection.length; num++)

  if (target(values[num])) 

  return values[num]

}

const  myFilter = (arrayCollection, predicate) => {
  const values = Object.values(arrayCollection)
  return values.filter(num => num > 10)
}

const mySize = (arrayCollection) => {
  const values = Object.values(arrayCollection)
  return new Set(values).size

}

const myFirst = (testArr, n) => {
  const values = Object.values(testArr)
  if (n) {
      return values.slice(0, n)
  }
  return values[0]
}

const myLast = (testArr, start=false) => {
  return (start) ? testArr.slice(testArr.length-start, testArr.length) : testArr[testArr.length-1];
}


const myKeys = (testArr) => {
  return Object.keys(testArr)
  
}

const myValues = (testArr) => {
  return Object.values(testArr)
  
}