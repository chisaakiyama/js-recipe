const genkiFunction = function(number){
// n に入っている値を 1 から、 number まで、 1 ずつ増やしながら、 {} の中身を繰り返す
for (let n=1; n<=number; n++) {
  if (n % 3 === 0) {
    console.log("Fizz")
  } else if (n % 5 === 0) {
    console.log("Buzz")
  } else if (n % 15 === 0) {
    console.log("FizzBuzz")
  } else {
    console.log(n)
  }
}
