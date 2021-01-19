
// const scroll = () => {
const scroll =  document.querySelector('.welcome');
console.log(scroll);
addEventListener('scroll', (event) => {
console.log('coucou')
scroll.style.display = "block"
scroll.classList.add('animated', 'fadeInRight')
},{ once: true });
// };

const scroll2 = document.querySelector('.me');
window.addEventListener('scroll', (event) => {
  if (document.documentElement.scrollTop > 400) {
    console.log('test')
    scroll2.style.display = "block"
    scroll2.classList.add('animated', 'fadeInDown')
  }
});



// const scroll2 = document.querySelector('.bio');
// console.log(scroll2);
// addEventListener('scroll', (event) => {
// console.log('coucou')
// if scroll2.
// scroll2.style.display = "block"
// scroll2.classList.add('animated', 'fadeInRight')
// },{ once: true });



export {scroll};
