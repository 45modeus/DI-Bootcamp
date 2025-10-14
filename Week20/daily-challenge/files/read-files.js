import fs from "fs";

function read (){
    fs.readFile('file-data.txt', 'utf-8', function(err, data) {
    if (err) {
        console.log(err)
        return
    }

    console.log(data);
})

console.log("file-data:");
}

export default read;