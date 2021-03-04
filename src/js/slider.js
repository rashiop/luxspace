import { addClass, removeClass } from './utils-class';

const sliders = document.getElementsByClassName('slider');

for (let sliderIdx = 0; sliderIdx < sliders.length; sliderIdx++) {
  const slider = sliders[sliderIdx];

  const items = slider.querySelectorAll('.slider .item');
  const preview = slider.querySelector('div > .preview');

  items.forEach((itemTrigger) => {
    itemTrigger.addEventListener('click', function () {
      const dataImg = this.attributes['data-img'].value;

      for (let itemIdx = 0; itemIdx < items.length; itemIdx++) {
        const triggerNeedToRemoved = items[itemIdx];
        removeClass(triggerNeedToRemoved, 'selected');
      }

      addClass(itemTrigger, 'selected');
      preview.querySelector('img').src = dataImg;
    });
  });
}
