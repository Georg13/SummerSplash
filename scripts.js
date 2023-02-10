window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    function loadHeader(selector, addClass, time){
        window.setTimeout(()=>{
            const element = document.querySelector(selector);
            element.classList.add(addClass);
        }, time);
    }

    function scrollToId(selcter) {
        const btnScroll = document.querySelectorAll(selcter);

        btnScroll.forEach( item => {
            let href = item.getAttribute('href');

            item.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
                });
            });
        });
    }

    let btn = document.querySelector('.burger'),
            nav = document.querySelector('.navigation');
        
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            
            btn.classList.toggle('act');
            nav.classList.toggle('act');
        });

    loadHeader(".banner .bg_img","show");

    
    scrollToId('.nav');
});



