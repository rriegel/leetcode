"""
Grokking Algorithms Ch 8: Greedy Algorithms
The classroom scheduling problem
"""

classes = [
  {
    'name': 'ART',
    'start': '9:00',
    'end': '10:00'
  },
  {
    'name': 'ENG',
    'start': '9:30',
    'end': '10:30'
  },
  {
    'name': 'MATH',
    'start': '10:00',
    'end': '11:00'
  },
  {
    'name': 'CS',
    'start': '10:30',
    'end': '11:30'
  },
  {
    'name': 'MUSIC',
    'start': '11:00',
    'end': '12:00'
  },
]

def compare_times(old_time, new_time):
  old_time_end = old_time['end'].split(':')
  new_time_start = new_time['start'].split(':')

  if (int(old_time_end[0]) < int(new_time_start[0])):
    return True
  if (int(old_time_end[0]) == int(new_time_start[0])):
    if (int(old_time_end[1]) <= int(new_time_start[1])):
      return True
  return False

def findBestSchedule(class_list):
  ## negation and data type checking
  if not isinstance(class_list, list):
    return 'Please pass in a list!!'

  schedule = []
  latest_class = None

  for current_class in class_list:
    if len(schedule) == 0:
      schedule.append(current_class['name'])
      latest_class = current_class
    if latest_class['name'] != current_class['name'] and compare_times(latest_class, current_class):
      schedule.append(current_class['name'])
      latest_class = current_class
  return schedule

print(findBestSchedule(classes)) ## should return [ART, MATH, MUSIC]
print(findBestSchedule({'Art': '10:00', 'Gym': '112'})); ## should return 'Please pass in an array!!'