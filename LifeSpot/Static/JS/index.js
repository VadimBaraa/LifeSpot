
function filterContent(){ 
    let elements = document.getElementsByClassName('video-container');
    
    for (let i = 0; i <= elements.length; i++ ){
        let videoText = elements[i].querySelector(".video-title").innerText;
        if(!videoText.toLowerCase().includes(inputParseFunction() /* Захват переменной теперь происходит с помощью замыкания */  .toLowerCase())){
            elements[i].style.display = 'none';
        } else {
            elements[i].style.display = 'inline-block';
        }
    }
}


let checker = function ( newVisit ){
    // Проверяем, установлено ли значение возраста
    if(window.sessionStorage.getItem("userAge") === null) {
        // Если значение не установлено, запрашиваем возраст
        let age = prompt("Пожалуйста, введите ваш возраст:");
        window.sessionStorage.setItem("userAge", age);
        
        if(age >= 18 ){
            // Добавим проверку на первое посещение, чтобы не показывать приветствие
            if(newVisit && !window.sessionStorage.getItem("greeted")) {
                alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + new Date().toLocaleString() );
                window.sessionStorage.setItem("greeted", true); // Устанавливаем флаг, что приветствие показано
            }
        }
        else{
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com"
        }
    }
    // Если возраст уже установлен, ничего не делаем
}


 let logger = function () {
    console.log('Начало сессии: ' + window.sessionStorage.getItem("startDate") )
    console.log('Даныне клиента: ' + window.sessionStorage.getItem("userAgent") )
    console.log('Возраст пользователя: ' + window.sessionStorage.getItem("userAge"))
 }

function handleSession (logger, checker){
  
    // Проверяем дату захода и проставляем, если новый визит
    if(window.sessionStorage.getItem("startDate") == null){
        window.sessionStorage.setItem("startDate", new Date().toLocaleString())
    }
  
    // Проверяем userAgent и проставляем, если новый визит
    if(window.sessionStorage.getItem("userAgent") == null){
        window.sessionStorage.setItem("userAgent", window.navigator.userAgent)
    }
  
    // Проверяем возраст и проставляем, если новый визит
    if(window.sessionStorage.getItem("userAge") == null){
        let input = prompt("Пожалуйста, введите ваш возраст?");
        window.sessionStorage.setItem("userAge", input)
       
        /* Возраст отсутствовал в sessionStorage. Значит, это первый визит пользователя, и
         при прохождении проверки на возраст он увидит приветствие*/
        checker(true)
    }else{
  
        /* Пользователь заходит не первый раз, приветствие не показываем. */
        checker(false)
    }
   
    /* Вызываем переданную в качестве колл-бэка функцию логирования.
        передавать в качестве коллбека не обязательно, можно вызвать и напрямую, но мы добавили для повторения.
    */
    logger()
 }

 let sessionLog = function () {
    console.log('Начало сессии: ' + session.startDate)
    console.log('Данные клиента: ' + session.userAgent)
    console.log('Возраст пользователя: : ' + session.userAge)
 }

 