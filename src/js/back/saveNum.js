const fs = require('fs');

function save(){
    let numberPhone = document.getElementById("numberPhone").value;
    let userName = document.getElementById("userName").value;
    let dataArray = [userName+", "+numberPhone+";"+""+"\n"];
 
    if (numberPhone =="") {
        alert("Enter Phone Number!!!");
    } else {
    fs.appendFileSync('data/contact.txt', dataArray  , (err) => {
        if (err) throw err;
        console.log("Success save !!");
    });}
};