// Получим коллекцию всех элементов страницы
let elements = document.getElementsByTagName('*');
 
// Выведем результат в уведомление
alert(`Количество элементов на странице:  ${elements.length}`);

const saveInput = function() {
    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();
   
    // Покажем окно с прошлым и новым значением
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);
   
    // Сохраним новое значение в контекст
    this.lastInput = currentInput;
 }

// Пример кода для добавления интерактивности (скрытие/показ подкатегорий)
document.querySelectorAll('.node h2, .node h3').forEach(header => {
    header.addEventListener('click', () => {
        const ul = header.nextElementSibling;
        if (ul.style.display === 'none' || ul.style.display === '') {
            ul.style.display = 'block';
        } else {
            ul.style.display = 'none';
        }
    });
});

var arrowsDrawer1 = $cArrows('#Project-Manager');
  
// 4. Рисуем стрелки .arrow(from, to)
arrowsDrawer1.arrow('.punct', '.sub');