// const btns = document.querySelectorAll('.modal-btn');
//LEARNT THE USEFULNESS OF qs to gEBid when you have similar class and id on an element. >6hours


const btns = document.querySelectorAll("[data-target]");
const overlay = document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.close-btn');


  btns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
      // btn.classList.add('active');
      document.querySelector(btn.dataset.target).classList.add('active');
      overlay.classList.add('active');
  });
});

  closeBtns.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
    // btns.classList.remove('active');
      document.querySelector(btn.dataset.target).classList.remove('active');
      overlay.classList.remove('active');
  });
});

window.onclick = (e)=>{
  if (e.target == overlay){
    const modals = document.querySelectorAll('.modal')
  modals.forEach(modal => modal.classList.remove('active'));

  // modals.forEach(overlay => overlay.classList.remove('active'));
overlay.classList.remove('active');
  }
}