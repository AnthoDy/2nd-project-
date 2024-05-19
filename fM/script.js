let next =document.querySelector(".next")
let prev = document.querySelector(".prev")

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slider').appendChild(items[0])
})
prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item');
    let lastItem = items[items.length - 1]; 
    let slider = document.querySelector('.slider');
    slider.insertBefore(lastItem, slider.firstChild); 
});
