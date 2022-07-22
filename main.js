
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
fetch('https://mindicador.cl/api').then((response) => {
    return response.json();
}).then((dailyIndicators) => {
    document.getElementById("UF").innerHTML = 'VALOR UF $ ' + dailyIndicators.uf.valor;
}).catch((error) => {
    console.log('Requestfailed', error);
});

//MODAL
let modal = d.getElementById("myModal");

// Span para cerrar modal
let span = d.getElementsByClassName("close")[0];

// texto modal
let textModal = d.getElementsByClassName('modalTxt')

// cuando se da click, se abre modal 
btn.onclick = (empty) => {
    if(empty !== ""){
     modal.style.display = "block";
     let text = d.createElement('p')
     text.classList.add('modalTxt')
     text.innerHTML = `¡Gracias por cotizar con nosotros ${username.value} ${lastname.value} uno de nuestros ejecutivos se contactara al numero ${phone.value} y recibirás a tu correo ${email.value} más información 🏠! `
     // se agrega [0] para resolver error en appendChild()
     textModal[0].appendChild(text)
    }
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
//OBTENER VALORES DEL DOM PARA SLIDE 
let slider = d.querySelector('.slider-container');
console.log(slider)
let sliderIndividual = d.querySelectorAll('.content-slider');
console.log(sliderIndividual)
let counter = 1;
let width = sliderIndividual[0].clientWidth;
console.log(width)
let interval = 5000;

window.addEventListener('resize', () => {
    width = sliderIndividual[0].clientWidth;
})

setInterval(() => {
    slides()
}, interval);

const slides = () => {
    slider.style.transform = "translate("+(-width * counter)+"px)";
    slider.style.transition = 'transfrom .8s'
    counter++

    if (counter == sliderIndividual.length) {
        setTimeout(() => {
            slider.style.transform = 'traslate()0px';
            slider.style.transition = 'transform 0s';
            counter = 1;
        }, 1500);
    }
}

//DATE
const date = new Date();
const formatDate = (date, format) => {
    const map = {
        dd: date.getDate(),
        mm: date.getMonth() + 1,
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear()
        
    }
    console.log(formatDate(6))
    return format.replace(/dd|mm|yy|yyy/gi, matched => map[matched])
}
let dateToday = date.toLocaleDateString()
let dateP = d.getElementById('date');
let createEl = d.createElement('p');
createEl.classList.add('date')
createEl.innerHTML = `${dateToday}`
dateP.appendChild(createEl)
console.log(date.toLocaleDateString());