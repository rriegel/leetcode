/*
Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

Follow-up: given a mutable string representation, can you perform this operation in-place?
*/

function reverseWords(str) {
  return str.split(/\s/).reverse().join(" ");
};

function test() {
  console.log(reverseWords("hello world here") === "here world hello");

  let paragraph = "Records survive relating to William Shakespeare’s family that offer an understanding of the context of Shakespeare's early life and the lives of his family members. John Shakespeare married Mary Arden, and together they had eight children. John and Mary lost two daughters as infants, so William became their eldest child. John Shakespeare worked as a glove-maker, but he also became an important figure in the town of Stratford by fulfilling civic positions. His elevated status meant that he was even more likely to have sent his children, including William, to the local grammar school.";

  console.log(reverseWords(paragraph));
};

test();
