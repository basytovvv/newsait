document.getElementById('menu-icon').onclick = function() {
    var dropdownMenu = document.getElementById('dropdown-menu');
    if (dropdownMenu.style.display === 'none' || dropdownMenu.style.display === '') {
        dropdownMenu.style.display = 'block';
    } else {
        dropdownMenu.style.display = 'none';
    }
};
//корзина
// Массив для хранения товаров в корзине
let cart = [];

// Функция добавления товара в корзину
function addToCart(productName, productPrice) {
    const product = { name: productName, price: productPrice };
    cart.push(product);
    updateCartModal();
    alert(`${productName} добавлен(а) в корзину.`);
}

// Функция обновления содержимого корзины
function updateCartModal() {
    const cartItemsContainer = document.getElementById('cart-items');
    const checkoutButton = document.getElementById('checkout-button');

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Корзина пока пуста</p>';
        checkoutButton.style.display = 'none'; // Скрыть кнопку оформления
        return;
    }

    cartItemsContainer.innerHTML = cart
        .map((item, index) => `
            <div>
                <p>${index + 1}. ${item.name} - ${item.price} сом</p>
                <button onclick="removeFromCart(${index})">Удалить</button>
            </div>
        `)
        .join('');

    checkoutButton.style.display = 'block'; // Показать кнопку оформления
}

// Функция удаления товара из корзины
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartModal();
}

// Логика открытия и закрытия корзины
document.getElementById('cart-icon').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'block';
});

document.getElementById('close-cart-modal').addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
});

// Логика оформления заказа
const checkoutButton = document.getElementById('checkout-button');
const checkoutModal = document.getElementById('checkout-modal');
const checkoutForm = document.getElementById('checkout-form');

checkoutButton.addEventListener('click', () => {
    document.getElementById('cart-modal').style.display = 'none';
    checkoutModal.style.display = 'block';
});

document.getElementById('close-checkout-modal').addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

// Обработка отправки формы
checkoutForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Отключить стандартное поведение отправки формы

    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;

    // Вывести данные в консоль (в реальном приложении — отправить на сервер)
    console.log('Адрес:', address);
    console.log('Телефон:', phone);

    alert('Заказ успешно оформлен!');
    checkoutModal.style.display = 'none';

    // Очистить корзину после оформления заказа
    cart = [];
    updateCartModal();
});

document.getElementById('login-icon').onclick = function() {
    document.getElementById('login-modal').style.display = 'block';
};

document.getElementById('close-login-modal').onclick = function() {
    document.getElementById('login-modal').style.display = 'none';
};

window.onclick = function(event) {
    var cartModal = document.getElementById('cart-modal');
    var loginModal = document.getElementById('login-modal');
    if (event.target === cartModal) {
        cartModal.style.display = 'none';
    }
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
};

function searchFunction() {
    window.location.href = "search.html"; //поиск
}

function registerFunction() {
    //регистрация
    alert("Регистрация");
}
let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}
//обратная связь
const feedbackForm = document.getElementById('feedback-form');

feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('feedback-name').value;
    const message = document.getElementById('feedback-message').value;

    //консоль
    console.log('Имя:', name);
    console.log('Сообщение:', message);

    alert('Спасибо за ваш отзыв! Мы свяжемся с вами в ближайшее время.');

    //сброс
    feedbackForm.reset();
});
