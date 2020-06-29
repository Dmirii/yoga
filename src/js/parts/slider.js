function slider(){
        // slider

        let slideIndex =0;
        let slides = document.querySelectorAll('.slider-item');
        let prev = document.querySelector('.prev');
        let next = document.querySelector('.next');
        let dotsWrap = document.querySelector('.slider-dots');
        let dots = document.querySelectorAll('.dot');
    
        function ShowSlide(slideIndex){
    
            slides.forEach((item) => item.style.display='none');
            // slides.forEach(function (value,key){
            //     slides[key].style.display='none';
            // });
    
            dots.forEach((item) => item.classList.remove('dot-active'));
            // dot.forEach(function(value,key){
            //     dot[key].classList.remove('dot-active');
            // });
    
            slides[slideIndex].style.display ='block';
            dots[slideIndex].classList.add('dot-active');
        }
    
        ShowSlide(slideIndex);
    
        next.addEventListener('click', function(){
            if(slideIndex < slides.length-1){
                slideIndex++;
                ShowSlide(slideIndex);            
            }
            else{
                slideIndex=0;
                ShowSlide(slideIndex);
            }        
        });
    
        prev.addEventListener('click', function(){
            if(slideIndex > 0){
                slideIndex--;
                ShowSlide(slideIndex);            
            }
            else{
                slideIndex = sllides.length;
                ShowSlide(slideIndex);
            }        
        });
    
        dotsWrap.addEventListener('click', function(event) {
            for( let i=0; i< dots.length; i++){
                if(event.target.classList.contains('dot') && event.target ==dots[i]){
                    ShowSlide(i);
                }
            }
    
        console.log(event.target);
       });
}
module.exports = slider;