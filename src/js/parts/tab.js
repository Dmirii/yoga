function tabs() {
    
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
}
module.exports = tabs;