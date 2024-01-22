//how to declare an object
//way 1 to declaration
console.log("METHOD 1")
var customerdetails={
    "Name":"Abinaya",
    "Age":19,
    "Phone":7358962217
}
console.log(customerdetails)
customerdetails["id"]="21ECR004"//Adding the element to the object
console.log(customerdetails)

//2 nd way
console.log("METHOD 2")
var customerdetails={}
customerdetails["id"]="21ECR004"
customerdetails["Name"]="Abinaya"
customerdetails["age"]=20
customerdetails["phone"]=7358962217
console.log(customerdetails)

//3rd way
console.log("METHOD 3")
var customerdetails=new Object()
customerdetails["id"]="21ECR004"
customerdetails["Name"]="Abinaya"
customerdetails["age"]=20
customerdetails["phone"]=7358962217
console.log(customerdetails)
//to print the specific element in the object
console.log(customerdetails.age)
console.log(customerdetails["age"])