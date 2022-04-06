window.addEventListener("load", init);

function ID(elem) {
  return document.getElementById(elem);
}
function $(elem) {
  return document.querySelectorAll(elem);
}

function CLASS(elem) {
  return document.getElementsByClassName(elem);
}


function init () {
var kartya = "";
var LBT = "";
  
var kepek = [{"kepek/1.jpg}, {kepek/2.jpg} ,{kepek/3.jpg} , {kepek/4.png} , {kepek/5.jpg},{kepek/6.jpg},{kepek/7.jpg},{kepek/8.jpg}" ];
   

 for (let index = 0; index < 2; index++) {
        
            for (let index = 0; index < kepek.length; index++) {
                
                kartya += `<div id="${index}">${index}</div>`;
                        ID("memoria").innerHTML = kepek[index];
                        
                        
                
                /* 
                var kartya = document.createElement("div");
                div.style.width = "100px";
                div.style.height = "100px";
                div.style.backgroundImage = "kepek[index]";
                div.style.display = "grid";
                div.innerHTML = "kepek[index]";
                document.CLASS("memoria").appendChild(div);
                        */

           
                  }
                }
                for (let index = 0; index < kepek.length; index++) {
                    kartya.addEventListener("onclick", Felfordit);
                 

            }
    }





    CLASS("memoria").innerHTML = kartya;

function Felfordit(event) {
    event.target.className = "latszodik";
        if (condition) {
            
        } else {} 



}

/*function parosit {
    if () {
        
    } else { document.getElementById("demo").style.display = "block";

        
    }

    */


    
    




