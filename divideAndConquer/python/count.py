"""
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
"""
## Write a recursive function to count the number of items in a list

def count(list):
  if (len(list) == 0):
    return 0
  else:
    list.pop(0)
    return 1 + count(list)

print(count([1,2,3,4,5,6,7]))
print(count([4,5,6]))