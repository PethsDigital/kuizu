const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.nav_content');
let ul =  document.querySelectorAll('.dse');
ul = Array.from(ul)
ul.forEach((ul)=>{
  ul.addEventListener('click', () => {

    if (ham.className === 'hamburger') {
        ham.classList.add('close');
      } else if (ham.className === 'hamburger close') {
        ham.classList.remove('close');
        ham.classList.add('hamburgerback');
      } else if (ham.className === 'hamburger hamburgerback') {
        ham.classList.add('close');
        ham.classList.remove('hamburgerback');
      } else {
        ham.className = 'hamburger';
      }


    if (nav.className == 'nav_content'){
        nav.classList.add('responsive');
    }
    else if (nav.className == 'nav_content responsive') {
        nav.classList.add('responsiveReturn')
    }
    else if (nav.className == 'nav_content responsive responsiveReturn') {
        nav.classList.remove('responsiveReturn')
        
    }
    else{
        nav.className = 'nav_content'
    }
})

})

ham.addEventListener('click', () => {

    if (ham.className === 'hamburger') {
        ham.classList.add('close');
      } else if (ham.className === 'hamburger close') {
        ham.classList.remove('close');
        ham.classList.add('hamburgerback');
      } else if (ham.className === 'hamburger hamburgerback') {
        ham.classList.add('close');
        ham.classList.remove('hamburgerback');
      } else {
        ham.className = 'hamburger';
      }


    if (nav.className == 'nav_content'){
        nav.classList.add('responsive');
    }
    else if (nav.className == 'nav_content responsive') {
        nav.classList.add('responsiveReturn')
    }
    else if (nav.className == 'nav_content responsive responsiveReturn') {
        nav.classList.remove('responsiveReturn')
        
    }
    else{
        nav.className = 'nav_content'
    }
})



// window.addEventListener('scroll',()=>{
//     if (window.scrollY > 70) {
  
//       document.querySelector('nav').style.backgroundColor = '#000000';
//       document.querySelector('nav').style.zIndex = '3';
//       document.querySelector('nav').style.boxShadow= '0px 10px 30px rgba(78, 55, 178, 0.05)';
     
      
//     }
//     else{
//       document.querySelector('nav').style.backgroundColor = 'transparent';
//       document.querySelector('nav').style.boxShadow= 'none';
//     }
//   })