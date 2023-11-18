let modalShown = false;

function showModal() {
    alert("Модальное окно!");
    modalShown = true;
}

function checkModal() {
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    if (scrollPosition + window.innerHeight >= document.documentElement.scrollHeight && !modalShown) {
        showModal();
        window.removeEventListener('scroll', checkModal);
    }
}

window.addEventListener('scroll', checkModal);

function delayedModal() {
    alert("Модальное окно через 10 секунд!");
    window.removeEventListener('scroll', checkModal);
}

setTimeout(delayedModal, 10000);