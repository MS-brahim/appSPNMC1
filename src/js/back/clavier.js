const fs = require('fs');
var dateFormat = window.require("dateformat");

function call(){

    let outputNum = document.getElementById("outputNum").innerHTML ;
    let dataArray = [outputNum.trim() +", "+ dateFormat("d-mm-yyyy")+";"+""+"\n"];
 
    fs.appendFileSync('data/recent.txt', dataArray  , (err) => {
        if (err) throw err;
        console.log("Success Calling !!");
    });
};

calling.addEventListener('click',function()  {
    var outputNum = document.getElementById("outputNum").innerHTML;
    alert("Calling..."+" "+outputNum.trim());
});