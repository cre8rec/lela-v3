console.clear();

var textPath = document.querySelector('#text-path');

var textContainer = document.querySelector('.container-1');

var path = document.querySelector( textPath.getAttribute('href') );

var pathLength = path.getTotalLength();
console.log(pathLength);

function updateTextPathOffset(offset){
  textPath.setAttribute('startOffset', offset); 
}

updateTextPathOffset(pathLength);

function onScroll(){
  requestAnimationFrame(function(){
    var rect = textContainer.getBoundingClientRect();
    var scrollPercent = rect.y / window.innerHeight;
    console.log(scrollPercent);
    updateTextPathOffset( scrollPercent * 2 * pathLength - 2300 );
  });
}

window.addEventListener('scroll',onScroll);



const dropdownIcon = document.querySelector('.dropdown-button')
const dropdown = document.querySelector('.dropdown')


dropdownIcon.addEventListener('click', function(){

    if (dropdown.style.display === 'none'){
        dropdown.style.display = 'flex'
    } else {
        dropdown.style.display = 'none'
    }

})


const closeDropdown = () =>{


console.log('yes')
    if (dropdown.style.display === 'none'){
        dropdown.style.display = 'flex'
    } else {
        dropdown.style.display = 'none'
    }

}


  
const headerLink = document.querySelectorAll('.header-link')

document.addEventListener('scroll', function (e) {
    var top  = window.pageYOffset + window.innerHeight,
/* 
        isVisible = top > document.querySelector('.screen').offsetTop; */
  
        black = top > document.querySelector('.container-2').offsetTop;
  
  
  
        if(black) {
          document.querySelector('header').classList.add('black');

        
        headerLink.style.color = 'white'
        
          
   
        } else {
          document.querySelector('header').classList.remove('black');
  
        };
  /* 
     if (isVisible) {
  
      setTimeout(function(){ 
      document.querySelector('.corner-left').classList.add('cornerleftexpand');
      document.querySelector('.corner-right').classList.add('cornerrightexpand');
      document.querySelector('.screen').classList.add('screenexpand');
      document.querySelector('.lillogo').classList.add('hidden');
      }, 500);
      
      setTimeout(function(){ 
          document.querySelector('.words').style.display = 'block'
      }, 1000);
  
  
     } 
     
     
     else {

        
  
  
  
      setTimeout(function(){ 
  
          document.querySelector('.words').classList.remove('show');
          
      document.querySelector('.corner-left').classList.remove('cornerleftexpand');
      document.querySelector('.corner-right').classList.remove('cornerrightexpand');
      document.querySelector('.screen').classList.remove('screenexpand');
      document.querySelector('.lillogo').classList.remove('hidden');
      }, 500);
       */
  
     
   
     
     
  });
  




    
