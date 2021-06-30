"""
Grokking Algorithms Ch 6: Breadth-First Search
"""

## Implementing the graph
### Using a hash table (python dictionary) and lists (arrays)
graph = {}
graph["you"] = ["alice", "bob", "claire"]
graph["bob"] = ["anuj", "peggy"]
graph["alice"] = ["peggy"]
graph["claire"] = ["thom", "jonny"]
graph["anuj"] = []
graph["peggy"] = []
graph["thom"] = []
graph["jonny"] = []

## Implementing the algorithm
### First make a queue
from collections import deque

def person_is_seller(name):
  return name[-1] == 'm'

def breadth_first_search(graph):
  search_queue = deque()
  search_queue += graph["you"]
  while search_queue:
    person = search_queue.popleft()
    if person_is_seller(person):
      print(person + " is a mango seller")
      return True
    else:
      search_queue += graph[person]
  return False