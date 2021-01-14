const fs = require('fs');
let dateFormat = window.require("dateformat");
const swal = require('sweetalert2');

function call(){
    let outputNum = document.getElementById("outputNum").innerHTML;
    let dataArray = [outputNum.trim() +"<br><small>"+ dateFormat("d-mm-yyyy HH:mm:ss")+"</small>;"+"\n"];
    
    if (outputNum.length<1) {
        return false;
    } else {
        fs.appendFileSync('data/recent.txt', dataArray  , (err) => {
            if (err) throw err;
            console.log("Success Calling !!");
        });
       
        swal.fire(
            "Calling...",
            outputNum.trim(),
        );
    }
};

