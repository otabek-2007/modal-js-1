const btn = document.getElementById('modal-btn');
const close = document.getElementById('close-modal');
const modal = document.querySelector('.modal-main');

close.addEventListener('click', function () {
    modal.classList.remove('active')
    document.body.style.overflow = 'auto'
})

btn.addEventListener('click', function () {
    modal.classList.toggle('active')
    if (modal.classList.contains('active')) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
})

window.addEventListener('click', function (event) {
    const windowClass = event.target.classList.value;
    if (windowClass == 'modal-in') {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }

})