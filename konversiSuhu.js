const figlet = require('figlet');
const chalk = require('chalk');
const { celciusToFahrenheit, celciusToReamur } = require('./rumusSuhu');


console.log(chalk.cyan(figlet.textSync('Konversi Suhu', { horizontalLayout: 'full' })));

let suhuC = 35;

console.log(chalk.yellow("========================================"));
console.log(chalk.bold.white("   PROGRAM MINI APP MODULAR - SUHU"));
console.log(chalk.yellow("========================================"));
console.log(chalk.blue(`Suhu Input (Celcius) : `) + chalk.bold.green(`${suhuC}°C`));
console.log(chalk.blue(`Hasil ke Fahrenheit  : `) + chalk.bold.green(`${celciusToFahrenheit(suhuC)}°F`));
console.log(chalk.blue(`Hasil ke Reamur      : `) + chalk.bold.green(`${celciusToReamur(suhuC)}°R`));
console.log(chalk.yellow("========================================"));