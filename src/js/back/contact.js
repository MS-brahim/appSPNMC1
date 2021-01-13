const fs = require('fs');
fs.readFile('data/contact.txt','utf-8',(err,data)=>{
    if(err) console.log(err)
    else {
        let contact = [];

        contact.push(data);

        console.log(data);
        console.log(contact)

        let ul = document.getElementById("conatctList")

        var list = '';
        for(var i = 0; i < contact.toString().split(";").length; i++){
        list = `
        <li type="button"  class="list-group-item list-group-item-action">
            ${
            contact.toString().split(";")[i]         
            }
        </li>
        `
        ul.innerHTML  =  ul.innerHTML + list;
        }
    }
})