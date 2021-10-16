document.querySelector('.profile__edit-button')
.addEventListener('click', function() {
    console.log(document.querySelector('.popup').classList);
    document.querySelector('.popup').classList.add('popup_opened');
}, false);

document.querySelector('.popup__close-button')
.addEventListener('click', function() {
    console.log(document.querySelector('.popup').classList);
    document.querySelector('.popup').classList.remove('popup_opened');
}, false);

// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('#nameInput');
let jobInput = formElement.querySelector('#jobInput');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); 
    // Выберите элементы, куда должны быть вставлены значения полей
    let profileTitle = document.querySelector('.profile__title');
    let profileSubtitle = document.querySelector('.profile__subtitle');
    // Вставьте новые значения с помощью textContent
    profileTitle.textContent = nameInput.value;
    profileSubtitle.textContent = jobInput.value;

    document.querySelector('.popup').classList.remove('popup_opened');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 