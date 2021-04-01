//ALGO #1

// Given a string s, remove the vowels 'a', 'e', 'i', 'o', and 'u' from it, and return the new string.
// Example 1:
// Input: s = "leetcodeisacommunityforcoders"
// Output: "ltcdscmmntyfrcdrs"


// const removeVowel = (letter) =>{
// newArr=[]
// let everyLetter =letter.split("")  
// for(let i =0; i<everyLetter.length; i++) {

// if (everyLetter[i] != "a" && everyLetter[i] != "o" && everyLetter[i] !="i" && everyLetter[i] != "e" && everyLetter[i]!= "u") 
// {newArr.push(everyLetter[i])}  
// } 
// noVowels = newArr.join("")
// return{
//     noVowels
// }

// }
// removeVowel("i lovuue algos anid pastia")




//Bubble Sort Algo

// Bubble sort is one of the first sorting algorithms you should master. While it isn't particularly efficient, it's simple and intuitive. Bubble Sort compares neighboring elements and forces larger elements to 'bubble' to the end of an array while simultaneously 'floating' smaller elements to the top/front of a list. This sorting algorithm is what you might do if you were asked to sort a list one by one.

// How to sort something in place without an extra data structure

// const bubbleSort = (test) => {
//     for (let i = 0; i< test.length; i++)
//     console.log(i)
// }

// const test = [1, 4, 0, 9, -1];
// bubbleSort(test)
// console.log(bubbleSort(test));

// ALGO #3

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

const runningSum = (nums) => {
    let newArr = []
    finalArr = []
    for(let i = 0; i<nums.length; i++) {
        // console.log(nums[i])
        newArr.push(nums[i])
        // console.log(newArr)
     for(let j = 0; j<newArr.length; j++) {
        // console.log(newArr[j])
        finalArr.push(nums[i]+ newArr[j])
        console.log(finalArr)
    }       
    }

}

const nums = [1,2,3,4]
runningSum(nums)


// Example
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Return the running sum of nums.