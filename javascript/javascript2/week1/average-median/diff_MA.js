//######### function : getAverage #######//

const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];

    function average(array) {
       
        let totalSum = 0;
for(let i in array) {
    totalSum += array[i];
}
 
let arrayCnt = array.length; //find out how many numbers are in our array.
 
const average = totalSum / arrayCnt; //Finally, get the average.
return average;
 
          };
         
          console.log(`average value is ${average(housePrices)}.`);


//########### function : getMedian ###########//

function median (array) {
    array.sort( function(a,b) {return a - b;} );

    var half = Math.floor(array.length/2);
    if(array.length % 2)
        return array[half];
    else
        return (array[half-1] + array[half]) / 2.0;
}

console.log(`median value is ${median(housePrices)}.`);

//################# returning these two value in an object #######//

const myUl = document.getElementById("prices");

 housePrices.forEach((price) => {
     const newLi = document.createElement("li");
     newLi.textContent = price;
     myUl.appendChild(newLi);
 });

 const averageprice = document.getElementById("avgvalue");
 averageprice.textContent = average(housePrices);

 const medianPrice = document.getElementById("medianvalue");
 medianPrice.textContent = median(housePrices);


