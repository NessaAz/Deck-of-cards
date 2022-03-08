//define the arrays

let symbols = ["hearts" , "spades" , "diamonds" , "flowers"];
let numbers = ["2" , "3" , "4" , "Q" , "J"];

let decks = [];

//this is where we will link all these together and put the deck

symbols.forEach(symbol => {
    numbers.forEach(number => {
        decks.push(`${number} of ${symbol}`)
    })
    
});
console.log(decks)