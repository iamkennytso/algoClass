//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
// var func = (x) => {
//   while(x!==0){
//     console.log(x--)
//   }
// }
// func(10)
//2. Next, try looping just like above except using recursion
// var func = (x) => {
//   if (x === 0) return
//   console.log(x)
//   return func(x-1)
// }
// func(17)
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
// const exponent = (base, expo) => {
// if (expo === 0) return 1
//   let cur = 1
//   var sol = base
//   while (cur++ !== expo){
//     sol = sol*base
//   }
//   return sol
// }
// exponent(3,3)
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
// const RecursiveExponent = (base, expo) => {
//   if (expo === 0) return 1
//   if (expo === 1) return base
//   return base * RecursiveExponent(base, expo-1)
// }
// RecursiveExponent(3,3)
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
    // const recursiveMultiplier = (arr, num) => {
    //   return arr.map(el => el*num)
    // }
// const recursiveMultiplier = (arr, num) => {
//   const array = []
//   let i = 0
//   const recurs = (i) => {
//     if (i === arr.length) return
//     array.push(arr[i]*num)
//     recurs(++i)
//   }
//   recurs(i)
//   return array
// }
// recursiveMultiplier([1,2,3],2)
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
// const recursiveReverse = (arr, num) => {
//   const array = []
//   let i = arr.length-1
//   const recurs = (i) => {
//     if (i === -1) return
//     array.push(arr[i])
//     recurs(--i)
//   }
//   recurs(i)
//   return array
// }
// recursiveReverse([1,2,3],2)
