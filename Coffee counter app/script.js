'use strict'

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
function increment() {
    count += 1
    countEl.textContent = count
};

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}


const incrementBtn = document.getElementById('increment-btn');
const saveBtn = document.getElementById('save-btn');

incrementBtn.addEventListener('mouseover', () => {
  
  incrementBtn.style.backgroundColor = 'blue';
});

incrementBtn.addEventListener('mouseout', () => {
  incrementBtn.style.backgroundColor = '';
});

saveBtn.addEventListener('mouseover', () => {
  saveBtn.style.backgroundColor = 'blue';
});

saveBtn.addEventListener('mouseout', () => {
  saveBtn.style.backgroundColor = '';
});