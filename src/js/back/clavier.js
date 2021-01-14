const fs = require('fs');
let dateFormat = window.require("dateformat");
const swal = require('sweetalert2');
var num = document.getElementById("outputNum");

function call(){
    let outputNum = num.innerHTML;
    let dataArray = [outputNum.trim() +"<br><small>"+ dateFormat("d-mm-yyyy HH:mm:ss")+"</small>;"+"\n"];
    
    if (outputNum.length<1) {
        return false;
    } else {
        fs.appendFileSync('data/recent.txt', dataArray  , (err) => {
            if (err) throw err;
            console.log("Success Calling !!");
        });
        calling.addEventListener('click',function()  {
            let outputNum = num.innerHTML;
            swal.fire(
                "Calling...",
                outputNum.trim(),
                'success'
            )
        });
    }
};

