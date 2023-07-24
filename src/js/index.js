import '../sass/main.scss';
import { historicalPeriods } from '../ts/index';

import Swiper from 'swiper';

const swiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,

  pagination: {
    el: '.swiper-pagination-bullet',
    clickable: true,
  },
});

const startYearElement = document.querySelector('.interval-time__year--start');
const endYearElement = document.querySelector('.interval-time__year--end');

const buttons = Array.from(document.querySelectorAll('.interval-time__circle-button'));

// Сохраняем начальную активную кнопку
let activeButton = buttons.find(button => button.classList.contains('interval-time__circle-button--active'));

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonId = button.getAttribute('id');

    // Ищем соответствующий период в наших данных
    const currentPeriod = historicalPeriods.find(period => period.period.id === buttonId);

    if (currentPeriod) {
      startYearElement.textContent = currentPeriod.period.start;
      endYearElement.textContent = currentPeriod.period.end;
    }

    if (activeButton) {
      activeButton.classList.remove('interval-time__circle-button--active');
    }

    button.classList.add('interval-time__circle-button--active');
    activeButton = button;

    swiper.slideTo(buttons.indexOf(button));
  });
});


function getEventsForPeriod(id) {
  for (let period of historicalPeriods) {
    if (period.period.id === id) {
      return period.events;
    }
  }

  // Вернуть пустой массив, если не найдено совпадение
  return [];
}
