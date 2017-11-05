function findMinAndRemove(array){
  let mindex = 0;
  for(let i = 1; i < array.length; i++) {
    (array[i] < array[mindex]) && (mindex = i)
  };
  return array.splice( mindex, 1 )[0];
}

function insertionSort(array){
  let newArray = []
  let length = array.length
  for(let i=0; i < length; i++) {
    newArray[i] = findMinAndRemove(array)
  }
  return newArray
}
