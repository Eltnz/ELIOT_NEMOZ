
// const scroll = () => {
const scroll =  document.querySelector('.welcome');
console.log(scroll);
addEventListener('scroll', (event) => {
console.log('coucou')
},{ once: true });
// };



export {scroll};
