function test1(val) {

    let result = "";
  
    if (val > 5) {
      result = "Bigger than 5";
    }
  
    if (val <= 5) {
      result = "5 or Smaller";
    }

    // Only change code above this line
    return result;
}
  
console.log(test1(4));

function test2(val) {

    for (let i = 0; i < val.length; i++) {
      console.log(val[i]);
    }
}

test2("have a good easter")

function test3(val) {

    let reverse = "";

    if (val.length === 0) return false;

    if (val === "hello") return "goodbye";

    for (let i = val.length -1; i > 0; i--) {
     
        reverse += val[i];
    }

    return reverse;
}

console.log(test3("easter"));