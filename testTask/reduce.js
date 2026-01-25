var baskets = [2, 4, 6, 8];

// var totalApples = baskets.reduce((total, applesInBasket) => {
//     return total + applesInBasket;
// },0); //0 is the starting point


function appleCount (total , apple) {
    return total + apple;
}
var totalApples = baskets.reduce(appleCount,0) //0 is the starting point


// var totalApples = baskets.reduce(function(total , apple){
//     return total + apple;
// },5); //0 is the starting point

console.log(totalApples);