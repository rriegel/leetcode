/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
*/

// approach - dynamic programming
var wordBreak = function(s, wordDict) {
  var map = {};
  wordDict.forEach(word => {
    map[word] = true;
  });

  var n = s.length;
  var dp = new Array(n+1).fill(false);
  dp[0] = true;
  for (var i = 1; i <= n; i ++) {
    for (var j = 0; j < i; j ++) {
      if (dp[j] && map[s.substring(j, i)]) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[n];
};

module.exports = wordBreak;