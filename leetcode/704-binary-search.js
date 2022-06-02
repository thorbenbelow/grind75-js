function binarySearch(nums, target) {
  let l = 0, r = nums.length - 1;

  let mid;
  while (l < r) {
    mid = l + Math.floor((r-l+1) / 2);

    if (target < nums[mid]) {
      r = mid - 1;
    } else {
      l = mid;
    }

  }
  return nums[l] == target ? l : -1;
}

console.assert(binarySearch([-1, 0, 3, 5, 9, 12], 9) === 4, "example1")
console.assert(binarySearch([-1, 0, 3, 5, 9, 12], 2) === -1, "example2")
