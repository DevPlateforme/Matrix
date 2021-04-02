
  window.onload = function(){

     animateCharacters();
     nextOpponentApparition();
     setInterval(increaseScore , 150);
     setInterval(checkIfDead, speed/100);    


  }
  

  function increaseScore(){
    score += 10;
    scoreHTML.innerHTML = 'level: 1 </br>score :' + score + '/10000' ;
  }     
  

  function opponent1Apparition(){

      opponent.style.opacity = '1';
      opponent.style.animation = 'opponentMovement 1250ms linear';
      
      setTimeout(function(){opponent.style.opacity = 0; opponent.style.animation = '' ; nextOpponentApparition()},1250);

      setTimeout(function(){
         if(score > 10000){

            alert('you won!!!')
         }
      },1250);

      
    }


    function jump(){

      hero.classList.add('animate');

      setTimeout(function(){

        hero.classList.remove('animate');
      }, 500);
    
   }
    

  function longRangeShot(){


      if(shotReady == true){


         shotReady = false;

         lazer.style.opacity = '1';

         lazer.style.animation = 'lazerAnimation 300ms linear';

         //CHECK LAZER COLLISION

         setInterval(function(){checkLazerCollision()}, 100);

         setTimeout( function(){lazer.style.animation = '' ; lazer.style.opacity = '0';  shotReady = true} 

         , 300 );


        }      

  }


    function checkIfDead(){
      
       let heroTop = parseInt(window.getComputedStyle(hero).getPropertyValue('top'));
       let heroHeight = parseInt(window.getComputedStyle(hero).getPropertyValue('height')); 
       let heroLeft = parseInt(window.getComputedStyle(hero).getPropertyValue('left'));
       let opponentTop = parseInt(window.getComputedStyle(opponent).getPropertyValue('top'));
       let opponentLeft = parseInt(window.getComputedStyle(opponent).getPropertyValue('left'));
       let opponent2Left = parseInt(window.getComputedStyle(opponent2).getPropertyValue('left'));
       let opponent2Top = parseInt(window.getComputedStyle(opponent2).getPropertyValue('top'));
       let opponent2BulletLeft = parseInt(window.getComputedStyle(opponent2Bullet).getPropertyValue('left'));
       let opponent2BulletTop = parseInt(window.getComputedStyle(opponent2Bullet).getPropertyValue('top'));


          //if the opponent is colliding the player, meaning if they are at the same  height, and same width
             
             //50px equals the space from the wall, plus the width

           if(opponentLeft <= 50){

             if((heroTop + heroHeight) >= opponentTop){


                 //alert("You were killed by a bomber!!" );


                 window.location.reload();



              }else {


               }



               
           } else if(opponent2Left <= 50){

               //alert("you were killed!!!");

               window.location.reload();

               
           } else if( opponent2BulletLeft <= 50 ){

                
             if( (heroTop + heroHeight ) >= opponent2BulletTop){

                 //alert('you died after being shot!!');
               
                 window.location.reload();

            } else {



              clearInterval(opponent2BulletInterval);

              opponent2Bullet.style.left = '99vw';

              
            }
               
        }
          
    }


   function checkLazerCollision(){
       
         let lazerLeft = window.getComputedStyle(lazer).getPropertyValue('left');
         let opponentLeft = window.getComputedStyle(opponent).getPropertyValue('left');
         let opponent2Left = window.getComputedStyle(opponent2).getPropertyValue('left');
         let bossSoldierLeft = window.getComputedStyle(bossSoldier).getPropertyValue('left');
         let bossLeft =  window.getComputedStyle(boss).getPropertyValue('left');




          if( parseInt(opponent2Left) <= parseInt(lazerLeft)  ){
                 

             if(opponent2Shot == false ){

                  opponent2Shot = true;
               
               
                   setTimeout(function(){opponent2.style.opacity = 0; opponent2.style.animation = ''; lazer.style.opacity = 0; lazer.style.animation = ''; nextOpponentApparition() }, 50);



             }

         } else if( parseInt(opponentLeft) <= parseInt(lazerLeft) ){

               
                alert('game over!! the bomber exploded and destroyed peace city!!');

                window.location.reload();



         }

      
         
      

    }



  
   function launchBossLevel(){

      setTimeout( function(){ bossFlight() } , 1000);


   }




    function bossFlight(){

       //The boss waits 5 seconds. Then, his soldiers run for 20 seconds. 
       
       //Then, the boss goes on the ground, makes a shot, stand for 10 seconds then go back flying.

       //When it goes flying, it sends opponents running.
       
       //soldier run for 30 seconds
        
        boss.style.top = '20%';
 
        bossSoldiersRun();

    }


    function bossSoldiersRun(){

          soldiersRunInterval = setInterval( function(){
          bossSoldier.style.opacity = '1';
          bossSoldier.style.animation = 'bossSoldiersRun 1s linear';
 
          
         setTimeout(function(){ bossSoldier.style.animation = '' ;  bossSoldier.style.opacity = '0'}, 1000);

          }, 1800);


          setTimeout( function(){

           clearInterval(soldiersRunInterval);

           bossLanding();

          }, 7000);
      
   }

    
    function bossLanding(){

        //The boss shoots


         boss.style.top = '40%';

         setTimeout(function(){
          bossShot();
         }, 1000);

         setTimeout(function(){ bossFlight()} , 5000 );

    }
  

    function bossShot(){

       let fireBallDiv = document.createElement('div');
       fireBallDiv.setAttribute('id', 'fireBallDiv');  
       document.getElementById("gameDiv").append(fireBallDiv);  
       fireBallDiv.style.animation = 'fireBallAnimation 1s linear';


    }



    document.addEventListener("keypress", function(event) {

                  //IF YOU PRESS Q, JUMP

          if (event.keyCode == 113) {

                 jump();
                        
                    
                 //IF YOU PRESS S, LONG TERM SHOT

          } else if (event.keyCode == 115) {

                longRangeShot();
              
              
          } 
     });

     

     function opponent2Apparition(){

      //init the var used to avoid repetition (bullet collision function)
 
        opponent2Shot = false;


        opponent2.style.opacity = '1';
        opponent2Bullet.style.opacity = '1';
        opponent2.style.animation = 'opponentMovement 2s linear';
        opponent2BulletInterval = setInterval(function(){
        
  
        updatedOpponent2BulletLeft = parseInt(window.getComputedStyle(opponent2Bullet).getPropertyValue('left')) - (window.innerWidth/60);
        


        opponent2Bullet.style.left = updatedOpponent2BulletLeft + 'px';



        }, 10);

        setTimeout(function(){clearInterval(opponent2BulletInterval) ; opponent2.style.opacity = '0' ; opponent2.style.animation = '' ; opponent2Bullet.style.left = '99vw'; opponent2Bullet.style.opacity = '0'}, 2000 );       
        

    }





    function nextOpponentApparition(){

       //either the opponent 1 or the opponent 2 is going to appear

       var opponent1App = function(){ opponent1Apparition()};
       var opponent2App = function(){ opponent2Apparition()};


       var opponentsArray = [opponent1App, opponent2App];


       setTimeout(function(){

             
          opponentsArray[Math.floor(Math.random()*2)]();


       }, 1000);




    }
