
// const scroll = () => {
const scroll =  document.querySelector('.welcome');
console.log(scroll);
addEventListener('scroll', (event) => {
console.log('coucou')
scroll.style.display = "block"
scroll.classList.add('animated', 'fadeInRight')
},{ once: true });
// };



export {scroll};
