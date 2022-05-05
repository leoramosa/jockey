let introt = document.querySelector('.introt');
let logot = document.querySelector('.logot');
let logoSpan = document.querySelectorAll('.logo-parts');

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(()=> {
        logoSpan.forEach((span, index) => {
          setTimeout(() => {
              span.classList.add('active');
          }, (index + 1) * 100); 
        });

        setTimeout(() => {
          logoSpan.forEach((span, index)=> {
              setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
              }, (span +1) * 50);
          });
        }, 500);

        setTimeout(()=>{
          introt.style.top = '-100vh';
        }, 600);
    });
});