//looping
//For loop
sum=0
for(var i=0;i<10;i++)
{
    sum+=i;
}
console.log(sum)

//while
i=0;
sum=0;
while(i<10)
{
    sum=sum+i;
    i++;
}
console.log(sum)

//do while
sum=0;
i=0;
do{
    sum=sum+i;
    i++;
}
while(i<10);
console.log(sum)

//example 1
arr=[1,2,3,4,5]
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}
//example 2
arr=[1,2,3.3,4,5]
for(var i=0;i<arr.length;i++)
{
    console.log(arr[i])
}

// for in loop
arr=[1,"abi",3,"charu",5]
for(const element in arr){
    console.log(element)
}
//for of loop
for(var element of arr){
    console.log(element)
}
//for each
arr.forEach(element => {
    console.log(element)
});