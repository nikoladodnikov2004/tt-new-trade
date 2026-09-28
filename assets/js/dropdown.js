document.addEventListener("DOMContentLoaded", function() {
        const langToggle = document.querySelector('.menu-language > li');
        if (langToggle) {
            langToggle.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    if (e.target.tagName === 'A') return;
                    e.preventDefault();
                    e.stopPropagation();
                    this.classList.toggle('active-lang');
                }
            });
        }

        const dropdown = document.querySelector('.dropdown');
        const arrowTrigger = document.querySelector('.dropdown .arrow');
        
        if (dropdown && arrowTrigger) {
            arrowTrigger.addEventListener('click', function(e) {
                if (window.innerWidth <= 768) {
                    e.preventDefault(); 
                    e.stopPropagation();
                    dropdown.classList.toggle('active-menu');
                }
            });
        }

        document.addEventListener('click', function(e) {
            if (langToggle && !langToggle.contains(e.target)) langToggle.classList.remove('active-lang');
            if (dropdown && !dropdown.contains(e.target)) dropdown.classList.remove('active-menu');
        });
    
        const menuToggle = document.getElementById('menu-toggle-input');
        if (menuToggle){
            menuToggle.addEventListener('change', function(){
                if(this.checked){
                    document.body.style.overflow='hidden';
                }
                else{
                    document.body.style.overflow='';
                }
            });
        }
    });