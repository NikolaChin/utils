var index = require("./index");
var common = require("./common");

var result = common.uniqArray([1, 1, 2, 3, "qqc", true, false, false]);
console.log(result)