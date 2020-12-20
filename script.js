'use strict';

const btnOpenModal = document.querySelectorAll('.show-modal');
const Modal = document.querySelector('.modal');
const Overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');

//open Modal
for(let i=0;i<btnOpenModal.length;i++){
    btnOpenModal[i].addEventListener('click',function(){
        Modal.classList.remove('hidden');
        Overlay.classList.remove('hidden');
    })
}
//Close Model
const closeFunction = function(){
    Modal.classList.add('hidden');
    Overlay.classList.add('hidden');
}
closeModal.addEventListener('click',closeFunction);
Overlay.addEventListener('click',closeFunction);

//escape "key" 

document.addEventListener('keydown',function(e){
    if(e.key == 'Escape'){
        closeFunction();
    }
})