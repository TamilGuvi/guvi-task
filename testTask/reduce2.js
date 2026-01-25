let arr1 = ['a', 'b','c','d'];
let result2 = arr1.reduceRight(function(acc, element){
return element + acc;
}, 0)
console.log(result2);

let result3 = arr1.reduce(function(acc,ele){
return ele + acc;
},2)
console.log(result3);