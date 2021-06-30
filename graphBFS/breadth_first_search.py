"""
Grokking Algorithms Ch 6: Breadth-First Search
"""

## Implementing the graph
### Using a hash table (python dictionary) and arrays
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

## evaluation function
def person_is_seller(name):
  return name[-1] == 'm'

## Breadth-first search
## O(V+E)
  ## V = number of vertices
  ## E = number of edges
def search(name):
  ## people must be checked in the order they were added - so the search list needs to be a queue
  ## this will require manual implementation in js
  search_queue = deque()
  search_queue += graph[name]
  searched = [] ## keep track of which people were already searched
  while search_queue:
    person = search_queue.popleft()
    if not person in searched: ## only search this person if they haven't already been searched
      if person_is_seller(person):
        print(person + " is a mango seller")
        return True
      else:
        print(person)
        search_queue += graph[person]
        searched.append(person) ## mark person as searched
  return False

search("you")