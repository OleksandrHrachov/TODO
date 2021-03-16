const mode = document.querySelector('.icon-mode');
const container = document.querySelector('.container');


mode.addEventListener('click', function () {

  container.classList.toggle('light');
  // mode.classList.remove('icon-mode-dark');
  // mode.classList.add('icon-mode-light');
  

});



const input = document.querySelector('#input');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

document.addEventListener('keydown', function (event) {

  if(event.code == 'Enter'){
  
    if(input.value === ''){
      return
    };

    createDeleteElemets(input.value);
    input.value = '';
      
  }

});

function createDeleteElemets (value) {

  i++;
  
  const li = document.createElement('li');
  const closeBtn = document.createElement('button');
  
  li.textContent = value;
  
  closeBtn.className = 'cross';
  li.appendChild(closeBtn);

  closeBtn.addEventListener('click', function (event) {

    i--
    total.textContent = i
    result.removeChild(li);
    
  });

  li.addEventListener('click', function (event) {

    li.classList.toggle('done');

  });
  
  total.textContent = i

  result.appendChild(li);

};