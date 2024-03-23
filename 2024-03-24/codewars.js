// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

var rotate = function(nums, k) {
    let n = nums.length;
    k=k%n
    for(let i = 0, j=n-1; i<j;i++,j--){
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
    for(let i = 0, j=k-1; i<j;i++,j--){
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
    for(let i = k, j=n-1; i<j;i++,j--){
        [nums[i],nums[j]]=[nums[j],nums[i]]
    }
};