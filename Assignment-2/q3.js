// Imagine Riya works as a software developer in a company.
// Her basic salary is Rs.50,000. According to company policy:
// She gets 20% HRA (for housing).
// She gets 10% DA (for cost of living).
// She pays 5% income tax on the total salary.
// Write a JavaScript program to calculate the net salary of an em-
// ployee after deductions and allowances.Use conditional (ternary)
// operator
let basic_salary = 50000 , HRA = (1/5)*50000 , DA = (1/10)*50000 ;
let total_salary = basic_salary+HRA+DA;
let tax = (5/100)*total_salary;
let net_salary = total_salary-tax;
console.log("The basic salary is :"+ basic_salary);
console.log("The HRA is :"+ HRA);
console.log("The DA is :"+ DA);
console.log("The total salary is :"+ total_salary)
console.log("The tax amount to be deduced is :"+ tax);
console.log("The net salary is : "+ net_salary);

