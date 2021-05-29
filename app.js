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
// RUNNING SUM ALGO

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


// #4  
// WORD FREQUENCY

// Write a function findWordFrequencies that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.



    const findWordFrequencies = (str) => {
        //take a string of words that equals a sentence and make it an array. I want all values to be the same. That is why I am using the toLowerCase method. after that i use the split method to make each word in the sentence an element. 
        const sentArr = str.toLowerCase().split(' ')
        //i want to take each element in the array and turn it into a key value pair, by pusing them into an object
        const wordFrequency = {}
        //loop over the array and create a key in each one, to make dynamic we make the loop so any word passed in will be evaulated. using a variable to represent each one of the values in the array. store each element in the array inside a variable. 
            for(let word of sentArr) {
                //if word already exists inside the object increment that number. 
                if(wordFrequency[word]){
                    wordFrequency[word]++
                    //otherwise if it didn't already exsist, it will be equal to one. 
                }else{
                    wordFrequency[word] = 1
                }
            }
            console.log(wordFrequency)
            return wordFrequency
    }

    findWordFrequencies('I , the, the, love lamp')

// eg: { I: 1, love: 1, lamp: 1 }

// Make it work just for sentences without commas, apostrophes, and periods. Capital letters and lowercase letters should be treated as equals: 'The' and 'the' are the same word.


// Write a function findWordFrequencies that takes in a sentence (string), and returns an object with each word as a key, with a value of how many times that word appears in the sentence.