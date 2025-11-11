// Write a program that demonstrates how to control loop execution
// using the break and continue statements. The program should
// display numbers from 1 to 20 with the following conditions:
// 1. Uses a loop to print numbers from 1 to 20.
// 2. Skips multiples of 5 using the continue statement.
// 3. Stops the loop entirely when the number reaches 15 using the
// break statement.
for(let i = 1 ; i<= 20 ;i++){
    if(i===15){ // catch is 15 is also a multiple of 5 but for it break is to be used and not continue , so it has to be written first so that if 15 comes it should not get skipped and rest to be executed but breaks the entire loop for no further execution.
        break;
    }else if(i%5===0){
        continue;
    }
    console.log(i);
}