"""
This is a string literal
Python doesn't recognize strings if they are not assigned to a var
"""
"""
Grokking Algorithms Ch 3 Recursion walkthrough with factorial
"""

def fact(x):
  if x == 1:
    return x
  else:
    return x * fact(x-1)


test1 = fact(1)
test2 = fact(5)
test3 = fact(3)

print([test1 == 1, test2 == 120, test3 == 6])

