def binary_search(sorted_array, target) :
  low = 0
  high = len(sorted_array) - 1
  while low <= high:
    mid = (low + high) / 2
    guess = sorted_array[mid]
    if guess == target:
      return mid
    if guess > target:
      high = mid - 1
    else:
      low = mid + 1
  return None

my_list = [1, 3, 5, 7, 9]

print(binary_search(my_list, 3)) # should be 1
print(binary_search(my_list, -1)) # should be None