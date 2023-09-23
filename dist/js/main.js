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

let lifeOverflowing = new Audio("./music/A-Life-Overflowing.mp3");
let LifeSentOn = new Audio("./music/A-life-sent-on.mp3");
let WeightOfLife = new Audio("./music/The-weight-of-life.mp3");
let ErythiaSea = new Audio("./music/Erythia-Sea-Night.mp3");
let Bereaved = new Audio("./music/The-Bereaved-and-Those-Left-Behind.mp3");
let KnowNames = new Audio("./music/You-Will-Know-Our-Names.mp3");

const playlifeOverflowing = document.querySelector(".life-Overflowing");
const playAlifesenton = document.querySelector(".life-sent-on");
const playweightlife = document.querySelector(".weigth-of-life");
const playErythiaSea = document.querySelector(".Erythia-sea");
const playBereaved = document.querySelector(".bereaved-behind");
const playKnownames = document.querySelector(".know-names");

playlifeOverflowing.addEventListener("click",lifeOverflowingmusic)
playAlifesenton.addEventListener("click",LifeSentOnmusic)
playweightlife.addEventListener("click",WeightOfLifemusic)
playErythiaSea.addEventListener("click",ErythiaSeamusic)
playBereaved.addEventListener("click",Bereavedmusic)
playKnownames.addEventListener("click",knowNamesmusic)
function lifeOverflowingmusic(){
    lifeOverflowing.play();
    LifeSentOn.pause();
    WeightOfLife.pause();
    ErythiaSea.pause();
    Bereaved.pause();
    KnowNames.pause();
}
function LifeSentOnmusic(){
    LifeSentOn.play();
    lifeOverflowing.pause();
    WeightOfLife.pause();
    ErythiaSea.pause();
    Bereaved.pause();
    KnowNames.pause();
}
function WeightOfLifemusic(){
    WeightOfLife.play();
    LifeSentOn.pause();
    lifeOverflowing.pause();
    ErythiaSea.pause();
    Bereaved.pause();
    KnowNames.pause();
}
function ErythiaSeamusic(){
    lifeOverflowing.pause();
    LifeSentOn.pause();
    WeightOfLife.pause();
    ErythiaSea.play();
    Bereaved.pause();
    KnowNames.pause();
}
function Bereavedmusic(){
    lifeOverflowing.pause();
    LifeSentOn.pause();
    WeightOfLife.pause();
    ErythiaSea.pause();
    Bereaved.play();
    KnowNames.pause();
}
function knowNamesmusic(){
    lifeOverflowing.pause();
    LifeSentOn.pause();
    WeightOfLife.pause();
    ErythiaSea.pause();
    Bereaved.pause();
    KnowNames.play();
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

