console.log("this is string tutorial");
let a = "YASH";
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]); //undefined
console.log(a.length);

let real_name = "YASH"
let friend = "YASHU"
console.log("His name is " + real_name + " and his friends name is " + friend)
console.log(`His name is ${real_name} and his friends name is ${friend}`)

let b = "YashU"
console.log(b.toLowerCase());
console.log(b.toUpperCase());
console.log(b.length);
console.log(b.slice(1, 4));
console.log(b.slice(4));
console.log(b.slice(1));

console.log(b.concat(a,  " Gautam" , " is a good boy"));
console.log(b.replace("Y", "J")); // only the first occurance will be replaced
console.log(b.replace("YashU", "Gautam"));
console.log(b.trim()); // removes whitespace from both ends





