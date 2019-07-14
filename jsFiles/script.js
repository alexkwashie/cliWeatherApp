 
 const input1 = document.querySelector('.change-location');

input1.addEventListener('submit', e => {
    e.preventDefault();
    console.log(input1.value);
});