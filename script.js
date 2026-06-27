// ============================================================
// 1. ПЕРЕКЛЮЧЕНИЕ ТЕМЫ (СВЕТЛАЯ / ТЁМНАЯ) — иконка
// ============================================================
const themeBtn = document.getElementById('themeBtn');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');

    // Меняем иконку: 🌙 → ☀️ и наоборот
    if (document.body.classList.contains('dark')) {
        themeBtn.textContent = '☀️';
    } else {
        themeBtn.textContent = '🌙';
    }
});

// ============================================================
// 2. ПЛАВНАЯ ПРОКРУТКА ПО НАВИГАЦИИ (уже работает из-за scroll-behavior)
// ============================================================

// ============================================================
// 3. ПРИ КЛИКЕ НА КАРТОЧКУ — АЛЕРТ С НАЗВАНИЕМ БЛЮДА
//    Это заготовка под будущие "переходы на страницу товара"
// ============================================================
const cards = document.querySelectorAll('.menu-card');

cards.forEach(card => {
    card.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        alert(`🍽️ Вы выбрали: "${title}"\nСкоро здесь будет страница с деталями!`);
    });
});

console.log('🍳 Светланко Яйко — сайт готов! Приятного аппетита!');
