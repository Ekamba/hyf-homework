const redBox = document.querySelector(".marks > li:nth-child(1n)")
const blueBox = document.querySelector(".marks > li:nth-child(2n)")
const greenBox = document.querySelector(".marks > li:nth-child(3n)")

const translateOneByOne = () => 
    moveElement (redBox, {x: 20, y: 300})
    .then(() => 
        console.log("Red position has been shifted")
    )
    .then (() => moveElement( blueBox, {x: 400, y: 300}))
    .then(() => 
            console.log("Blue position has been shifted")
        ) 
    .then (() => moveElement(greenBox, {x: 400, y: 20}))
    .then (() => 
            console.log("Green position has been shifted")
        )
    

translateOneByOne()

const translateAllAtOnce = ()  =>
    Promise.all([
        moveElement (redBox, {x: 20, y: 300}),
        moveElement ( blueBox, {x: 400, y: 300}),
        moveElement (greenBox, {x: 400, y: 20})
    ])
    .then (() =>
console.log("All position has been shifted")
    )
    
   //translateAllAtOnce()

  