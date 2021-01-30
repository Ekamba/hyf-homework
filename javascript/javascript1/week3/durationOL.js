function lifesTimeAverage() {

const seriesDurations = [
  {
    title: 'Beverly Hills',
    days: 9,
    hours: 3,
    minutes: 45,  
  },
  {
    title: 'Prison Break',
    days: 2,
    hours: 18,
    minutes: 0,
  },
  {
    title: '90210',
    days: 3,
    hours: 4,
    minutes: 0,
  }
];



 
  let totalSum = 0;
  let sum = 0;
const yearsInMinutes = 80 * 365 * 24 * 60;
  
  for (let i = 0; i <seriesDurations.length; i++){
    sum = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + seriesDurations[i].minutes;
    console.log(`${seriesDurations[i].title} took ${(( sum * 100 ) / yearsInMinutes ).toFixed(2)}% of my life`);
    totalSum += sum;
  }
  let Sum = ((totalSum * 100) / yearsInMinutes ).toFixed(3);
  return `In Average that is ${Sum}% of my life`;
}
console.log(lifesTimeAverage());