const fs = require('fs');
const swal = require('sweetalert');

fs.readFile('data/contact.txt','utf-8',(err,data)=>{
    if(err) console.log(err)
    else {
        let contact = [];

        contact.push(data);

        console.log(data);
        console.log(contact)

        let ul = document.getElementById("conatctList")

        var list = '';
        for(var i = 0; i < contact.toString().split(";").length -1; i++){
        list = `
        <li onclick="call()" type="button"  class="list-group-item list-group-item-action">
            ${
            contact.toString().split(";")[i]         
            }
            <i class="fa fa-exclamation-circle float-right" aria-hidden="true"></i>
        </li>
        `
        ul.innerHTML  =  ul.innerHTML + list;
        }
    }
})

function call() {
   //location.replace("clavier.html");
    swal("deded")
}
