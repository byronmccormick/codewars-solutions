// Given an array of integers nums sorted in non-decreasing order, find the starting and ending position of a given target value.

// If target is not found in the array, return [-1, -1].

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Example 2:

// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
// Example 3:

// Input: nums = [], target = 0
// Output: [-1,-1]
 

function searchRange(nums, target) {
    const findFirst = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] >= target) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return start;
    };

    const findLast = (nums, target) => {
        let start = 0;
        let end = nums.length - 1;

        while (start <= end) {
            const mid = Math.floor((start + end) / 2);

            if (nums[mid] <= target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        return end;
    };

    const firstIndex = findFirst(nums, target);
    const lastIndex = findLast(nums, target);

    if (firstIndex <= lastIndex) {
        return [firstIndex, lastIndex];
    } else {
        return [-1, -1];
    }
}