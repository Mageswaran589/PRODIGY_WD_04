var typed = new Typed(".text",{
    strings: ["Frontend Developer","Web Designer","Backend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
window.addEventListener('scroll',function(){
    const navbar = this.document.querySelector('.header');
    if(window.scrollY > 50){
        navbar.style.backgroundColor = '#051638';
    }
    
    else{
        navbar.style.backgroundColor = '#051129';
    }
})