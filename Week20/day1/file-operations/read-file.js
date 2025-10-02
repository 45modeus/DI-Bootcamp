import fs from "fs";

fs.readFile('output.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
        return
    }

    console.log(data);
})

console.log("Output:");