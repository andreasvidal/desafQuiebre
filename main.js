//SLIDE BANNER
const d = document
const slides = d.querySelectorAll('.slide');
const nextBtn = d.querySelector('.nextBtn');
const prevBtn = d.querySelector('.prevBtn');

slides.forEach(function(slide, index){
    slide.style.left = `${index * 100}%`
});

let counter = 0;
nextBtn.addEventListener('click',  (e) =>{
    e.preventDefault()
    counter++;
    carousel()
})

prevBtn.addEventListener('click',  (e) =>{
    e.preventDefault()
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
    slides.forEach( (slide) => {
        slide.style.transform = `traslatex(-${counter * 100}%)`;
    });
}
prevBtn.style.display = 'none';

//FORM VALIDATION

let id = (id) => d.getElementById(id);
let classes = (classes) => d.getElementsByClassName(classes);
let number = (number) => d.getElementsByClassName(number)

let username = id('username'),
lastname = id('lastname'),
email = id('email'),
phone = id('phone'),
age = id('age'),
form = id('formId'),
errorMsg = classes('error');

//VALIDACIÓN CAMPOS SOLO TEXTO O NUMEROS
const onlyNum = /[^0-9]/g;
const onlyStrings = /[^a-zA-ZÑñáéíóúÁÉÍÓÚ\s]*$/g;

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validation(username, 0, 'debes ingresar tu nombre');
    validation(lastname, 1, 'debes ingresar tu apellido');
    validation(email, 2, 'debes ingresar tu correo');
    validation(phone, 3, 'debes ingresar telefono');
    validation(age,4, 'debes ingresar tu edad');
})

form.addEventListener('keyup', (e) => {
    e.preventDefault()
    validNumber (phone, 3, 'solo numeros')
    validNumber (age, 4, 'solo numeros')
})

//VALIDACIÓN CAMPOS VACIOS
const validation = (id, index, message) => {
    if(id.value.trim() === ''){
        errorMsg[index].innerHTML = message
        id.style.border = "2px solid red";
    }else{
        id.style.border = "2px solid green";
        errorMsg.innerHTML = ''
    }
    
}


const validNumber = (number, index, message) => {
    if( number.value!== onlyNum ) {
        console.log(id.value !== onlyNum)
        errorMsg[index].innerHTML = message
    }else{
        return true;
    }
}


const validStrings = (number, index, message) => {
    if( number.value!== onlyNum ) {
        console.log(id.value !== onlyStrings)
        errorMsg[index].innerHTML = message
    }else{
        return true;
    }
}


