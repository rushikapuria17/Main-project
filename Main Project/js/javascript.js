$(document).ready(function() {
    $("#header").load("header.html", function() {
    });

    $("#footer").load("footer.html", function() {
    });
});

burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
rightnav=document.querySelector('.rightnav');


burger.addEventListener('click',()=>{
    alert("nnn");
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})