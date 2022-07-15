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
