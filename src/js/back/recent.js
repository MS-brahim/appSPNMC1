const fs = require('fs');

fs.readFile('data/recent.txt','utf-8',(err,data)=>{

    if(err) console.log(err)
    else {
        
        let recentArray = [];

        recentArray.push(data);

        //console.log(data);
        //console.log(recentArray);

        let ul = document.getElementById("recentList");
        var list = '';
        let sizeData = recentArray.toString().split(";");
        for(var i=0;i< sizeData.length-1;i++){
            //for(var j=0;j<recentArray.toString().split(",").length;j++){
               // console.log(recentArray.toString().split(",")[i][j]);
                list = `
                <li type="button"  class="list-group-item list-group-item-action">
                    ${
                        sizeData[i]
                        
                    }
                </li>
                `
                // console.log(sizeData[i])
                ul.innerHTML  =  ul.innerHTML + list;
            //}
        }
    }
})

// const fs = require('fs');

// fs.readFile('data/recent.txt','utf-8',(err,data)=>{

//     if(err) console.log(err)
//     else {
        
//         let recentArray = [];

//         recentArray.push(data);

//         //console.log(data);
//         //console.log(recentArray);

//         let ul = document.getElementById("recentList");
//         var list = '';
//         let sizeData = recentArray.toString().split("\n");
//         for(var i=0;i< sizeData.length;i++){
//             for(var j=0;j<data.toString().split(",").length ;j++){
//                // console.log(recentArray.toString().split(",")[i][j]);
//                 list = `
//                 <li type="button"  class="list-group-item list-group-item-action">
//                 N° : 
//                     ${
//                         sizeData.toString().split(";")[i+0]
                        
//                     }
//                     <br><small> Date :
//                     ${
//                         sizeData.toString().split(";")[i+1]
                        
//                     }
//                     </small>
//                 </li>
//                 `
//                 // console.log(sizeData[i])
//             }
            
//             ul.innerHTML  =  ul.innerHTML + list;
//         }
        
//     }
// })