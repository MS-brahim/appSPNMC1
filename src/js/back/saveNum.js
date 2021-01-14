const fs = require('fs');
const swal = require('sweetalert2');

function save(){
    let numberPhone = document.getElementById("numberPhone").value;
    let userName = document.getElementById("userName").value;
    let dataArray = [userName+" <br><small> "+numberPhone+"</small>;"+"\n"];
 
    if (numberPhone =="") {
        return;
    } else {

        fs.appendFileSync('data/contact.txt', dataArray  , (err) => {
            if (err) throw err;
            console.log("Success save !!");
            swal.fire('success');            
        });
        // location.reload("contact.html");
        document.getElementById("formSave").action = "contact.html"
    }
};