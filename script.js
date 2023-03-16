// Toogle Class 
const navbarNav = document.querySelector('.menu-nav');

// Menu ketika di click
document.querySelector('#menu').onclick = () =>{
    navbarNav.classList.toggle('active')
};
// delete Navigation-
const menu =document.querySelector('#menu');

document.addEventListener('click' ,function(e){
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
})
// animation on parralax start

const imageWrapper = document.querySelector('.image-wraper')
const imageItems = document.querySelectorAll('.image-wraper > *')
const imageLength = imageItems.length
const perView = 1
let totalScroll = 0
const delay = 5000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wraper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '.6s'
}
// animation on parralax End
