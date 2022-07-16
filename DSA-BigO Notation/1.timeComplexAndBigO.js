// Time complexity is the study of efficiency os algorithms. How time taken to execute an algorithm grows with the size of input
//  short input ----> okay! not a big deal
// huge input ------> not possible! in short time

// PROBLEM: SUPPOSE WE WANT TO WRITE A FUNCTION THAT CALCULATES THE SUM OF ALL NUMBERS FROM 1 UPTO (AND INCLUDING) SOME NUMBER OF N?

// we are taking same input(n) in both methods for comparision
//METHOD1:
function addUpto1(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpto1(5));

//METHOD2
function addUpto2(n) {
  return (n * (n + 1)) / 2;
}
console.log(addUpto2(5));

//TO CHECK HOW MUCH TIME TAKES EACH METHODS BY USING THIS CODE
let time1 = performance.now();
addUpto1(1000000000);
let time2 = performance.now();
console.log(`Time Elapsed:${(time2 - time1) / 1000} Seconds.`);

//after checking both methods by using this code we can clearly tells that method2 is better because its much-
//1. faster
//2. less memory intensive
//3. readable

//THE PROBLEM WITH THE TIME :
//1. different machine will record different time
//2. the same machine will record different
//3. for last algorithms, speed measurements may not be precise enough

//COUNTING OPERATION:
// in method2 their have only 3 operation( *, +, / ). so doesn't worry about input(n), how big input is coming runtime will be the same
// but in method1 their are so many operation. basically as n means input grows number of operations will grows.so that its effects on runtime, runtime will increasing (number of operations is (eventually ) bounded by a multiple of input or n)

// depending on what we count, the number of operations can be as low as 2n or as high as 5n+2

// BIG O NOTATION: it is a way to formalize fuzzy counting. it allows us to talk formally about how the runtime of a algorithm grows as the input grows


// we can say that an algorithm is o(f(n)) if the number of simple operations the computer has to do is eventually less than a constant times f(n), as n increase.[ f(n) could be anything such as constant linear]


//EXAMPLE1
function countDown (n) {
  for (let i=0; i<n; i++){
    console.log(i)
  }
  console.log("At the top! going down")
  for (let j=n-1;j>0;j--){
    console.log(j)
  }
}
console.log(countDown(10))

//EXAMPLE2
function printAllPairs(n){
  for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
      console.log(i,j)
    }
  }
}

console.log(printAllPairs(2))

//O(n) operation inside of an O(n) operation is called O(n^2)
// as you can see in example no2(if n grows runtime aslo grows n*n)

//BIG-O SHORTHANDS
//1. Arithmatic operations are constant
//2. variable assignment is contant
//3. Accessing elements in Array(by index) or Object(by keys) is constant
//4. In a loop , yhe complexity is the length of the loop times the complexity of whatever happens inside the loop

function loopAtMax(n){
  for (let i=1; i<= Math.max(5,n); i++){
    console.log(i);
  }
}
console.log(loopAtMax(10))
//in this function runtime is increase when input(n) increase. so this is O(n) type 

function loopAtMin(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
console.log(loopAtMin(10))
//this function only run max 5times after that it didn't run. runtime will constant. so it is O(1)type

// SPACE COMPLEXITY(Means amount of memory takes)
//whan talk about space complexity , technically we will be taking about auxiliary space complexity.
// auxiliary complexity to refer to space required by the alogorithm, not including space taken up by the inputs.

//1. most primitives(booleans, numbers, undifined, null) are constant space
//2. strings requires O(n) space(where n is the string length)
//3. Reference types are generally O(n), where n is the length (for arrays ) or the number of keys(for Object)


//O(1) space type
function SUM(arr){
  let total=0;
  for (let i=0; i<arr.length;i++){
    total+=arr[i]
  }
  return total;
}

//O(n) space type
function double(arr){
  let newArr=[];
  for (let i=0; i<arr.length; i++){
    newArr.push(2*arr[i])
  }
  return newArr;  //n number
}