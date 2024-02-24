function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('#controls input');
  const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesContainer = document.querySelector('#boxes');

  createBtn.addEventListener('click', createBoxes);
  destroyBtn.addEventListener('click', destroyBoxes);

  function createBoxes() {
    const amount = input.valueAsNumber;
    if (amount >= 1 && amount <= 100) {
      const boxes = [];
      let size = 30;

      for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.marginBottom = '10px';
        boxes.push(box);
        size += 10;
      }

      boxesContainer.innerHTML = '';
      boxesContainer.append(...boxes);
    } else {
      alert('Будь ласка, введіть число від 1 до 100.');
    }

    input.value = '';
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = '';
  }
});
