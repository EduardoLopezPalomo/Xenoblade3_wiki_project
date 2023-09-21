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

