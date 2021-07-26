## Grokking Algorithms Ch 2

## Selection Sort Algorithm -- O(n^2)

## sort an array from smallest to largest

## write a function that finds the smallest element in the array
def find_smallest(arr):
  smallest = arr[0]
  smallest_idx = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallest_idx = i
  return smallest_idx

## write a function that recursively finds the smallest element in the array and  removes it after finding
def selection_sort(arr):
  sorted_arr = []
  for i in range(len(arr)):
    smallest = find_smallest(arr)
    sorted_arr.append(arr.pop(smallest))
  return sorted_arr

list1 = []
list2 = [1, 2, 3, 4]
list3 = [500, 3005, 365, 404, 69, 101, 200]

print(selection_sort(list1))
print(selection_sort(list2))
print(selection_sort(list3))