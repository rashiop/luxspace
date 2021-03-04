import { addClass, removeClass } from './utils-class';

const modalTriggers = document.getElementsByClassName('modal-trigger');
const modalWrapperClassNames = "fixed inset-0 bg-black opacity-35";
const modalContentClassNames = "bg-white p-0 md:p-6 z-10 rounded-md w-10/12 h-10/12 md:w-5/6 md:h-4/6";

for (let index = 0; index < modalTriggers.length; index++) {
  const e = modalTriggers[index];

  e.addEventListener('click', function() {
    const modalWrapper = document.createElement('div');
    const modalOverlay = document.createElement('div');

    // click area diluar modal aka gray area
    modalOverlay.addEventListener('click', function() {
      modalWrapper.remove()
    })

    addClass(modalWrapper, 'fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen');

    addClass(modalOverlay, modalWrapperClassNames);
    const modalContent = document.createElement('div');
    modalContent.innerHTML = e.attributes['data-content'].value;
    addClass(modalContent, modalContentClassNames);
    modalWrapper.append(modalOverlay);
    modalWrapper.append(modalContent);
    document.body.append(modalWrapper);
  })
}