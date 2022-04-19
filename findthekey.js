let userinput = document.querySelector('#idtextkeyinput');
let typenlinked = document.querySelector('.linksopen');
let followlink = document.getElementById("follzse");
let progresstrigger = document.querySelector('.progressbar');
let openkeys = document.querySelector('#openkeys');

function findthekey(){
    let ricklink = "https://www.youtube.com/watch?v=fcZXfoB2f70";
    let bingchillinlink = "https://youtu.be/6AY-NcO7DOA";

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
    else{
        alert("Hmmmm... Seems like your key is Invalid.");
    }
}

function scrollviewinput(){
    openkeys.scrollIntoView({behavior: "smooth"});
}
