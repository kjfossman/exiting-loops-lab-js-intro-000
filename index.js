function breakOut(array, changeValue, stopValue){
  for(let i = 0; i<array.length; i++){
  array.splice(i, 1, changeValue)
  if(array[i] === stopValue){
    break
  }}
  return array
}
