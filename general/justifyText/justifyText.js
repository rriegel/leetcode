/*
Write an algorithm to justify text. Given a sequence of words and an integer line length k, return a list of strings which represents each line, fully justified.

More specifically, you should have as many words as possible in each line. There should be at least one space between each word. Pad extra spaces when necessary so that each line has exactly length k. Spaces should be distributed as equally as possible, with the extra spaces, if any, distributed starting from the left.

If you can only fit one word on a line, then you should pad the right-hand side with spaces.

Each word is guaranteed not to be longer than k.

For example, given the list of words ["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"] and k = 16, you should return the following:

["the  quick brown", # 1 extra space on the left
"fox  jumps  over", # 2 extra spaces distributed evenly
"the   lazy   dog"] # 4 extra spaces distributed evenly
*/
function format(words, charLength, k) {
  let inserts = words.length-1;
  let spaces = k - charLength;
  if (Number.isInteger(spaces/inserts)) {
    return words.join(' '.repeat(spaces/inserts));
  } else {
    let result = "";
    let i = 0;
    let spaceIncrement = Math.ceil(spaces/inserts);
    while (i < words.length) {
      result += words[i];
      result += ' '.repeat(spaceIncrement);
      spaces -= spaceIncrement;
      i ++;
      inserts = words.length-i-1;
      spaceIncrement = Math.ceil(spaces/inserts);
    }
    return result;
  }
};

function justify(words, k) {
  let justified = [];
  let charCount = 0;
  let subArray = [];
  let i = 0;
  while (i <= words.length) {
    if ( i === words.length) {
      let formatted = format(subArray, charCount, k);
      justified.push(formatted);
      break;
    }
    let currLen = words[i].length;
    if (charCount + currLen + subArray.length <= k) {
      subArray.push(words[i]);
      charCount += words[i].length;
      i ++;
    } else {
      let formatted = format(subArray, charCount, k);
      justified.push(formatted);
      charCount = 0;
      subArray.length = 0;
    }
  }
  return justified;
};

function test() {
  console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "Thank", "You", "-", "Ryan"], 16));
  console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "Thank", "You", "-", "Ryan"], 32));
  console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog", "Thank", "You", "-", "Ryan"], 10));
};

test();