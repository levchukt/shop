let button = document.getElementById('button');

let navigation = document.getElementById('menu');

let close = document.getElementById('close_button');

button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
    
});

close_button.addEventListener('click', function () {
    navigation.classList.toggle('display-block');
})