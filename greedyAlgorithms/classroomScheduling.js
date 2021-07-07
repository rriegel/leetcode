/*
Grokking Algorithms Ch 8: Greedy Algorithms
The classroom scheduling problem
*/

const classes = [
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
];

var compareTimes = (oldTime, newTime) => {
  // if newTime's start is >= oldTime's end
    // return true
  let oldTimeEnd = oldTime.end.split(':');
  let newTimeStart = newTime.start.split(':')
  if (Number(oldTimeEnd[0]) < Number(newTimeStart[0])) {
    return true;
  };
  if (Number(oldTimeEnd[0]) === Number(newTimeStart[0])) {
    if (Number(oldTimeEnd[1]) <= Number(newTimeStart[1])) {
      return true;
    };
  };
  return false;
};

var findBestSchedule = (classList) => {
  if (!Array.isArray(classList)) {
    return 'Please pass in an array!!';
  };
  let schedule = [];
  var latestClass;
  // for-in loop on an array
  for (var currentClass in classList) {
    if (schedule.length === 0) {
      schedule.push(classList[currentClass].name);
      latestClass = currentClass;
    }
    if (latestClass !== currentClass && compareTimes(classList[latestClass], classList[currentClass])) {
      schedule.push(classList[currentClass].name);
      latestClass = currentClass;
    }
  };
  return schedule;
};

console.log(findBestSchedule(classes)); //should return [ART, MATH, MUSIC]
console.log(findBestSchedule({'Art': '10:00', 'Gym': '112'})); //should return 'Please pass in an array!!'