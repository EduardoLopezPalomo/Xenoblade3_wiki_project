// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menubranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;

//select img of characters
const imgNoah = document.querySelector(".bio-image-Noah");
const imgMio = document.querySelector(".bio-image-Mio");
const imgSena = document.querySelector(".bio-image-Sena");
const imgLanz = document.querySelector(".bio-image-Lanz");
const imgEuine = document.querySelector(".bio-image-Euine");
const imgTaion = document.querySelector(".bio-image-Taion");
//select bio of characters
const NoahBio = document.querySelector(".bio-Noah");
const MioBio = document.querySelector(".bio-Mio");
const SenaBio = document.querySelector(".bio-Sena");
const LanzBio = document.querySelector(".bio-Lanz");
const EuineBio = document.querySelector(".bio-Euine");
const TaionBio = document.querySelector(".bio-Taion");


imgNoah.addEventListener("click",BioCharacterNoah);
imgMio.addEventListener("click",BioCharacterMio);
imgSena.addEventListener("click",BioCharacterSena);
imgLanz.addEventListener("click",BioCharacterLanz);
imgEuine.addEventListener("click",BioCharacterEuine);
imgTaion.addEventListener("click",BioCharacterTaion);
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    if(!showMenu){
        menuBtn.classList.add("close");
        menu.classList.add("show");
        menuNav.classList.add("show");
        menubranding.classList.add("show");
        navItems.forEach(item => item.classList.add("show"));

        showMenu =true;
    }
    else{
        menuBtn.classList.remove("close");
        menu.classList.remove("show");
        menuNav.classList.remove("show");
        menubranding.classList.remove("show");
        navItems.forEach(item => item.classList.remove("show"));

        showMenu =false;
    }
}
function BioCharacterNoah(){
    NoahBio.classList.remove("hide");
    MioBio.classList.add("hide");
    SenaBio.classList.add("hide");
    LanzBio.classList.add("hide");
    EuineBio.classList.add("hide");
    TaionBio.classList.add("hide");
}
function BioCharacterMio(){
    NoahBio.classList.add("hide");
    MioBio.classList.remove("hide");
    SenaBio.classList.add("hide");
    LanzBio.classList.add("hide");
    EuineBio.classList.add("hide");
    TaionBio.classList.add("hide");
}
function BioCharacterSena(){
    NoahBio.classList.add("hide");
    MioBio.classList.add("hide");
    SenaBio.classList.remove("hide");
    LanzBio.classList.add("hide");
    EuineBio.classList.add("hide");
    TaionBio.classList.add("hide");
}
function BioCharacterLanz(){
    NoahBio.classList.add("hide");
    MioBio.classList.add("hide");
    SenaBio.classList.add("hide");
    LanzBio.classList.remove("hide");
    EuineBio.classList.add("hide");
    TaionBio.classList.add("hide");
}
function BioCharacterEuine(){
    NoahBio.classList.add("hide");
    MioBio.classList.add("hide");
    SenaBio.classList.add("hide");
    LanzBio.classList.add("hide");
    EuineBio.classList.remove("hide");
    TaionBio.classList.add("hide");
}
function BioCharacterTaion(){
    NoahBio.classList.add("hide");
    MioBio.classList.add("hide");
    SenaBio.classList.add("hide");
    LanzBio.classList.add("hide");
    EuineBio.classList.add("hide");
    TaionBio.classList.remove("hide");
}
