const plays = require("./data/plays");
const invoices = require("./data/invoices");
const statement = require("./statement");

const result = statement.statement(invoices, plays);
console.log(result);
