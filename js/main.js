// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menubranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");


//set initial state of menu
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);

//music

let offseer = new Audio("./music/Off-seer.mp3");
let LifeSentOn = new Audio("./music/A-life-sent-on.mp3");
let WeightOfLife = new Audio("./music/The-weight-of-life.mp3");

const playoffseer = document.querySelector(".play-off-seer");
const playAlifesenton = document.querySelector(".life-sent-on");
const playweightlife = document.querySelector(".weigth-of-life");

playoffseer.addEventListener("click",offseermusic)
playAlifesenton.addEventListener("click",LifeSentOnmusic)
playweightlife.addEventListener("click",WeightOfLifemusic)
function offseermusic(){
    offseer.play();
    LifeSentOn.pause();
    WeightOfLife.pause();
}
function LifeSentOnmusic(){
    LifeSentOn.play();
    offseer.pause();
    WeightOfLife.pause();
}
function WeightOfLifemusic(){
    WeightOfLife.play();
    LifeSentOn.pause();
    offseer.pause();
}

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

//select img of characters
const imgNoah = document.querySelector(".bio-image-Noah");
const imgMio = document.querySelector(".bio-image-Mio");
const imgSena = document.querySelector(".bio-image-Sena");
const imgLanz = document.querySelector(".bio-image-Lanz");
const imgEuine = document.querySelector(".bio-image-Euine");
const imgTaion = document.querySelector(".bio-image-Taion");


const imgZ = document.querySelector(".bio-image-Z");
const imgN = document.querySelector(".bio-image-N");
const imgM = document.querySelector(".bio-image-M");
const imgJ = document.querySelector(".bio-image-J");
const imgX = document.querySelector(".bio-image-X");
const imgY = document.querySelector(".bio-image-Y");
//select bio of characters
const NoahBio = document.querySelector(".bio-Noah");
const MioBio = document.querySelector(".bio-Mio");
const SenaBio = document.querySelector(".bio-Sena");
const LanzBio = document.querySelector(".bio-Lanz");
const EuineBio = document.querySelector(".bio-Euine");
const TaionBio = document.querySelector(".bio-Taion");

const ZBIO = document.querySelector(".bio-Z");
const NBIO = document.querySelector(".bio-N");
const MBIO = document.querySelector(".bio-M");
const JBIO = document.querySelector(".bio-J");
const XBIO = document.querySelector(".bio-X");
const YBIO = document.querySelector(".bio-Y");

//function
imgNoah.addEventListener("click",BioCharacterNoah)
imgMio.addEventListener("click",BioCharacterMio)
imgSena.addEventListener("click",BioCharacterSena)
imgLanz.addEventListener("click",BioCharacterLanz)
imgEuine.addEventListener("click",BioCharacterEuine)
imgTaion.addEventListener("click",BioCharacterTaion)

imgZ.addEventListener("click", BioCharacterZ)
imgN.addEventListener("click",BioCharacterN)
imgM.addEventListener("click",BioCharacterM)
imgJ.addEventListener("click",BioCharacterJ)
imgX.addEventListener("click",BioCharacterX)
imgY.addEventListener("click",BioCharacterY)

// heroes
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
//villains

function BioCharacterZ(){
    ZBIO.classList.remove("hide");
    NBIO.classList.add("hide");
    MBIO.classList.add("hide");
    JBIO.classList.add("hide");
    YBIO.classList.add("hide");
    XBIO.classList.add("hide");
}
function BioCharacterN(){
    ZBIO.classList.add("hide");
    NBIO.classList.remove("hide");
    MBIO.classList.add("hide");
    JBIO.classList.add("hide");
    YBIO.classList.add("hide");
    XBIO.classList.add("hide");
}
function BioCharacterM(){
    ZBIO.classList.add("hide");
    NBIO.classList.add("hide");
    MBIO.classList.remove("hide");
    JBIO.classList.add("hide");
    YBIO.classList.add("hide");
    XBIO.classList.add("hide");
}
function BioCharacterJ(){
    ZBIO.classList.add("hide");
    NBIO.classList.add("hide");
    MBIO.classList.add("hide");
    JBIO.classList.remove("hide");
    YBIO.classList.add("hide");
    XBIO.classList.add("hide");
}
function BioCharacterX(){
    ZBIO.classList.add("hide");
    NBIO.classList.add("hide");
    MBIO.classList.add("hide");
    JBIO.classList.add("hide");
    YBIO.classList.add("hide");
    XBIO.classList.remove("hide");
}
function BioCharacterY(){
    ZBIO.classList.add("hide");
    NBIO.classList.add("hide");
    MBIO.classList.add("hide");
    JBIO.classList.add("hide");
    YBIO.classList.remove("hide");
    XBIO.classList.add("hide");
}
