const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnclosemodal = document.querySelector('.close-modal');
const btnsopenmodel = document.querySelectorAll('.show-modal');

// console.log(btnsopenmodel);
const openmodel = function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
for (let i = 0; i < btnsopenmodel.length; i++)
    btnsopenmodel[i].addEventListener('click', openmodel);

const closemodel = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}
btnclosemodal.addEventListener('click', closemodel);
overlay.addEventListener('click', closemodel);

document.addEventListener('keydown', function (e) {
    console.log(e.key);

    if (e.key === 'Escape') {
        if (!modal.classList.contains('hidden')) {
            closemodel();
        }
    }
})

