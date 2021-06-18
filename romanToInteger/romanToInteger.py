conversion = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

def roman_to_int(s):
  s = list(s)
  result = 0
  subtract_val = 0
  i = 0
  while (i < len(s)):
    ## this creates an error because it is not defined... how to get around this?
    ## print(conversion[s[i+1]])
    if (conversion[s[i]] >= conversion[s[i+1]] or conversion[s[i+1]] == None):
      result += conversion[s[i]]
    else:
      subtracting = True
      subtract_idx = 1
      while (subtracting == True):
        if (conversion[s[i]] <= conversion[s[i+subtract_idx]]):
          subtract_val += conversion[s[i]]
        else:
          break
        subtract_idx += 1
    i += 1
  print(result)
  print(subtract_val)
  return result - subtract_val

print(roman_to_int('I'))
