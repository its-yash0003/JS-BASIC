function nice(name) {
    console.log("Hey " + name + " you are good!")
    console.log("Hey " + name + " you are nice!")
    console.log("Hey " + name + " your tshirt is nice!")
    console.log("Hey " + name + " your course is good too!")
}
nice("YASH");
nice("YASHU");


function sum(a, b, c = 3) {
    // if c is not provided, it will take the default value of 3
    // console.log(a + b + c);
    console.log(a, b, c);
    return a + b + c;
}
result1 = sum(1);
result2 = sum(1, 2);
result3 = sum(1, 2, 5);
console.log("The sum of these numbers is :",result1);
console.log("The sum of these numbers is :",result2);
console.log("The sum of these numbers is :",result3);


const func1 = (a) => {
    console.log("The value of a arrow function is :", a);
}
func1(5);
func1(10);