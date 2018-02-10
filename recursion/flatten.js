/*
Implement a function that flattens a nested array.

flatten([1,[2],[3, [[4]]]]);
=> [1,2,3,4]
*/
function flatten (arr) {
  array = []
  function recurse(ar){
    if (typeof ar === 'object'){
        for (let i = 0; i < ar.length; i++){
          if (typeof ar[i] === 'object') return recurse(ar[i])
          else return ar[i]
        }
    } else return ar
  }
  for(let j = 0; j < arr.length; j++){
    array.push(recurse(arr[j]))
  }
  return array
}

flatten([1,[2],[3, [[4]]]])