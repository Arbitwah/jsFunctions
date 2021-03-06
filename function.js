//Number squaring
//Complete the following program so that the square1() and square2() functions work properly.
// Square the given number x
function square1(x) {
 x = Math.pow(x,2);
  return x;
}

// Square the given number x
const square2 = x => Math.pow(x,2) // TODO: complete the function code

console.log(square1(0)); // Must show 0
console.log(square1(2)); // Must show 4
console.log(square1(5)); // Must show 25

console.log(square2(0)); // Must show 0
console.log(square2(2)); // Must show 4
console.log(square2(5)); // Must show 25
//When it's done, update the program so that it shows the square of every number between 0 and 10.
//Writing 10 dumb calls to square() is forbidden! You know how to repeat statements, don't you? 
for(let x = 0; x < 11; x++){
  console.log(square1(x));
}

//Minimum of two numbers
//Let's pretend the JavaScript Math.min() function doesn't exist. Complete the following program so that the min() function returns the minimum of its two received numbers.
// TODO: write the min() function
const min = (x,y) => 
{
  if(x>y)
    return y;
  else if(x<y)
    return x;
  else if(x === y)
    return x;
}
console.log(min(4.5, 5)); // Must show 4.5
console.log(min(19, 9));  // Must show 9
console.log(min(1, 1));   // Must show 1

