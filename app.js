let input1 = document.getElementById('input1');
let input2 = document.getElementById('input2');
let swap = document.getElementById('swap-img');
let div1 = document.getElementById('left-div');
let div2 = document.getElementById('right-div');
let cont = document.getElementById('container');
let inputText1;
let inputText2;


input1.addEventListener('input', () => {
    inputText1 = input1.value
    input2.value = (input1.value * 1.8) + 32;
})

input2.addEventListener('input', () => {
    inputText2 = input2.value;
    input1.value = (inputText2 - 32) * 5 / 9;

})

swap.addEventListener('click', () => {
    cont.insertAdjacentElement('afterbegin', div2)
    cont.insertAdjacentElement('beforeend', div1)
})


