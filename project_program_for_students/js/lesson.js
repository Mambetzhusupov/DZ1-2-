//phone checker
const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.addEventListener('click',() => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'OK'
        phoneSpan.style.color = 'green'
    }
    else {
        phoneSpan.innerHTML = 'NOT OK'
        phoneSpan.style.color = 'red'
    }
})

//tab slider
const tabs = {
    contentBlocks: document.querySelectorAll('.tab_content_block'),
    items: document.querySelectorAll('.tab_content_item'),
    parent: document.querySelector('.tab_content_items'),
    currentIndex: 0,

    hideAll: () => {
        tabs.contentBlocks.forEach((block) => (block.style.display = 'none'));
        tabs.items.forEach((item) => item.classList.remove('tab_content_item_active'));
    },

    show: (index = 0) => {
        tabs.contentBlocks[index].style.display = 'block';
        tabs.items[index].classList.add('tab_content_item_active');
    },

    handleItemClick: (event) => {
        const clickedItem = event.target;
        if (clickedItem.classList.contains('tab_content_item')) {
            tabs.hideAll();
            tabs.show(Array.from(tabs.items).indexOf(clickedItem));
        }
    },

    changeTab: () => {
        tabs.currentIndex = (tabs.currentIndex + 1) % tabs.items.length;
        tabs.hideAll();
        tabs.show(tabs.currentIndex);
    },

    init: () => {
        tabs.hideAll();
        tabs.show();
        tabs.parent.addEventListener('click', tabs.handleItemClick);
        setInterval(tabs.changeTab, 3000); // Изменил на 3 секунды
    },
};

tabs.init();

const modal = document.querySelector('.modal');
const modalBtn = document.querySelector('#btn-get');
const modalClose = document.querySelector('.modal_close');

const toggleModal = (show) => {
    modal.style.display = show ? 'block' : 'none';
    document.body.style.overflow = show ? 'hidden' : '';
};

const openModal = () => {
    toggleModal(true);
};

const closeModal = () => {
    toggleModal(false);
};

setTimeout(openModal, 10000);

modalBtn.onclick = openModal;
modalClose.onclick = closeModal;
modal.onclick = (event) => (event.target === modal) && closeModal;

let modalShown = false;

const scrollCheck = () => {
    if (!modalShown && window.innerHeight + window.scrollY >= document.body.scrollHeight - 1) {
        openModal();
        modalShown = true;
        window.removeEventListener('scroll', scrollCheck);
    }
};

window.addEventListener('scroll', scrollCheck);
//converter
const somInput = document.getElementById('som');
const usdInput = document.getElementById('usd');
const eurInput = document.getElementById('eur');

somInput.addEventListener('input', () => convertCurrency('som'));
usdInput.addEventListener('input', () => convertCurrency('usd'));
eurInput.addEventListener('input', () => convertCurrency('eur'));

function convertCurrency(fromCurrency) {
    const somValue = parseFloat(somInput.value) || 0;
    const usdValue = parseFloat(usdInput.value) || 0;
    const eurValue = parseFloat(eurInput.value) || 0;

    const somToUsdRate = 0.011;
    const somToEurRate = 0.009;

    if (fromCurrency === 'som') {
        usdInput.value = (somValue * somToUsdRate).toFixed(2);
        eurInput.value = (somValue * somToEurRate).toFixed(2);
    } else if (fromCurrency === 'usd') {
        somInput.value = (usdValue / somToUsdRate).toFixed(2);
        eurInput.value = (usdValue / somToUsdRate * somToEurRate).toFixed(2);
    } else if (fromCurrency === 'eur') {
        somInput.value = (eurValue / somToEurRate).toFixed(2);
        usdInput.value = (eurValue / somToEurRate / somToUsdRate).toFixed(2);
    }
}
//CARDS
const cards = document.querySelector('.card');
const btnNext = document.querySelector('#btn-next');
const btnPrev = document.querySelector('#btn-prev');

let count = 1;

function loadCardData(cardNumber) {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardNumber}`)
.then(response => response.json())
        .then(data => {
            cards.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
            `;
        });
}

function updateCard(direction) {
    count += direction;
    if (count > 200) {
        count = 1;
    } else if (count < 1) {
        count = 200;
    }
    loadCardData(count);
}

loadCardData(count);

btnNext.addEventListener('click', () => updateCard(1));
btnPrev.addEventListener('click', () => updateCard(-1));

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => console.log(data));


//await

