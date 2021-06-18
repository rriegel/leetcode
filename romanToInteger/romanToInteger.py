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
  last_idx = False
  if (len(s)==1):
    result += conversion[s[0]]

  while (i < len(s)):
    ## this algorithm presents an issue bc python gives an error when looking up an idx that doesn't exits in a list
    ## not sure how to avert this problem
    if (conversion[s[i]] >= conversion[s[i+1]]):
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
  return result - subtract_val

print(roman_to_int('I'))
print(roman_to_int('IV'))
print(roman_to_int('XII'))
print(roman_to_int('LVIII'))
print(roman_to_int('MCMXCIV'))