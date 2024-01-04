// ดึงฟอร์ม
const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-input]');

form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (input.value.trim() === '') {
      form.classList.add('error');
    } else {
      form.classList.remove('error');
    }
  });