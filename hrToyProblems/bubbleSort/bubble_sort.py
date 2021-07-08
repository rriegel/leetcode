## bubble_sort py edition

def bubble_sort(arr):
  res = []
  switches = 0
  for i in range(len(arr)):
    if arr[i] > arr[i+1]:
      res.append(arr[i+1])
      res.append(arr[i])
      i += 1
      switches += 1
    else:
      res.append(arr[i])
    i += 1
  print(res)
  if switches > 0:
    return bubble_sort(res)
  else:
    return res


arr1 = [3, 6, 2, 1, 4, 5, 19, 3]

print(bubble_sort(arr1))