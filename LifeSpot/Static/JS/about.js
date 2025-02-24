
async function loadContent() {
    try {
        const sliderResponse = await fetch('../Views/Shared/slider.html');
        if (!sliderResponse.ok) throw new Error('Ошибка загрузки слайдера');
        const sliderContent = await sliderResponse.text();

        document.getElementById('slider-placeholder').innerHTML = sliderContent;

        // Инициализируем Swiper после загрузки слайдера
        const swiper = new Swiper('.swiper-container', {
            loop: true,
            slidesPerView: 1, // Показывать только один слайд
            spaceBetween: 1000, // Расстояние между слайдами
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    } catch (error) {
        console.error('Ошибка при загрузке содержимого:', error);
    }
}

window.onload = loadContent;


function Comment() {
    // Запросим имя
    this.author = prompt("Как вас зовут ?")
    if(this.author == null){
        this.empty = true
        return
    }
  
    // Запросим текст
    this.text = prompt("Оставьте отзыв")
    if(this.text == null){
        this.empty = true
        return
    }
  
    // Сохраним текущее время
    this.date = new Date().toLocaleString()
 }

function getReview() {
    // Создадим объект
    let review = {}
   
    // Сохраним свойство имени
    review["userName"] = prompt("Как вас зовут ?")
    if(review["userName"] == null){
        return
    }
   
    // Сохраним текст отзыва
    review["comment"] = prompt("Напишите свой отзыв")
    if(review["comment"] == null){
        return
    }
   
    // Сохраним текущее время
    review["date"] = new Date().toLocaleString()

    review["rate"] = 0;
   
    // Добавим на страницу
    writeReview(review)
 }

 
 const writeReview = review => {
    let likeCounter = '';

    // Если публикуется отзыв - добавляем ему кнопку с лайками.
    if (review.hasOwnProperty('rate')) {
        // Генерим идентификатор комментария.
        let commentId = Math.random();
        // Для кнопки лайков добавляем: идентификатор, атрибут onclick для передачи идентификатора в функцию, значок лайка, и само значение счётчика отделяем пробелом
        likeCounter += `<button id="${commentId}" class="like-button" onclick="addLike(this)">❤️ ${review.rate}</button>`;
    }
    
    // Запишем результат 
    document.getElementsByClassName('reviews')[0].innerHTML += `
        <div class="review-text">
            <p><i><b>${review['author']}</b> ${review['date']} ${likeCounter}</i></p>
            <p>${review['text']}</p>
        </div>`;
}

const addLike = button => {
    // Получаем текущее количество лайков из текста кнопки
    let currentCount = parseInt(button.innerText.split(' ')[1]);
    
    // Проверяем, добавлен ли лайк
    if (button.classList.contains('liked')) {
        // Если лайк уже добавлен, убираем его
        currentCount -= 1; // Уменьшаем счетчик на 1
        button.classList.remove('liked'); // Убираем класс, указывающий на лайк
    } else {
        // Если лайк не добавлен, добавляем его
        currentCount += 1; // Увеличиваем счетчик на 1
        button.classList.add('liked'); // Добавляем класс, указывающий на лайк
    }
    
    // Обновляем текст кнопки с новым количеством лайков
    button.innerText = `❤️ ${currentCount}`;
}

 function addComment() {
    let comment = new Comment()
   
    // проверяем, успешно ли юзер осуществил ввод
    if(comment.empty){
        return;
    }
   
    // Запросим, хочет ли пользователь оставить полноценный отзыв или это будет обычный комментарий
    let enableLikes = confirm('Разрешить пользователям оценивать ваш отзыв?')
   
    if(enableLikes){
        // Создадим для отзыва новый объект из прототипа - комментария
        let review = Object.create(comment)
        // и добавим ему нужное свойство
        review.rate = 0;
  
        // Добавляем отзыв с возможностью пользовательских оценок
        writeReview(review)
    } else{
        // Добавим простой комментарий без возможности оценки
        writeReview(comment)
    }
 }

 const swiper = new Swiper('.swiper-container', {
    // Настройки слайдера
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

