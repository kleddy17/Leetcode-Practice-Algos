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

// const runningSum = (nums) => {
//     //started at 1 because the first number in our array will stay the same
//     for(let i = 1; i<nums.length; i++) {
//         //here we created a for loop,  
//      nums[i] = nums[i] + nums [i-1]
//      console.log(nums)
//     } 
// }

// const nums = [1,2,3,4]
// runningSum(nums)
// console.log(runningSum(nums))


// Example
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

// Return the running sum of nums.


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Kristi's Notes
// #same logic as above but add an if statement to it
// need to return the index number of the elements that equal the target number. 
// # indexOf method?
// #

// const targetSum = (nums) => {
//     for(let i = 1; i<nums.length; i++) {
//      nums[i] = nums[i] + nums [i-1]
//      console.log(nums)
    
//     } 
// }

// const nums = [2,7,11,15]
// targetSum(nums)
// console.log(targetSum(nums))

// Example:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].