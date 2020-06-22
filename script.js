window.addEventListener('DOMContentLoaded', function() {
    //document.write('test');

    'use strict';
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
    let closex = document.querySelector('.popup');

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

});

