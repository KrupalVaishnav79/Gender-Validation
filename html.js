// Js for  Gender validation
var form = document.getElementById('roles');

form.addEventListener('change',function(e){
  if (e.target !== e.currentTarget) {
    var btn = document.querySelector('[type=submit]');
    btn.disabled = false;
  }
}, false);


const dateInput = document.getElementById('dateInput');

dateInput.addEventListener('change', (event) => {
  const selectedDate = event.target.value;
  document.getElementById(
    'display'
  ).innerHTML = `Selected date: ${selectedDate}`;
  console.log(selectedDate)

});