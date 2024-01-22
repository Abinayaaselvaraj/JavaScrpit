//SET
// EXAMPLE 1
setExample =new Set("abi","apple","mango")
console.log(setExample)
setExample =new Set(["abi","apple","mango"])
console.log(setExample)
setExample.add("pine")
console.log(setExample)

for (var element of setExample){
    console.log(element)
}
for (const element in setExample){
    console.log(element)
}

//MAPS

mapeg=new Map([
    ["id","21ECR004"],["NAME","ABI"],["dept","ece"]
])
console.log(mapeg);
mapeg.set("age","20","phonenum","7358962217")
console.log(mapeg);
mapeg.delete("phonenum","7358962217")
console.log(mapeg);

//prints the value while using for each
mapeg.forEach(element => {
    console.log(element);
});
for(var element of mapeg){
    console.log(element);
}
for(const index in mapeg){
    console.log(index);
}

//SEARCHING
mapeg=new Map([
    ["id","21ECR004"],["NAME","ABI"],["dept","ece"]
])
console.log(mapeg.has("id"))