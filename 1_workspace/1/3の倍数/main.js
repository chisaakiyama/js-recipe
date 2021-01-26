const genkiFunction = function(number){
  for (let n=1; n<=number; n++) {
    let num="00"+n
    num=num.split("")
    if (n%3===0 && num.indexOf('3') != -1){
      console.log(n + "♡")
    }
    else if(n%3===0){
      console.log(n + "!!!!!!");
    }
    else if (num.indexOf('3') != -1) {
      console.log(n + "!!!")
    }
    else {
      console.log(n);
    }
  }
}

genkiFunction(50)