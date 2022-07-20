//SLIDE BANNER
const d = document
const slides = d.querySelectorAll('.slide');
const nextBtn = d.querySelector('.nextBtn');
const prevBtn = d.querySelector('.prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener('click', function (){
    counter++;
    carousel()
})

prevBtn.addEventListener('click', function (){
    counter--;
    carousel()
})

const carousel = () => {
    if (counter < slides.length - 1){
        nextBtn.style.display = 'block';
    }else {
        nextBtn.style.display = 'none';
    }
    if (counter > 0){
        prevBtn.style.display = 'block';
    }else {
        prevBtn.style.display = 'none';
    }
    slides.forEach(function (slide){
        slide.style.transform = `traslatex(-${counter * 100}%)`;
    });
}
prevBtn.style.display = 'none';

//FORM VALIDATION

