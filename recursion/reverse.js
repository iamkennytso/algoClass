/*
Implement a function that will reverse a string recursively.

reverse('abcdefg')
=> 'gfedcba'
*/

const reverse = (string) => {
    if (string.length === 1) return string
    return `${string.charAt(string.length-1)}${reverse(string.slice(0, length-1))}`
}