import fs from "fs";

fs.writeFile('output.txt', 'Hello World!', function (err) {
    if (err){
        console.log(err)
    }
    else{
        console.log('Write Operation complete.');
    }
});