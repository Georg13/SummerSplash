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
    
    // modal
    function modalShow(selector, modal, modal_wrp, className) {

        const btn = document.querySelectorAll(selector),
              block_wrp = document.querySelector(modal_wrp),
              block = document.querySelector(modal),
              body_wrap = document.querySelector('body');

        btn.forEach(item => {
                item.addEventListener('click', (e) => {
                e.preventDefault();
                block_wrp.classList.add(className);
                block.classList.add(className);
                body_wrap.classList.add('fixed');
            });
        });  
    }

    function modalClose(selector, modal, modal_wrp, className) {

        const close = document.querySelector(selector),
              block_wrp = document.querySelector(modal_wrp),
              block = document.querySelector(modal),
              body_wrap = document.querySelector('body');

        close.addEventListener('click', (e) => {
            e.preventDefault();
            block_wrp.classList.remove(className);
            block.classList.remove(className);
            body_wrap.classList.remove('fixed');

        });
    }

    modalShow('.modal_btn', '.modal', '.modal__wrap','act');
    modalClose('.modal__close', '.modal', '.modal__wrap','act');
    loadHeader('.banner .bg_img','show');
    scrollToId('.nav');
});



