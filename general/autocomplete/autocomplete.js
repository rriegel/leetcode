/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Twitter.

Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.
*/

// brute force - O(n) meaning the length of the dictionary - would be slow with large sets of words
function autocomplete(str, dictionary) {
  let matches = [];
  for (let i = 0; i < dictionary.length; i ++) {
    if (dictionary[i].search(str) !== -1) {
      matches.push(dictionary[i]);
    }
  };
  return matches;
};

// using a trie (a specific tree data structure) can greatly reduce runtime
function autocompleteTrie(str, dictionary) {
  let matches = [];
  for (let i = 0; i < dictionary.length; i ++) {
    if (dictionary[i].search(str) !== -1) {
      matches.push(dictionary[i]);
    }
  };
  return matches;
};

class Node {
  constructor(key = null, value = null, children = []) {
    this.key = key,
    this.value = value,
    this.children = children
  }
};

class Trie {
  constructor() {
    this.head = {
      key: '',
      children: {}
    }
  };

  add(key) {
    let currNode = this.head;
    let newNode = null;
    let currChar = key.slice(0, 1);

    key = key.slice(1);

    while (typeof currNode.children[currChar] !== 'undefined' && currChar.length > 0) {
      currNode = currNode.children[currChar];
      currChar = key.slice(0, 1);
      key = key.slice(1);
    }

    while (currChar.length > 0) {
      newNode = new Node(currChar, key.length === 0 ? null : undefined, {});
      currNode.children[currChar] = newNode;
      currNode = newNode;
      currChar = key.slice(0, 1);
      key = key.slice(1);
    }
  };

  search(key) {
    let currNode = this.head;
    let currChar = key.slice(0, 1);
    let d = 0;

    key = key.slice(1);

    while (typeof currNode.children[currChar] !== 'undefined' && currChar.length > 0) {
      currNode = currNode.children[currChar];
      currChar = key.slice(0, 1);
      key = key.slice(1);
      d += 1;
    }

    if (currNode.value === null && key.length === 0) {
      return d;
    } else {
      return -1;
    }
  }

  remove(key) {
    let d = this.search(key);
    if (d !== -1) {
      removeH(this.head, key, d);
    }
  }

  removeH(node, key, depth) {
    if (depth === 0 && Object.keys(node.children).length === 0) {
      return true;
    }

    let currChar = key.slice(0, 1);

    if (removeH(node.children[currChar], key.slice(1), depth-1)) {
      delete node.children[currChar];
      if (Object.keys(node.children).length === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}

function test() {
  let string = 'de';
  let dictionary = ['dog', 'deer', 'deal'];
  console.log(autocomplete(string, dictionary));

}

test();