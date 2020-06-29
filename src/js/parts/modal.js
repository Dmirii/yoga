function modal(){
     // modal
     var more = document.querySelector('.more');
     let overlay = document.querySelector('.overlay');
     let closex = document.querySelector('.popup-close');
 
     more.addEventListener('click', function() {
         overlay.style.display ='block';
         this.classList.add('more-splash');
         document.body.style.overflow = 'hidden';
     });
 
     closex.addEventListener('click' , function() {
         more.classList.remove('more-splash');
         overlay.style.display = 'none';
         document.body.style.overflow = '';
        
     });
     console.log( 2 && 1 && null && 0 && undefined);
}
module.exports = modal;