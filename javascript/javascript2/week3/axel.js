//############################ 2.5 seconds after the script is loaded.###############//
setTimeout(function() {
    console.log("called after 2.5 seconds")
}, 2.5 * 1000)

//######### Create a function that takes 2 parameters: delay and stringToLog.#######//

let stringToLog = function (delay, stringToLog) {
console.log ('this string logged out after 7 seconds')   
}
setTimeout(stringToLog, 7000)

//####### Call the function you have created with some different arguments ########//

 let one = function (funcOne) {
       setTimeout(function(){
        console.log("After 9 seconds!!")
       } ,9 * 1000) 
       funcOne()
    }
one(stringToLog)

//######################### Create a button in html #############################//

 const button = document.getElementById('btn')
 button.addEventListener('click',function(){
setTimeout(function(){
    console.log('call after 5 second')
}, 5 * 1000)
})

//##### Create two functions and assign them to two different variables ##########//

const earthLogger = function () {
console.log("earthLogger")
}
earthLogger(kosmos)

const saturnLogger = function () {
    console.log("saturnLogger")
}
saturnLogger(kosmos)

function kosmos (planetLogFunction) {
    console.log("planetLogFunction")
}

//#### Create a button with the text called "Log location". 
//#### When this button is clicked the location (latitude, longitude) of the user should be logged out

function getLocation()
{
  // Check whether browser supports Geolocation API or not
  if (navigator.geolocation) { // Supported
  
    // To add PositionOptions
	
	navigator.geolocation.getCurrentPosition(getPosition);
  } else { // Not supported
	alert("Oops! This browser does not support HTML Geolocation.");
  }
}
function getPosition(position)
{
  document.getElementById("location").innerHTML = 
	  "Latitude: " + position.coords.latitude + "<br><br>" +
	  "Longitude: " + position.coords.longitude;
}

//####################### Create a function called runAfterDelay #####################//

function runAfterDelay(delay, callback) {
    console.log('trying finish my homework.\n\nAt time: ' + delay + ', ');
  
    if (callback && typeof(callback) === "function") {

        setTimeout(function(){
            console.log('call after 4 second')
        }, 4 * 1000)
      callback();
    }
    }

     runAfterDelay(4, function() { 
    console.log('should be logged after 4 seconds.');
  });

  //####################### Check if we have double clicked on the page #####################//

function dlClick () {
  console.log("double click!")
}
dlClick(getLocation)
dlClick(getPosition)

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke){    
  if(shouldTellFunnyJoke === true){        
  logFunnyJoke();    
  } else{
  logBadJoke();
  }
}
const logFunnyJoke = () => {    
  console.log("cook your own food, it is healthy");
}
const logBadJoke = () => {    
  console.log("fast-food are not good for the health");    
}
jokeCreator(true, logFunnyJoke, logBadJoke);

//################################ Create an array with 3 items #############################//

function sum (a, b) {
return (a+b)
}
console.log(sum(2, 4))

function multi (a, b) {
  return (a * b)
}
console.log(multi(3,5))

function sub (a, b) {
  return (a - b)
}
console.log(sub(10,5))

const arr = [
  {fx: sum, argument : [2,4]},
  {fx: multi, argument: [3,5]},
  {fx: sub, argument: [10,5]}
]
arr.forEach(function (string) {
  string.fx.apply(null, string.argument)
});

//## Create a function as a const and try creating a function normally. Call both functions.##//

function doHomework(subject, callback) {
  alert(`Starting my ${subject} homework.`);
  callback();
};

doHomework('math', function() {
  alert('Finished my homework');
});

//## Create an object that has a key whose value is a function. Try calling this function.##//

const object = {
key: function (){
  console.log('doing my gim')
}
};
object.key();