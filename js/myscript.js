var link = document.querySelector('.link');
var modal = document.querySelector(".modal");
var closeModal = document.querySelector('.close')

link.addEventListener("click", function(){
    modal.classList.add("open");
});

closeModal.addEventListener('click', function(){
    modal.classList.remove('open')
});