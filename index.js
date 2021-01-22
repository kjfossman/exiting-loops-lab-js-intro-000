

function breakOut(array, changeValue, stopValue){
  for(let i = 0; i<array.length; i++){
  if(array[i] === stopValue){
    break
  }
  array.splice(i, 1, changeValue)
}
  return array
}

function keepGoing(array, changeValue, skipValue){
  for(let i = 0; i<array.length; i++){
    if(array[i] === skipValue){
      continue
    }
    array.splice(i,1,changeValue)
  }
}