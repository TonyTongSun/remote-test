const fs = require("fs");
fs.readFile("./files/11.txt", "utf8", function (err, data) {
    console.log();
    console.log(data);
})
