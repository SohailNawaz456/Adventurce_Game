#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
class Player {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecress() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
    fuelIncress() {
        this.fuel = 100;
    }
}
class Opponent {
    name;
    fuel = 100;
    constructor(name) {
        this.name = name;
    }
    fuelDecress() {
        let fuel = this.fuel - 25;
        this.fuel = fuel;
    }
}
let player = await inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?",
    },
]);
let opponent = await inquirer.prompt([
    {
        type: "list",
        name: "select",
        message: "Select your opponent",
        choices: ["Skeleton", "Alien", "Zombie"],
    },
]);
let P1 = new Player(player.name);
let O1 = new Opponent(opponent.select);
// Skeleton
do {
    if (opponent.select == "Skeleton") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "What do you want to do?",
                choices: ["Attack", "Drink portion", "Run For your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.redBright("You Loose, Batter Lunk Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.greenBright("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            P1.fuelDecress();
            console.log(`You Drink Health Portion Your Fuel is ${P1.fuel}`);
        }
        if (ask.opt == "Run For your life..") {
            console.log(chalk.red `You Loose, Batter Lunk Next Time`);
            process.exit();
        }
    }
    //Alien
    if (opponent.select == "Alien") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "What do you want to do?",
                choices: ["Attack", "Drink portion", "Run For your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.redBright("You Loose, Batter Lunk Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.bgCyan("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            P1.fuelDecress();
            console.log(`You Drink Health Portion Your Fuel is ${P1.fuel}`);
        }
        if (ask.opt == "Run For your life..") {
            console.log(chalk.red `You Loose, Batter Lunk Next Time`);
            process.exit();
        }
    }
    // Zombie
    if (opponent.select == "Zombie") {
        let ask = await inquirer.prompt([
            {
                type: "list",
                name: "opt",
                message: "What do you want to do?",
                choices: ["Attack", "Drink portion", "Run For your life.."],
            },
        ]);
        if (ask.opt == "Attack") {
            let num = Math.floor(Math.random() * 2);
            if (num > 0) {
                P1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.redBright("You Loose, Batter Lunk Next Time"));
                    process.exit();
                }
            }
            if (num <= 0) {
                O1.fuelDecress();
                console.log(`${P1.name} Fuel is ${P1.fuel}`);
                console.log(`${O1.name} Fuel is ${O1.fuel}`);
                if (P1.fuel <= 0) {
                    console.log(chalk.bgCyan("You Win!"));
                    process.exit();
                }
            }
        }
        if (ask.opt == "Drink portion") {
            P1.fuelDecress();
            console.log(`You Drink Health Portion Your Fuel is ${P1.fuel}`);
        }
        if (ask.opt == "Run For your life..") {
            console.log(chalk.red `You Loose, Batter Lunk Next Time`);
            process.exit();
        }
    }
} while (true);
