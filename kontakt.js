const form = document.getElementById('contactForm');
const submittedData = document.getElementById('submittedData');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  const table = document.querySelector('#submittedData table');
  const row = table.insertRow(-1);
  Object.values(data).forEach(value => {
    const cell = row.insertCell();
    cell.textContent = value;
  });

  submittedData.style.display = 'block';
  form.reset();
});