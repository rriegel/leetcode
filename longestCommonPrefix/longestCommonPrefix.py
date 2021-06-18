def longest_common_prefix(strs):
  prefix = list(strs[0])
  i = 1
  while i < len(strs):
    curr = list(strs[i])
    temp = []
    j = 0
    ## set length variable to be the shortest length of curr and prefix
    l = len(curr) if len(curr) < len(prefix) else len(prefix)
    while j < l-1:
      if curr[j] == prefix[j]:
        temp.append(curr[j])
      else:
        break
      j += 1
    prefix = temp
    i += 1
  separator = ''
  return separator.join(prefix)


print(longest_common_prefix(["flower", "flow", "flight"])) # should be fl
print(longest_common_prefix(["look", "loop", "loose"])) # should be lo