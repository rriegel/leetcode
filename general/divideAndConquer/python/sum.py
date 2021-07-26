"""
Grokking Algorithms Ch 4 Exercises
Divide and Conquer
"""

## write out the code for the recursive sum D&C function
import collections

def sum(array) :
  result = 0
  if (len(array)==0):
    return 0
  else:
    removal = array[0]
    array.remove(removal)
    return result + removal + sum(array)


print(sum([1,2,3]))
print(sum([4,5,6]))