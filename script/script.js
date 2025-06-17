// CARROSSEL CREME

let list = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById("prev");
let next = document.getElementById("next");

let active = 0;
let lengthItems = items.length - 1;
let refreshSlider = setInterval(() => {next.click()}, 7000);
function reloadSlider(){
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector(".slider .dots li.active");
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    let refreshSlider = setInterval(() => {next.click()}, 10000)
}
prev.onclick = function(){
    if(active -1 < 0){
        active = lengthItems;

    }else{
        active = active -1;
    }
    reloadSlider();
    clearInterval(refreshSlider);
}
next.onclick = function(){
    if(active +1 > lengthItems){
        active = 0;
    }else{
        active = active +1
    }
    reloadSlider();
}

dots.forEach((list, key) => {
    list.addEventListener('click', function(){
        active = key;
        reloadSlider();
    })
})

//CARROSSEL FONE
let list2 = document.querySelector(".slider2 .list2");
let items2 = document.querySelectorAll(".slider2 .list2 .item2");
let dots2 = document.querySelectorAll('.slider2 .dots2 li');
let prev2 = document.getElementById("prev2");
let next2 = document.getElementById("next2");

let active2 = 0;
let lengthItems2 = items2.length - 1;
let refreshSlider2 = setInterval(() => {next2.click()}, 7000);
function reloadSlider2(){
    let checkLeft2 = items2[active2].offsetLeft;
    list2.style.left = -checkLeft2 + 'px';

    let lastActiveDot2 = document.querySelector(".slider2 .dots2 li.active");
    lastActiveDot2.classList.remove('active');
    dots2[active2].classList.add('active');
    clearInterval(refreshSlider2);
    let refreshSlider2 = setInterval(() => {next.click()}, 10000)
}
prev2.onclick = function(){
    if(active2 -1 < 0){
        active2 = lengthItems2;

    }else{
        active2 = active2 -1;
    }
    reloadSlider2();
    clearInterval(refreshSlider);
}
next2.onclick = function(){
    if(active2 +1 > lengthItems2){
        active2 = 0;
    }else{
        active2 = active2 +1
    }
    reloadSlider2();
}

dots2.forEach((list, key) => {
    list.addEventListener('click', function(){
        active2 = key;
        reloadSlider2();
    })
})