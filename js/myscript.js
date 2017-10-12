var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var name_field = modal.querySelector("[name=name]");
var email = modal.querySelector("[name=e-mail]");
var text = modal.querySelector("[name=text-mail]");
var closeModal = document.querySelector('.close');
var form = modal.querySelector('form');
var submit = modal.querySelector(".button-2");
var error1 = modal.querySelector('.error-name');
var error2 = modal.querySelector('.error-email');
var error3 = modal.querySelector('.error-write');
var color1 = modal.querySelector('.color1');
var color2 = modal.querySelector('.color2');
var color3 = modal.querySelector('.color3');
var storage = localStorage.getItem("name_field");

link.addEventListener("click", function () {
    modal.classList.add("open");
    if(storage){
        name_field.value = storage;
        email.focus();
    } else {
        name_field.focus();
    };
    
});
closeModal.addEventListener('click', function () {
    modal.classList.remove('open');
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!name_field.value) {
        error1.classList.add("error");
        color1.classList.add("color");
    };
    if (!email.value) {
        error2.classList.add("error");
        color2.classList.add("color");
    };
    if (!text.value) {
        error3.classList.add("error");
        color3.classList.add("color");
    } else {
        localStorage.setItem("name", name_field.value);
        localStorage.setItem("e-mail", email_field.value);
    };
});

window.addEventListener('keydown',function(e) {
    if(e.keyCode ===27) {
        modal.classList.remove('open');
    }
})



