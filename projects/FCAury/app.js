window.onload = ()=>{
 
    const carousel = document.querySelector('.carousel');
    let sliders = [];

    let slideIndex = 0;

const createSlide = () => {
    if(slideIndex >= movies.length){
        slideIndex = 0
    }

    //DOM elements
    let slide = document.createElement('div');
    let imgElement = document.createElement('img');

    //attaching elements
    imgElement.appendChild(document.createTextNode(''));
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    //setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++

    //setting elements classname
    slide.className = 'slider';
    sliders.push(slide);

    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`
    }
}

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 6000)

//card sliders

let cardContainers  = document.querySelectorAll('.card-container');
let preBtns = document.querySelectorAll('.pre-btn');
let nxtBtns = document.querySelectorAll('.nxt-btn');

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click', () =>{
        item.scrollLeft += containerWidth - 200;
    })

    preBtns[i].addEventListener('click', () =>{
        item.scrollLeft -= containerWidth + 200;
    })
})





let cake = document.querySelector('.cake-screen');
let first = document.querySelector('.first');
let second = document.querySelector('.cake-title');

cake.addEventListener('click', ()=>{
    cake.style.opacity = 0;
    first.style.opacity = 1;
    first.style.display = 'block';
    setTimeout(() => {
        cake.style.display = 'none';
    }, 3000);
})

second.style.opacity = 1;

}

