

const carousel_container = document.querySelector('.carousel_container');
const left_arrow = document.querySelector('.left_arrow');
const right_arrow = document.querySelector('.right_arrow');
let index = 0;
let current_X = 0;
right_arrow.addEventListener('click', () => {
    if(index > -2){
        index -= 1;
        current_X -= 305
        carousel_container.style.transform = `translateX(${current_X}px)`  
    }else{
        current_X = 610;
        index = 2;
        carousel_container.style.transform = `translateX(${current_X}px)`  
    }
    console.log(index);
})

left_arrow.addEventListener('click', () => {
    if(index < 2){
        index += 1;
        current_X += 305
        carousel_container.style.transform = `translateX(${current_X}px)`   
    }else{
        current_X = -610;
        index = -2
        carousel_container.style.transform = `translateX(${current_X}px)`  
    }
    console.log(index);
})