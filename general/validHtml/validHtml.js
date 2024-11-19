// Consider a program that reads an HTML document and returns a list of HTML tags in the order they appear in the document.
// Write a function to determine whether the list of HTML tags form a valid HTML document.
//
// Example valid input:
// ['<html>', '<head>', '<title>', '</title>', '</head>', '<body>', '<div>', '<h1>', '</h1>', '<p>', '<b>', '</b>', '</p>', '</div>', '</body>', '</html>']

// Example invalid input:
// ['<html>', '<body>', '<div>', '<h1>', '</h1>', '<p>', '<b>', '</p>', '</b>', '</div>', '</body>', '</html>']
//

// Another valid example (e.g. a valid html fragment):
// ['<div>', '<p>', '<a>', '</a>', '</p>', '</div>']
//

// Another Example invalid input:
// ['<html>', '<body>']

const validHtml = (htmlTagsArray) => {
  if (!htmlTagsArray || htmlTagsArray === undefined || htmlTagsArray.length === 0) return false;

  // stack data structure
  let stack = [];
  // loop through the htmlTagsArray
  for (let i = 0; i < htmlTagsArray.length; i ++) {
    if (htmlTagsArray[i].includes("/")) {
      // closing tag
      let lastTag = stack[stack.length - 1];
      let alteredClosingTag = htmlTagsArray[i].replace("/", "");
      if (alteredClosingTag === lastTag) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      // opening tag
      stack.push(htmlTagsArray[i]);
    }
  }

  if (stack.length !== 0) {
    return false;
  }

  return true;

};

const test = () => {
  let test1 = validHtml(['<html>', '<head>', '<title>', '</title>', '</head>', '<body>', '<div>', '<h1>', '</h1>', '<p>', '<b>', '</b>', '</p>', '</div>', '</body>', '</html>']);
  let test2 = validHtml(['<html>', '<body>', '<div>', '<h1>', '</h1>', '<p>', '<b>', '</p>', '</b>', '</div>', '</body>', '</html>']);
  let test3 = validHtml(['<div>', '<p>', '<a>', '</a>', '</p>', '</div>']);
  let test4 = validHtml(['<html>', '<body>']);

  let assert1 = test1 === true;
  let assert2 = test2 === false;
  let assert3 = test3 === true;
  let assert4 = test4 === false;

  console.log("Test Results: ");
  console.log(assert1);
  console.log(assert2);
  console.log(assert3);
  console.log(assert4);
};

test();