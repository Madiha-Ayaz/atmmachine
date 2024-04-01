#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 25000; //Dollar
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    { name: "q1", message: "enter your pin", type: "number" },
]);
if (pinAnswer.q1 === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select  option",
            type: "list",
            choices: ["withdraw", "check balance", "Fastcash"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "enter your amount",
                type: "numbers",
            },
        ]);
        if (amountAns.amount <= myBalance) {
            let balance1 = myBalance -= amountAns.amount;
            console.log(`your remaining balance is: ${balance1}`);
        }
        else {
            console.log("You have Insufficient Answer");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is: ${myBalance}`);
    }
    else if (operationAns.operation === "Fastcash") {
        let FastcashAns = await inquirer.prompt([
            {
                name: "amount",
                message: "please select your amount",
                type: "list",
                choices: ["1000", "5000", "10000", "25000"],
            },
        ]);
        console.log(FastcashAns);
        if (FastcashAns.amount <= myBalance) {
            let balance2 = myBalance -= FastcashAns.amount;
            console.log(`your remaining balance is:${balance2}`);
        }
        else {
            console.log("You have Insufficient Answer");
        }
    }
}
else {
    console.log("Invalide pincode Please enter a correct pincode");
}
