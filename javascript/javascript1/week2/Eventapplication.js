const d = new Date();
const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];

function getEventWeekday(EventDays) {

const m=d.getDay();
const z=(m+EventDays)%7;
return m,days[z];
}

console.log(getEventWeekday(9));
console.log(getEventWeekday(3));
