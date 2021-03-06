/*
Create a function that takes in a string and outputs the number of times each word is used.
My sample string was a long excerpt from a book.
*/
// O(n) time and O(n) space
function countWords(str) {
  const wordMap = {};
  str = str.replace(/[^\w\s]/gi, '').split(' ');
  for (let i = 0; i < str.length; i ++) {
    str[i] = str[i].toLowerCase();
  }
  for (let i = 0; i < str.length; i ++) {
    wordMap[str[i]] = wordMap[str[i]] === undefined ? 1 : wordMap[str[i]] + 1;
  }
  console.log(wordMap);
};

function test() {
  let excerpt = "Many interviewees find tree and graph problems to be some of the trickiest. Searching a tree is more complicated than searching in a linearly organized data structure such as an array or linked list. Additionally, the worst case and average case time may vary wildly, and we must evaluate both aspects of any algorithm. Fluency in implementing a tree or graph from scratch will prove essential. Because most people are more familiar with trees than graphs (and they're a bit simpler), we'll discuss trees first. This is a bit out of order though, as a tree is actually a type of graph."
  // console.log(countWords(excerpt));
  let sentence = "LMFAO I had to watch this multiple times. He was so confident in what he was spitting like he has told this to hella people and no one has proven him wrong."
  console.log(countWords(sentence));
};

test()