// pure recursion method to complete collect odds
function collectOdds(nums) {
  let odd = [];
  if (!nums.length) {
    return odd;
  }
  if (nums[0] % 2 === 1) {
    odd.push(nums[0]);
    return odd.concat(collectOdds(nums.slice(1)))
  }
  return collectOdds(nums.slice(1));

}

console.log(collectOdds([1,2,3,4,5,6,7,8,9]));