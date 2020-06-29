function timer(){
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
}

module.exports = timer;