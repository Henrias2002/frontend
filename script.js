const openButton = document.querySelector('#open');
const closeButton = document.querySelector('#close');
const popupWrapper = document.querySelector('.popup-wrapper')

openButton.addEventListener('click',(e)=>{
    popupWrapper.classList.add('show')
})


closeButton.addEventListener('click',(e)=>{
    popupWrapper.classList.remove('show')
})


console.log(popupWrapper)