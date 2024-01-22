//Functions
//Function without Arugument and without return type
function fun()
{
    console.log("THIS IS SAMPLE PROGRAM")
}
fun()

//Function with Arugument and without return type
function fun(a,b){
    for(i=a;i<b;i++)
    {
      if(i%2==0)
      {
        console.log("The number"+i+"is even")
      }
    else{
        console.log("The number"+i+"is odd")
    }
    }
}
fun(5,10)

//function with argument and return type
function sum(a,b){
    return a+b;
}
console.log(sum(5,10))
