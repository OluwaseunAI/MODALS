let open_modal = document.getElementById('open_modal');
let close_modal = document.getElementById('close_modal');
let close_btn = document.getElementById('close_btn');
let modal_containerId = document.getElementById('modal_containerId');

open_modal.addEventListener("click", () => {
    console.log("Open_modal btn working");
    modal_containerId.classList.add('show');
});

close_modal.addEventListener("click", () => {
    console.log("Close_modal btn working");
    modal_containerId.classList.remove('show');
});

close_btn.addEventListener("click", () => {
    console.log("Close_btn_x btn working");
    modal_containerId.classList.remove('show');
});


//pointerleave pointermove beforeinput cancel

//close_modal.addEventListener("n")

let modalContainer = document.querySelector('.modal-container')

window.onclick = (e) => {
    if (e.target == modalContainer){
        console.log('outside modal')
        modalContainer.classList.remove('show')
    }
}