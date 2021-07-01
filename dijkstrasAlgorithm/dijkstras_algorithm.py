"""
Grokking Algorithms Ch 7: Dijkstra's Algorithm
"""
## Setup needs three hash tables
## hash table to store connections (graph)
graph = {}

graph["start"] = {}
graph["start"]["a"] = 6
graph["start"]["b"] = 2

graph["a"] = {}
graph["a"]["end"] = 1

graph["b"] = {}
graph["b"]["a"] = 3
graph["b"]["end"] = 5

graph["end"] = {}

## hash table to store costs
## infinity variable for when you don't know the cost of the node yet
infinity = float("inf")

costs = {}
costs["a"] = 6
costs["b"] = 2
costs["end"] = infinity

## hash table to store the parents of nodes

parents = {}
parents["a"] = "start"
parents["b"] = "start"
parents["end"] = None

## array to keep track of the nodes already processed
processed = []

## find_lowest_cost_node definition
def find_lowest_cost_node(costs):
  lowest_cost = infinity
  lowest_cost_node = None
  for node in costs:
    cost = costs[node]
    if cost < lowest_cost and node not in processed:
      lowest_cost = cost
      lowest_cost_node = node
  return lowest_cost_node

print('before: ', costs)

## Dijkstra's Algorithm
node = find_lowest_cost_node(costs)

while node is not None:
  cost = costs[node]
  neighbors = graph[node]
  for n in neighbors.keys():
    new_cost = cost + neighbors[n]
    if costs[n] > new_cost:
      costs[n] = new_cost
      parents[n] = node
  processed.append(node)
  node = find_lowest_cost_node(costs)

print('after: ', costs)
print('final cost: ', costs["end"])