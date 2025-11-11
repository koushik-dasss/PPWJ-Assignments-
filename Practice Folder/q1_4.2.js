let num = 33;
let temp = num , sum = 0 ; 
while(temp!=0){
    sum+=(temp%10);
    temp = parseInt(temp/10);
}
console.log("Original number :"+ num);
console.log("Sum is :"+ sum);
let isPrime = true;
if(sum<2){
    isPrime=false;
}else{
    for(let i = 2 ; i*i <= sum ;i++){
        if(sum%i===0){
            isPrime=false;
            break;
        }
    }
}
if(isPrime){
    console.log(sum+" is a prime number.");
}else{
    console.log(sum+" is not a prime number.");
    
}

