const fs = require('fs');
let dateFormat = window.require("dateformat");
const swal = require('sweetalert2');

function call(){

    let outputNum = document.getElementById("outputNum").innerHTML ;
    let dataArray = [outputNum.trim() +" <br><small>"+ dateFormat("d-mm-yyyy HH:mm:ss")+"</small>;"+""+"\n"];
 
    fs.appendFileSync('data/recent.txt', dataArray  , (err) => {
        if (err) throw err;
        console.log("Success Calling !!");
    });
};

calling.addEventListener('click',function()  {
    var outputNum = document.getElementById("outputNum").innerHTML;
    //swal("Calling..."+" "+outputNum.trim());
    swal.fire(
        "Calling...",
        outputNum.trim(),
        'phone'
      )
});