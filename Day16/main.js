var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function (manual){
    slides.forEach((slide) => {
        slide.classlist.remove('active');
        btns.forEach((btn) => {
            btn.classlist.remove('active');
        });
    });

    slides[manual].classlist.add('active');
    btns[manual].classlist.add('active');

};

btns.forEach((btn, i)) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
};

var repeat = funtion(activeClass){
    let active = document.getElementsByClassName('active'),
    let i = 1;

    var repeater = () => {
        setTimeout(function (){
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slide[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }

            if(i >= slides.length){
                return;
            }

            repeater();
        }, 2000)
    };
    repeater();
};

repeat();
