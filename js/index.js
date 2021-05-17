// Зарегистрировать обработчик приложения для возможности его рабты без подключения к сети.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/game/sw.js')
    .then(() => { console.log('Обработчик приложения зарегистрирован'); });
}

// Код управления установкой приложения на компьютер.
let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
  // Предотвратить отображение приглашения в Chrome 67 и ниже.
  e.preventDefault();
  // Отложить обработку события, чтобы оно сработало позже.
  deferredPrompt = e;
  // Обновить интерфейс, чтобы информировать пользователя о том, что он теперь может установить приложение.
  addBtn.style.display = 'block';

  // Обработчик нажатия на кнопку установки приложения.
  addBtn.addEventListener('click', () => {
    // Скрыть интерфейс. показывающий кнопку установки приложения.
    addBtn.style.display = 'none';
    // Показать приглашение пользователю.
    deferredPrompt.prompt();
    // Подождать, пока пользователь установит приложение.
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Пользователь подтвердил установку игры');
      } else {
        console.log('Пользователь отказался от установки игры');
      }
      deferredPrompt = null;
    });
  });
});
