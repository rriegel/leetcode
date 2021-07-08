/*
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example:

For:
picture = ["abc",
           "ded"]

the output should be:
addBorder(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/

export function addBorder(picture) {
  // get length of first row and add 2 to get length of asterisk rows
  let l = picture[0].length + 2;
  let ends = "*".repeat(l);
  for (let i = 0; i < picture.length; i ++) {
      picture[i] = "*" + picture[i] + "*";
  }
  picture.unshift(ends);
  picture.push(ends);
  return picture;
}