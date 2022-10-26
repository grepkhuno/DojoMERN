// Problem1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// // output: 
// Tesla
// Mercedes
////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
//output
// console.log(name); => it is calling the key but it is not accessible
// console.log(otherName); => it will bring the value of key name 'Elon'
////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
//output
// console.log(password); => is calling the fist variable password; therefore, it will print "12345"
// console.log(hashedPassword); => there is no key called password
////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
//output
// console.log(first == second); => will compare 2=5 and will print false
// console.log(first == third);=> will be error because third is calling on the 10th element that does not exist
////////////////////////////////////////////////////////////////////////////////////////////////////
// Problem5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//output
// console.log(key); => will print "value"
// console.log(secondKey); will print "[ 1, 5, 1, 8, 3, 3 ]"
// console.log(secondKey[0]); will print "1"
// console.log(willThisWork); will print "5"