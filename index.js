'use strict';
{
  function play(){
    setTimeout(()=>{
      images[currentIndex].classList.remove('current');
      currentIndex++;
      if(currentIndex>images.length-1){
        currentIndex=0;
      }
      images[currentIndex].classList.add('current');
      play();
    },5000);
  }

  const images = document.querySelectorAll('.top-img img');
  let currentIndex=0;

  play();
}

{
  let nav = document.querySelector('#navArea');
  let btn = document.querySelector('.toggle-btn');
  let mask = document.querySelector('#mask');
  let end = document.querySelector('#end');

  btn.onclick = () =>{
    nav.classList.toggle('open');
  }
  end.onclick = () =>{
    nav.classList.toggle('open');
  }
  mask.onclick = () =>{
    nav.classList.toggle('open');
  }
}

{
  function callback(entries, obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }
  const options = {
    threshold:0.5,
  }

  const observer = new IntersectionObserver(callback,options);
  const targets = document.querySelectorAll('.animate');

  targets.forEach(target => {
    observer.observe(target);
  });
}

{
  // const next = document.getElementById('next');
  // const prev = document.getElementById('prev');
  // const item = document.getElementById('item');
  // const slides = item.children;
  // let currentIndex = 0;

  // function updateButtons(){
  //   prev.classList.remove('hidden');
  //   next.classList.remove('hidden');

  //   if(currentIndex === 0){
  //     prev.classList.add('hidden');
  //   }
  //   if(currentIndex === slides.length -1){
  //     next.classList.add('hidden');
  //   }
  // }
  // function moveSlides(){
  //   const slideWidth = slides[0].getBoundingClientRect().width;
  //   item.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  // }

  // updateButtons();

  // next.addEventListener('click', () => {
  //   currentIndex++;
  //   updateButtons();
  //   moveSlides();
  //   updateDots();
  // });
  // prev.addEventListener('click', () => {
  //   currentIndex--;
  //   updateButtons();
  //   moveSlides();
  //   updateDots();
  // });
  // window.addEventListener('resize', () => {
  //   moveSlides();
  // })


  // const dots = [];

  // function setupDots(){
  //   for (let i = 0; i < slides.length; i++){
  //     const button = document.createElement('button');
  //     button.addEventListener('click', () => {
  //       currentIndex = i;
  //       updateDots();
  //       updateButtons();
  //       moveSlides();
  //     });
  //     dots.push(button);
  //     document.querySelector('nav').appendChild(button);
  //   }
  //   dots[0].classList.add('current');
  // }

  // function updateDots(){
  //   dots.forEach(dot => {
  //     dot.classList.remove('current');
  //   });
  //   dots[currentIndex].classList.add('current');
  // }
  // setupDots();
}