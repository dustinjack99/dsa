//Kadanes Algorithmn

const maxSubArray = (nums) => {
    let maxSum = nums[0];
    let currentSum = maxSum;

    for(let i = 0; i < nums.length; i ++) {
        currentSum = Math.max(nums[i] + currentSum, nums[i]);
        maxSum = Math.max(currentSum, maxSum);
    }

    return maxSum;
}