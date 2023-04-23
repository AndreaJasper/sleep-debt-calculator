const getSleepHours = day => {
  switch (day) {
    case 'Monday':
      return 8; 
      break;
    case 'Tuesday':
      return 3; 
      break;
    case 'Wednesday':
      return 8; 
      break;
    case 'Thursday':
      return 8; 
      break;
    case 'Friday':
      return 8; 
      break;
    case 'Saturday':
      return 8; 
      break;
    case 'Sunday':
      return 8; 
      break;
  }
}

const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

const getIdealSleepHours = idealHours => idealHours * 7;

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7.5);

  if (actualSleepHours === idealSleepHours) {
    console.log("You got the perfect amount of sleep!");
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) more sleep than needed.');
  } else {
    console.log('You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed. You should get some rest.');
  }
}

calculateSleepDebt();
