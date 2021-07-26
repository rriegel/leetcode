from abc import abstractproperty


def quicksort(arr):
  if len(arr) < 2:
    return arr
  else:
    pivot = arr[0]
    less = [i for i in arr[1:] if i <= pivot]
    greater = [i for i in arr[1:] if i > pivot]
    return quicksort(less) + [pivot] + quicksort(greater)

test1 = [10, 5, 2, 3]
test2 = [11, 2, 1002, 214, 4, 412]
print(quicksort(test1))
print(quicksort(test2))