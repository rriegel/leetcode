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

const DFS = (node, adjList, visited, arrive, depart, topSort) => {
  arrive[node]++;
  visited[node] = true;
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      if (DFS(neighbor, adjList, visited, arrive, depart, topSort)) return true;
    } else {
      if (depart[neighbor] === 0) return true;
    }
  }
  depart[node] ++;
  topSort.push(node);
  return false;
};

function courseOrder(courses) {
  const visited = {};
  const arrive = new Array(Object.keys(courses).length).fill(0);
  const depart = new Array(Object.keys(courses).length).fill(0);
  const topSort = [];

  for (let vertex in courses) {
    if (!visited[vertex]) {
      if (DFS(vertex, courses, visited, arrive, depart, topSort)) return [];
    }
  }
  return topSort;
};

function test() {
  // let courses = {
  //   'CSC200': ['CSC100'],
  //   'CSC100': ['CSC200']
  // };
  // console.log(courseOrder(courses));
  courses = {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100'],
    'CSC100': []
  };
  console.log(courseOrder(courses));
  courses = {
    'CSC300': ['CSC100', 'CSC200'],
    'CSC200': ['CSC100', 'CSC141'],
    'CSC100': ['CSC50'],
    'CSC141': [],
    'CSC50': []
  };
  console.log(courseOrder(courses));
};

test();