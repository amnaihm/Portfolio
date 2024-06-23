// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}








var infolinkss = document.getElementsByClassName("infolinks");
var infocontentss = document.getElementsByClassName("infocontent");

function openlink(linkname){
    for(infolinks of infolinkss){
        infolinks.classList.remove("activelink");
    }
    for(infocontents of infocontentss){
        infocontents.classList.remove("activecontent");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(linkname).classList.add("activecontent");
}