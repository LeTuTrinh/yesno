const wapper = document.querySelector('.wapper');
const txt = document.querySelector('.text');
const yes = document.querySelector('.yes');
const no = document.querySelector('.no');

// const wapperRect = wapper.getBoundingClientRect();
// const noRect = no.getBoundingClientRect();

const maxWidth = window.innerWidth - 100;
const maxHeight = window.innerHeight -50;

 yes.addEventListener('click', () => {
     txt.innerHTML = 'Ohhh ! Tôi cũng yêu bạn moah moah :))'
    
 });


no.addEventListener('mouseover', () => {
    // const i = Math.floor(Math.random() * (wapperRect.width - noRect.width)) + 1;
    // const j = Math.floor(Math.random() * (wapperRect.height - noRect.height)) + 1;

    // no.style.left = i + 'px';
    // no.style.top = j + 'px'; 

    no.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
    no.style.top = Math.floor(Math.random() * (maxHeight + 1)) + 'px';
    
});

