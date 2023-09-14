const fs = require("fs");

let opr = process.argv[2];
let fileName = process.argv[3];
let data = process.argv[4];

const write=()=>{
    fs.writeFile(fileName, data, (err)=>{
        if (err) throw err;
        console.log(`Your file created : ${fileName} and with data : ${data}`);
    })
}
const read=()=>{
    fs.readFile(fileName , (err, data)=>{
        if (err) throw err;
        console.log(`Read your created file : ${fileName} with include data : ${data}`);
    })
}
const append=()=>{
    fs.appendFile(fileName, data, (err)=>{
        if (err) throw err;
        console.log(`you are append data to file: ${fileName} and new data : ${data}`)
    })
}
const rename=()=>{
    fs.rename(fileName, data, (err)=>{
        if (err) throw err;
        console.log(`You file reanamed from ${fileName} to ${data} sucessfully`)
    })
}
const deletfile=()=>{
    fs.unlink(fileName, (err)=>{
        if (err) throw err;
        console.log(`Your file : ${fileName} is deletd sucessfully`)
    })
}
if ( opr == "write"){
    write();
}
else if (opr == "read"){
    read();
}
else if (opr == "append"){
    append();
}
else if (opr == "rename"){
    rename();
}
else if (opr == "deletfile"){
    deletfile();
}
else{
    console.log("Please enter proper opratator name")
}