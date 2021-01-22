function breakOut(array, changeValue, stopValue){
  let changeValue = Math.floor(Math.random() * 100)
  for(let i = 0; i<array.length; i++){
  array.splice(i, 1, changeValue)
  if(array[i] === stopValue){
    break
  }}
  return array
}
