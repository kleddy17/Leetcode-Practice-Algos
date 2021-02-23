//ALGO #1

// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"


const removeVowel = (letter) =>{
newArr=[]
let everyLetter =letter.split("")  
for(let i =0; i<everyLetter.length; i++) {
// console.log(everyLetter[i])
if (everyLetter[i] != "a" && everyLetter[i] != "o" && everyLetter[i] !="i" && everyLetter[i] != "e" && everyLetter[i]!= "u") 
{newArr.push(everyLetter[i])}  
} 
noVowels = newArr.join("")
return{
    noVowels
}

}
removeVowel("i lovuue algos anid pastia")




//Bubble Sort Algo

// Bubble sort is one of the first sorting algorithms you should master. While it isn't particularly efficient, it's simple and intuitive. Bubble Sort compares neighboring elements and forces larger elements to 'bubble' to the end of an array while simultaneously 'floating' smaller elements to the top/front of a list. This sorting algorithm is what you might do if you were asked to sort a list one by one.

// How to sort something in place without an extra data structure

// const bubbleSort = (array) => {
    // Make some sort of loop that keeps happening if there were any swaps
    // that happened this turn

    // reset swapHappened to false each time so we can detect if a swap
    // happened in this specific iteration.

    // Make another loop (inside the first one) to go through one 
    // round of swapping from the start of the list to the end

    // Inside inner loop:
    // compare each pair of elements near each other
    // swap them if the bigger one was at a lower index.

    // Make sure to keep track of whether a swap happened!

    // After both loops have exited, remember to return the array
//     return array;
// }

// const test = [1, 4, 0, 9, -1];
// const test2 = [10, 24, -10, 2, -1];
// console.log(bubbleSort(test2));