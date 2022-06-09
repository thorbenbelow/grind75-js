function maxSubArray(nums: number[]): number {
  let last = nums[0];
  let max = last;

  for (let i = 1; i < nums.length; i++) {
    last = last >= 0 ? last + nums[i] : nums[i]
    max = Math.max(last, max)
  }
  return max;
};

console.assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6, "example1")
console.assert(maxSubArray([1]) === 1, "example2")
console.assert(maxSubArray([5, 4, -1, 7, 8]) === 23, "example3")
