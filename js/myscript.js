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

link.addEventListener("click", function () {
    modal.classList.add("open");
    name_field.focus();
});
closeModal.addEventListener('click', function () {
    modal.classList.remove('open')
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!name_field.value) {
        error1.classList.add("error")
    };
    if (!email.value) {
        error2.classList.add("error")
    };
    if (!text.value) {
        error3.classList.add("error")
    };

});



