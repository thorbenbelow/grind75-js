// Time O(n): insert into Map O(1)* + lookup O(1) up to n times

var twoSum = function(nums, target) {
  const cache = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (cache.has(nums[i])) {
      return [cache.get(nums[i]), i]
    } else {
      cache.set(target - nums[i], i)
    }
  }

  return [-1, -1]
};

function equals(a,b) {
  return a.every((val, i) => val === b[i])
}

console.assert(equals(twoSum([2, 7, 11, 15], 9), [0,1]),"example1")
console.assert(equals(twoSum([3, 2, 4], 6), [1, 2]), "example2")
console.assert(equals(twoSum([3, 3], 6), [0, 1]), "example3")
