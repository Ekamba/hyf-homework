const  Promise1 = new Promise ((resolveAfter) =>
setTimeout(() => { 
    resolveAfter ('homework done :-)')
}, 3 * 1000)
   )
Promise1.then (res => console.log(res))

const FairyLady = () => {
    console.log('I am called asynchronously')
}
    setTimeout(FairyLady, 6 * 1000)


