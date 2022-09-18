const increment = document.querySelector('.increment'),start = document.querySelector('#start')
, decrement = document.querySelector('.decrement'),reset = document.querySelector('.reset');
let a = 0;
increment.addEventListener('click',function(){
    a++;
    start.innerHTML = a
});
decrement.addEventListener('click',function(){
    a--;
    start.innerHTML = a
})
reset.addEventListener('click',function(){
    a=0;
    start.innerHTML = a
})
