let userinput = document.querySelector('#idtextkeyinput');
let typenlinked = document.querySelector('.linksopen');
let followlink = document.getElementById("follzse");
let progresstrigger = document.querySelector('.progressbar');
let openkeys = document.querySelector('#openkeys');

function findthekey(){
    let ricklink = "https://www.youtube.com/watch?v=fcZXfoB2f70";
    let bingchillinlink = "https://youtu.be/6AY-NcO7DOA";
    let dreamsusremix = "https://www.youtube.com/watch?v=NkFrnFooMgk";

    if(userinput.value == "D44gIjerKKwQ"){
        progresstrigger.classList.add("load");
        setTimeout(function(){
            typenlinked.style.display = "flex";
            userinput.value = "";
            followlink.setAttribute("href", ricklink);
            progresstrigger.classList.remove("load");
        }, 1000);

    }
    else if(userinput.value == "BiChln_9402Dam"){
        progresstrigger.classList.add("load");
        setTimeout(function(){
            typenlinked.style.display = "flex";
            userinput.value = "";
            followlink.setAttribute("href", bingchillinlink);
            progresstrigger.classList.remove("load");
        }, 1000);
    }
    else if(userinput.value == "DZA1pvKT"){
        progresstrigger.classList.add("load");
        setTimeout(function(){
            typenlinked.style.display = "flex";
            userinput.value = "";
            followlink.setAttribute("href", dreamsusremix);
            progresstrigger.classList.remove("load");
        }, 1000);
    }
    else{
        alert("Hmmmm... Seems like your key is Invalid.");
    }
}

function scrollviewinput(){
    openkeys.scrollIntoView({behavior: "smooth"});
}

let developer = 0;
let debounce = 0;

document.addEventListener("contextmenu", (e) => {
    if(developer == 0){
        e.preventDefault();
    }
})

document.onkeydown = function(e) {
    if(developer == 0){
        if(event.keyCode == 123) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
            return false;
         }
         if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
            return false;
         }
    }
}
