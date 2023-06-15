
// single line comment

/*

  multi-line comment

*/

// Psuedo code:
// 1. write out the steps of what you want to do
// 2. write out the code to do each step

// variables rule of thumb:
// always create variables with the smalled scope possible

function blockScope() { // 1st block
  
    if (5 === 5 && 4 > 3 && 3 ===3) { // 2nd block
        
        const a = 5000; // available in all child blocks

        if (5 === 5) { // 3rd block

            let a = 5; // although a is already defined, this is a new variable
            let x = 5; 
           
            console.log(`X is equal to ${x}`);
        }

        for (let i = 0; i < 5; i++) { // 4th block

            let y = 5; // let - block scope
            let x = 50; // although x is already defined, this is a new variable
            
            console.log(`X is equal to ${x}`);
        }

    }

    console.log(y); // error - out of scope
    console.log(x); // error - out of scope
}


// if statements:

    if (5 > 3) {
        console.log("This is true");
    }

    let a = true;

    if (3 > 5) {
    
        console.log("This is not true");

    } else if (5 > 3) { 

        console.log("Made to the else if"); 
 
    } else { // can only have 1 else block

        console.log("Made to the else statement - other conditions are false");
    }


// for loops:

    let total = 0;

    for (let i = 0; i < 5; i++) {
        
        total += i;
    }

// loop through a string:
    
    let str = "Hello World";

    for (let i = 0; i < str.length; i++) { // i++ is the same as i = i + 1
        console.log(str[i]);
    }

// while loops:

    let sum = 0;
    let i = 0; // define incrementor outside of the loop

    while (i < 5) {
        // don't initialize the incrementor here - it will create an infinite loop
        sum += i;
        i++; // incrementor
    }