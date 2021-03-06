//############## normal map and filter function ##############//

let numbers = [1, 2, 3, 4]

let newNumbers = numbers.filter(function(number){
    return number % 2 !== 0
})

.map(function(number){
    return number * 2
})

console.log("The doubled numbers are", newNumbers)

//############### Map and filter arrow function ###############//

let newNum = numbers.filter (number =>  number % 2 !== 0)
    
.map (number =>  number *2) 

console.log("The doubled numbers are", newNum)

