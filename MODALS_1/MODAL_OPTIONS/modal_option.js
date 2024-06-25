const openBtn = document.querySelector('#open_modal')
const closeBtn = document.querySelector('#close_btn')
const quitBtn = document.querySelector('#close_modal')
const modal = document.querySelector('.modal1')
const overlay = document.querySelector('.overlay')

openBtn.addEventListener('click', ()=>{
  modal.classList.add('active')
  overlay.classList.add('active')
})
closeBtn.addEventListener('click', ()=>{
  modal.classList.remove('active')
  overlay.classList.remove('active')
})
quitBtn.addEventListener('click', ()=>{
  modal.classList.remove('active')
  overlay.classList.remove('active')
})

window.onclick = (event)=>{
  if (event.target === overlay){
    modal.classList.remove('active')
    overlay.remove('active')
  }

 }