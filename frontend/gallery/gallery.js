
const carousel_container = document.querySelector('.carousel_container');
const left_arrow = document.querySelector('.left_arrow');
const right_arrow = document.querySelector('.right_arrow');
const main_gallery_container = document.querySelector('.main_gallery_container');
const items = document.querySelectorAll('.main_gallery_img');
const main_gallery = document.querySelector('.main_gallery');
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

// 무한 스크롤

let img_number = 11;

const addNewContent = () => {
    let division = document.createElement('div');
    division.classList.add('main_gallery_division');

    const make_element = () => {
        Array.from({length : 5}, () => {
            const image = new Image();
            let element_wrapper = document.createElement('span');
            element_wrapper.classList.add('main_gallery_img');
            image.src = `../../image/gallery_img/IMG_000${img_number}.JPG`;
            element_wrapper.appendChild(image);
            division.appendChild(element_wrapper);
            img_number += 1
        })
        
        main_gallery_container.appendChild(division);
        main_gallery.appendChild(main_gallery_container);
    }
    make_element()
}   



const ioCallback = (entries, io) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        io.unobserve(entry.target);
        setTimeout(() => {
        console.log('hello');
          addNewContent();
          observeLastItem(io, document.querySelectorAll('.items.main_gallery_img'));
        }, 2000);
      }
    });
  };
  
  const observeLastItem = (io, items) => {
    const item = document.querySelectorAll('.main_gallery_img');
    const lastItem = item[item.length - 1];
    io.observe(lastItem);
    console.log(item);
  };
  
  const io = new IntersectionObserver(ioCallback, { threshold: 0.7 });
  observeLastItem(io, main_gallery);