// Write a program that performs the following operations on a given
// array of numbers using loops (no built-in array methods like sort()
// or reverse()): Write a JavaScript program that include a menu
// driven program with choice 1,2 ..:
// 1. Display all elements of the array.
// 2. Calculate and print the sum, maximum, and minimum value
// of the array.
// 3. Count and display how many numbers are even and how many
// are odd.
// 4. Reverse the array and print the reversed version.
// 5. Search for a specific element in the array and display its index
// (if present).
// 6. Remove duplicates from the array and show the resulting ar-
// ray.
// 7. Sort the array in ascending order using loops only.
let arr = [12,87,46,90,276,2,7,56,13,45,65,212];
let choice = parseInt(prompt("Enter your choice(1-7) :"));
console.log("---MAIN MENU----");
console.log("1. Display all elements of the array: ");
console.log("2. Calculate and print the sum, maximum, and minimum value of the array.");
console.log("3. Count and display and how many numbers are even and how many are odd");
console.log("4. Reverse the array and print the reversed edition.");
console.log("5. Search for a specific element in the array and display it's index. (if present) ");
console.log("6. Remove duplicates from the array and show the resulting array ");
console.log("7. Sort the array in ascending order using loops only. ");
switch(choice){
    case 1 : 
    for(let i = 0 ; i < arr.length ; i++){
        console.log(arr[i]);
    }
    break;
    case 2 :
    let sum = 0 , max = arr[0] , min = arr[0] ;
    for(let i = 0 ; i < arr.length ; i++){
        sum+=arr[i];
    }
    console.log("The sum of elements of the array is :"+ sum);
    for(let i = 0 ; i < arr.length ;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("The max. element of the array is:"+ max);
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    console.log("The min. element of the array is: "+ min);
    break;
    case 3:
    let even_ctr = 0 , odd_ctr = 0;
    for(let i = 0 ; i< arr.length ;i++){
        if(arr[i]%2===0){
            even_ctr+=1;
        }else{
            odd_ctr+=1;
        }
    }
    console.log("The number of even elements in the array are : "+ even_ctr);
    console.log("The number of odd elements in the array are :"+ odd_ctr);
    break;
    case 4:
    let left = 0 , right = arr.length-1;
    while(left<right){
        [arr[left],arr[right]] = [arr[right],arr[left]];
        left++;
        right--;
    }
    console.log("The reversed array is :" , arr );
    break;
    case 5:
    let ele = 45 , index = -1;
    for(let i = 0 ; i< arr.length ;i++){
        if(arr[i]===ele){
            index = i;
        }
    }
    console.log("The element "+ ele + " is present in the array in the position "+ index );
    break;
    case 6:
    let arr2=[];
    for(let i = 0 ; i< arr.length ;i++){
        for(let j = 0 ; j < arr.length - i - 1 ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]=arr[j+1],arr[j]];
            }
        }
    }
    if(arr.length>0){
        arr2.push(arr[0]);
    }
    for(let i = 1 ; i< arr.length ;i++){
        if( arr[i-1]!==arr[i]){
            arr2.push(arr[i]);
        }
    }
    console.log("The elements of array without duplicates is :", arr2);
    break;
    case 7:
    for(let i = 0 ; i< arr.length ;i++){
        for(let j = 0 ; j < arr.length - i - 1 ; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]=arr[j+1],arr[j]];
            }
        }
    }
    console.log("The sorted array is :", arr);
    default :
    console.log("Invalid choice.");
}














