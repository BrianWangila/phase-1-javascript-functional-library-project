
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


const  myFilter = (arrayCollection, pred) => {
  const values = Object.values(arrayCollection)
  return values.filter(num => num > 10)
}


const mySize = (arrayCollection) => {
  const values = Object.values(arrayCollection)
  return new Set(values).size

}


const myFirst = (arrayCollection, n) => {
  const values = Object.values(arrayCollection)
  if (n) {
    return values.slice(0, n)
  }

  else {
    return values[0]
  }

}

const myLast = (arrayCollection, n) => {
   if (n) {
    return arrayCollection.slice(arrayCollection.length-n, arrayCollection.length)
   }
   else {
    return arrayCollection[arrayCollection.length-1]
   }
}


const myKeys = (arrayCollection) => {

  return Object.keys(arrayCollection)
  
}

const myValues = (arrayCollection) => {

  return Object.values(arrayCollection)
  
}