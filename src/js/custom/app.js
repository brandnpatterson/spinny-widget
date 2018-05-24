let animateOne = document.querySelector('.animate-one');
let animateTwo = document.querySelector('.animate-two');
let modalOne = document.querySelector('.modal-one');
let modalOneBackground = document.querySelector('.modal-one .modal-background');
let modalOneClose = document.querySelector('.modal-one .modal-close');
let modalTwo = document.querySelector('.modal-two');
let modalTwoBackground = document.querySelector('.modal-two .modal-background');
let modalTwoClose = document.querySelector('.modal-two .modal-close');

let oneClicked = false;
let twoClicked = false;

let changeState = (a, b, c) => {
    a.style.animationPlayState = c;
    b.style.animationPlayState = c;
};

let toggleModal = m => m.classList.toggle('is-active');

// mouseover events
animateOne.addEventListener('mouseover', () => changeState(animateTwo, animateOne, 'paused'));
animateTwo.addEventListener('mouseover', () => changeState(animateTwo, animateOne, 'paused'));
animateOne.addEventListener('mouseleave', () => {
    if (oneClicked !== true) {
        changeState(animateTwo, animateOne, 'running');
    }
});
animateTwo.addEventListener('mouseleave', () => {
    if (twoClicked !== true) {
        changeState(animateTwo, animateOne, 'running');
    }
});

// click events
animateOne.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'paused');
    toggleModal(modalOne);
    oneClicked = true;
});

modalOneBackground.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'running');
    toggleModal(modalOne);
    oneClicked = false;
});

modalOneClose.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'running');
    toggleModal(modalOne);
    oneClicked = false;
});

animateTwo.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'paused');
    toggleModal(modalTwo);
    twoClicked = true;
});

modalTwoBackground.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'running');
    toggleModal(modalTwo);
    twoClicked = false;
});

modalTwoClose.addEventListener('click', () => {
    changeState(animateTwo, animateOne, 'running');
    toggleModal(modalTwo);
    twoClicked = false;
});
