
//FORM VALIDATION
const d = document
//function get all id elements
let id = (id) => d.getElementById(id);
//function get all class elements
let classes = (classes) => d.getElementsByClassName(classes);
let number = (number) => d.getElementsByClassName(number)
let text = (text) => d.getElementsByClassName(text)
let btn = d.getElementById("btn");

// VARIABLES DONDE SE ALMACENAN LOS ID Y CLASES DE LAS FUNCIONES ID Y CLASSES
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

//EVENTO PARA MOSTRAR INFORMACION AL USURAIO DE INPUT VACIOS
form.addEventListener('submit', (e) => {
    e.preventDefault()
    validation(username, 0, 'debes ingresar tu nombre');
    validation(lastname, 1, 'debes ingresar tu apellido');
    validation(email, 2, 'debes ingresar tu correo');
    validation(phone, 3, 'debes ingresar telefono');
    validation(age,4, 'debes ingresar tu edad');
})

//FUNCION DE VALIDACIÓN CAMPOS VACIOS
const validation = (id, index, message) => {
    if(id.value.trim() === ''){
        errorMsg[index].innerHTML = message
        id.style.border = "2px solid red";
    }else{
        id.style.border = "2px solid green";
        errorMsg[index].innerHTML = '';
    }
    
}

//UF DIARIA API
fetch('https://mindicador.cl/api').then(function(response) {
    return response.json();
}).then(function(dailyIndicators) {
    document.getElementById("UF").innerHTML = 'VALOR UF $ ' + dailyIndicators.uf.valor;
}).catch(function(error) {
    console.log('Requestfailed', error);
});

//MODAL
let modal = d.getElementById("myModal");

// Span para cerrar modal
let span = d.getElementsByClassName("close")[0];

// texto modal
let textModal = d.getElementsByClassName('modalTxt')

// cuando se da click, se abre modal 
btn.onclick = () => {
     modal.style.display = "block";
     let text = modal.createElement('p')
     text.innerHTML = `Gracias ${username}`
     textModal.appendChiled(text)
     console.log(text)
}
// cuando el usuario da click a (x), cierra el modal
span.onclick = () => {
  modal.style.display = "none";
}
// cunado el usuario da click fuera del modal se cierra
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//SLIDE BANNER
const slides = d.querySelectorAll('.imgBanner');
const nextBtn = d.querySelector('.nextBtn');
const prevBtn = d.querySelector('.prevBtn');

slides.forEach((slide, index) => {
    slide.style.transform = `${index * 100}%`
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
