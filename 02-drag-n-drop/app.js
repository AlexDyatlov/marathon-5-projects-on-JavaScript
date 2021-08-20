const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

placeholders.forEach(placeholder => {
  placeholder.addEventListener('dragover', dragOver); // вызов над элементом placeholder
  placeholder.addEventListener('dragenter', dragEnter); // вызов когда попадаем в placeholder
  placeholder.addEventListener('dragleave', dragLeave); // вызов когда перетащили и вышли с placeholder
  placeholder.addEventListener('drop', dragDrop); // когда отпустили
});

function dragStart(e) {
  e.target.classList.add('hold');
  setTimeout(() => {
    e.target.classList.add('hide')
  }, 0)
};

function dragEnd(e) {
  e.target.className = 'item';
};

function dragOver(e) {
  e.preventDefault();
};

function dragEnter(e) {
  e.target.classList.add('hovered');
};

function dragLeave(e) {
  e.target.classList.remove('hovered');
};

function dragDrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
};

