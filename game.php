<?php

require 'header.php'

?>

  <div id='game'>

      <div id='hero'></div>

      <div id='lazer'></div>

      <div id='opponent'></div>

  </div>



  
  <script>

  var hero = document.getElementById('hero');

  var opponent = document.getElementById('opponent');

  var apparitionTime = 2000;

  var opponentSpeed = 1000;

  var speed = 1000;


  window.onload = function(){


   setInterval(opponentApparition, apparitionTime);

  }

  
  function opponentApparition(){

    
    //set opacity of the opponent to 1

    //set the speed of the animation

    
      opponent.style.opacity = 1;


      opponent.style.animation = 'opponentMovement ' + speed + 'ms linear';
      
      let currentSpeed = speed;


      if(speed >= 200){
        speed -= 50;

      }

      console.log(speed);

  

      setTimeout(function(){opponent.style.opacity = 0; opponent.style.animation = '' }, currentSpeed);
      

      
    }

 
 function jump(){

      hero.classList.add('animate');

      setTimeout(function(){

        hero.classList.remove('animate');
      }, 500);

    }



    function checkIfDead(){

       var heroTop = window.getComputedStyle(hero).getPropertyValue('top');

       var heroLeft = window.getComputedStyle(hero).getPropertyValue('left');

       var opponentTop = window.getComputedStyle(opponent).getPropertyValue('top');

       var opponentLeft = window.getComputedStyle(opponent).getPropertyValue('left');;

      //if the opponent is colliding the player, meaning if they are at the same  height, and same width
          

    }



  </script>