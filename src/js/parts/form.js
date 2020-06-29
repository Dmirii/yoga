function form(){
    
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
}
module.exports = form;