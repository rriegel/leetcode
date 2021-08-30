/*
You are given a hash table where the key is a course code, and the value is a list of all the course codes that are prerequisites for the key. Return a valid ordering in which we can complete the courses. If no such ordering exists, return NULL.

Example:
{
  'CSC300': ['CSC100', 'CSC200'],
  'CSC200': ['CSC100'],
  'CSC100': []
}

This input should return the order that we need to take these courses:
 ['CSC100', 'CSC200', 'CSCS300']

Here's your starting point:

def courses_to_take(course_to_prereqs):
  # Fill this in.

courses = {
  'CSC300': ['CSC100', 'CSC200'],
  'CSC200': ['CSC100'],
  'CSC100': []
}
print courses_to_take(courses)
# ['CSC100', 'CSC200', 'CSC300']
*/

// input: hash table of course codes with lists of prereqs as the values --> this looks like a graph adjacency list
// output: a list of the courses to take in order
// constraints: looks like the courses in the hash table only build on eachother
// edge: if no valid order exists (there is a missing prereq) - return null;

// approach--> graph traversal
function courseOrder(courses) {

  let start, prereqCount = 0;
  // find a starting point (course with most prereqs)
  for (let course in courses) {
    if (courses[course].length > prereqCount) {
      start = course;
      prereqCount = courses[course].length;
    }
  }
  console.log(start);
  // search from starting point and keep track of visited
  let res = [];
  let visited = {};

  const dfs = (currV) => {
    if (!currV) return;

    visited[currV] = true;
    res.push(currV);
    for (let i = 0; i < courses[currV].length; i ++) {
      if (!visited[courses[currV][i]]) {
        dfs(courses[currV][i]);
      }
    }
  }
  dfs(start);
  return res;
};

function test() {
  let courses = {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100'],
    'CSC100': []
  };
  console.log(courseOrder(courses))
};

test();