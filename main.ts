import inquirer from "inquirer";

//asking question from user through inquirer

let answer = await inquirer.prompt([
    {message: "Enter your first Number", type: "number", name: "firstNumber"},
    {message: "Enter your second Number", type: "number", name: "secondtNumber"},
    {
        message:"Select the operation you want to perform operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

console.log(answer); //printing the response of users 

//conditional statement
if(answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondtNumber)
}

else  if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondtNumber)
}
else  if (answer.operator === "Multiplication"){
    console.log(answer.firstNumber * answer.secondtNumber)
}else  if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondtNumber)
}
else{
    console.log("Invalid input");
}