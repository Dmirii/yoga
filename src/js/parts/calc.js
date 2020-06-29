function calc(){
     // calc
   let peapDay = document.querySelectorAll('.counter-block-input');
   let base = document.querySelector('select[name="place"]');
   let total = document.getElementById('total');
   total.innerHTML =0;
  

   function GetCoast(){
    
        let coast = 0;
        if(base.value == 1){
            coast = 1000;
        }
        else if (base.value == 1.5){
            coast = 2000;
        }
        else if (base.value == 1.8){
            coast = 3000;
        }
            if(peapDay[0].value!='' && peapDay[1].value!=''&&
            (  /^\d+$/.test(peapDay[0].value))
            ){
                total.innerHTML = peapDay[0].value + peapDay[1].value * coast;
                console.log(base.value);                
                localStorage.setItem(localStorage.length+1, total.textContent);
            } else
            {
                total.innerHTML =0;
            }
    }
        
   

   base.addEventListener('input',function(){
       GetCoast();
   });

   peapDay[0].addEventListener('change',function(){
    GetCoast();
    });
    peapDay[1].addEventListener('change',function(){
        GetCoast();
        });

}

module.exports = calc;