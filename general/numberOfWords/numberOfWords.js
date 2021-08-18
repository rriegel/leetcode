/*
Create a function that takes in a string and outputs the number of times each word is used.
My sample string was a long excerpt from a book.
*/

function countWords(str) {
  let result = {};

  str = str.replace(/[(),.!?-]/, '').split(' ');
  console.log(str);
};
function test() {
  let excerpt = "Many interviewees find tree and graph problems to be some of the trickiest. Searching a tree is more complicated than searching in a linearly organized data structure such as an array or linked list. Additionally, the worst case and average case time may vary wildly, and we must evaluate both aspects of any algorithm. Fluency in implementing a tree or graph from scratch will prove essential. Because most people are more familiar with trees than graphs (and they're a bit simpler), we'll discuss trees first. This is a bit out of order though, as a tree is actually a type of graph."

  console.log(countWords(excerpt));

};
test()