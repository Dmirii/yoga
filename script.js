window.addEventListener('DOMContentLoaded', function() {
    //document.write('test');

    'use strict';
    console.log(typeof null)
    let tab = document.querySelectorAll('.info-header-tab');
    let info = document.querySelector('.info-header');
    let tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(tab) {
        for(let i =tab; i< tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    function showTabContent(tab){
        if(tabContent[tab].classList.contains('hide')){
            tabContent[tab].classList.remove('hide');
            tabContent[tab].classList.add('show');
        }
    }
    
    hideTabContent(1);
    info.addEventListener('click', (event)=>{
        let target = event.target;
        if ( target && target.classList.contains('info-header-tab')){
            for ( let i =0; i < tab.length; i++){
                if ( target == tab[i]){
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }

    }); 

    // timer
    let deadline ='2020-06-30';

    function getTimeRemaining(endtime){
        let et = Date.parse(endtime) - Date.parse(new Date());      
        let seconds = Math.floor((et/1000) % 60);
        let minutes = Math.floor((et/1000/60) % 60);
        let hours = Math.floor((et/(1000*60*60)));

        return{
            'total':et,
            'hours':hours,
            'minutes':minutes,
            'seconds':seconds
        }
    }

    function setClock(id,endtime){
        let timer = document.getElementById(id);
        let hours = timer.querySelector('.hours');
        let minutes = timer.querySelector('.minutes');
        let seconds = timer.querySelector('.seconds');
        let timeInterval = setInterval(updateClock,1000);

        function updateClock(){
            let et = getTimeRemaining(endtime);
            hours.textContent = et.hours;
            minutes.textContent = et.minutes;
            seconds.textContent = et.seconds;

            if (et.total<=0) {
                clearInterval(timeInterval);
            }
        }

    }
    setClock('timer',deadline);
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

    // form
    let message  = {
        loading: 'Loading...',
        seccess : 'Thank you.',
        failure : 'Error'
    };

    let form = document.querySelector('.main-form');
    let input = document.getElementsByTagName('input');
    let statusMesaage = document.createElement('div');
    let formBtn = document.querySelector('.popup-form__btn');
    ///    
    statusMesaage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        statusMesaage.innerHTML = '';
        form.appendChild(statusMesaage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php') ;
        request.setRequestHeader('Content-type','application/json; charset=utf-8');
        //request.setRequestHeader('Content-type','application/x-www-form-urlencoded');   
        
        let formData = new FormData(form);

        let obj = {}
        formData.forEach(function (value,key){
            obj[key]=value;
        });
        let json = JSON.stringify(obj);

       // request.send(formData);
       request.send(json);

        request.addEventListener('readystatechange', function (){
            if(request.readyState < 4){
                statusMesaage.innerHTML = '>'+ message.loading;
            } else if (request.readyState === 4 && request.status == 200){
                statusMesaage.innerHTML =  '>'+ message.seccess;
                console.log(message.seccess);
            } else{
                statusMesaage.innerHTML = '>'+ message.failure;
            }

        });

        for (let i =0; i < input.length; i++){
            input[i].value = '';
        }

    });
    // formBtn.addEventListener('click', function (event) {
    //    // event.preventDefault();

    // });

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
            console.log(slideIndex);
            console.log(slides.length);
        }
        else{
            slideIndex=0
            ShowSlide(slideIndex);
        }        
    });

    prev.addEventListener('click', function(){
        if(slideIndex > 0){
            slideIndex--;
            ShowSlide(slideIndex);
            console.log(slideIndex);
            console.log(slides.length);
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
   })

});

