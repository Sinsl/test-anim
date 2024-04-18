import './rellax.min.js';
// import 'https://unpkg.com/aos@2.3.1/dist/aos.js';
// // import './locomotive-scroll.js';

// AOS.init();

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const main = $('main')
const header = $('header')
const section1 = $('.section-1')
// const item2 = $('.item-2')

const bodyHeight = window.innerHeight;
console.log(bodyHeight)
// console.log(item2)

const projectBox = Array.from($$('.project-box'));
projectBox.forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
    })
})

const uslugyContainer = $('.uslugy-container');
const hBox = $('.uslugy-h-box')
const vBox = $('.uslugy-v-box')
const uslugy = $('.uslugy')

uslugyContainer.addEventListener('scroll', () => {
    uslugy.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    console.log(uslugyContainer.scrollTop)
    console.log(vBox.scrollTop)
    hBox.style = `margin-left: ${400 - uslugyContainer.scrollTop}px`;
})


// const rellaxS = new Rellax('.section', {
//     speed: -3,
//     center: false,
//     wrapper: null,
//     round: true,
//     vertical: true,
//     horizontal: false
//   });
// const rellax = new Rellax('.item-s1', {
//     speed: -2,
//     center: false,
//     wrapper: '.section-1',
//     round: true,
//     vertical: true,
//     horizontal: false
//   });

  const rellaxProcessPr = new Rellax('.rellax-project', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

  

//   document.addEventListener('scroll', () => {
//     const topItem2 = item2.getBoundingClientRect().top;
//     // console.log(topItem2)
//     // console.log(item2.offsetTop)
// })

VANTA.NET({
    el: ".research",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x8b9aa7,
    backgroundColor: 0xcfcfcf,
    points: 8.00,
    maxDistance: 21.00,
    spacing: 16.00
  })


