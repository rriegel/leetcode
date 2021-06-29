"""
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
"""
## Write a recursive function to find the maximum number in a list

def max(*args):
  list = args[0]
  biggest = list[0] if len(list) > 0 else 0
  new_big = args[1]
  if (new_big != None):
    biggest = new_big if new_big > biggest else biggest
  if len(list) != 0:
    list.pop(0)
    return max(list, biggest)
  else:
    return biggest

print(max([3,2,0], 0))
print(max([4,5,6], 0))