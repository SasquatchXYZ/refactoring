const plays = require("./data/plays");
const invoices = require("./data/invoices");
// const statement = require("./original");
// const statement = require("./refactor");
const statement = require("./split")

const result = statement.statement(invoices, plays);
console.log(result);
