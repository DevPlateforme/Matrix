
 

  window.onload = function(){

    nextOpponent1Apparition();


    nextOpponent2Apparition();


     setInterval(increaseScore , 150);

     setInterval(checkIfDead, speed/100);    


  }
  

  function increaseScore(){

    score += 10;

    scoreHTML.innerHTML = score;

  }     
  

  function opponentApparition(){

    if(score >= 1000){

      clearInterval(opponentRunInterval);

      launchBossLevel();
    }

    
    //set opacity of the opponent to 1

    //set the speed of the animation


        
    
      opponent.style.opacity = '1';

      opponent.style.background = 'blue';


      opponent.style.animation = 'opponentMovement ' + speed + 'ms linear';
      
      let currentSpeed = speed;


      if(speed >= 300){

        speed -= 50;
      }

      setTimeout(function(){opponent.style.opacity = 0; opponent.style.animation = '' }, currentSpeed);
      
    }


 function jump(){

      hero.classList.add('animate');

      setTimeout(function(){

        hero.classList.remove('animate');
      }, 500);
    
  
   }
    

  function longRangeShot(){


      if(shotReady == true){

        console.log('shot!!!');

         shotReady = false;

         lazer.style.opacity = '1';

         lazer.style.animation = 'lazerAnimation 400ms linear';

         //CHECK LAZER COLLISION

         setInterval(function(){checkLazerCollision()}, 100);

         setTimeout( function(){lazer.style.animation = '' ; lazer.style.opacity = '0';  shotReady = true} 

         , 600 );


        }      

  }


    function checkIfDead(){
      
       let heroTop = window.getComputedStyle(hero).getPropertyValue('top');

       let heroLeft = window.getComputedStyle(hero).getPropertyValue('left');

       let opponentTop = window.getComputedStyle(opponent).getPropertyValue('top');

       let opponentLeft = window.getComputedStyle(opponent).getPropertyValue('left');

       let opponent2Left = window.getComputedStyle(opponent2).getPropertyValue('left');

       let opponent2BulletLeft = window.getComputedStyle(opponent2Bullet).getPropertyValue('left');


       let bossSoldierLeft = window.getComputedStyle(bossSoldier).getPropertyValue('left');


          //if the opponent is colliding the player, meaning if they are at the same  height, and same width
             
             //50px equals the space from the wall, plus the width

           if(parseInt(opponentLeft) <= 50){


               alert("vous avez été tués par une bombe!!!");

               window.location.reload();

               
           } else if(parseInt(heroTop) >= 200 && parseInt(bossSoldierLeft) <= 50){


               console.log('soldier collision!!!');

               alert("vous avez été tué par un soldat!!!");

               window.location.reload();
               
           } else if(parseInt(opponent2Left) <= 50){


               alert("vous avez été tués!!!");

               window.location.reload();

               
           } else if(parseInt(heroTop) >= 200 && parseInt(opponent2BulletLeft) <= 50 ){


               alert("vous avez été tués par une balle!!!" + parseInt(heroTop));


               window.location.reload();

               
           }
          
     }


   function checkLazerCollision(){
       
       let lazerLeft = window.getComputedStyle(lazer).getPropertyValue('left');
       let opponentLeft = window.getComputedStyle(opponent).getPropertyValue('left');
       let opponent2Left = window.getComputedStyle(opponent2).getPropertyValue('left');
       let bossSoldierLeft = window.getComputedStyle(bossSoldier).getPropertyValue('left');
       let bossLeft =  window.getComputedStyle(boss).getPropertyValue('left');


         if( parseInt(opponentLeft) <= parseInt(lazerLeft)  ){
                 
             console.log('lazer lazer lazer lazer');

             opponent.style.background = 'orange' ;

             lazer.style.background = 'yellow' ;

             nextOpponent1Apparition();

             
             setTimeout(function(){opponent.style.opacity = 0; opponent.style.animation = '', lazer.style.opacity = 0; lazer.style.animation = ''}, 50);

         } 

          if( parseInt(opponent2Left) <= parseInt(lazerLeft)  ){
                 
             opponent2.style.background = 'orange' ;
             
             setTimeout(function(){opponent2.style.opacity = 0; opponent2.style.animation = ''; lazer.style.opacity = 0; lazer.style.animation = ''; nextOpponent2Apparition()}, 50);

         } 

         if( parseInt(bossSoldierLeft) <= parseInt(lazerLeft)  ){
                 
                 console.log('boss soldier hit');
    
                 bossSoldier.style.background = 'orange' ;
                 
                 setTimeout(function(){bossSoldier.style.opacity = 0; bossSoldier.style.animation = ''}, 100);
    
         }

         
            
         if( parseInt(bossLeft) <= parseInt(lazerLeft)  ){

              if(bossLifePoints > 1){

                
                 lazer.style.animation = '';
    
                 boss.style.background = 'yellow' ;

                 alert('boss hit' + 'points de vie restants : ' + bossLifePoints);

                 bossLifePoints -= 1;


              } else {

                alert('Vous avez vaincu le démon!!!!');

                window.location.reload();

              }
                 
         } 

    }



  
   function launchBossLevel(){

      console.log('le voila!! La bete à 3 têtes!!!');
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


         console.log("soldiers are running at you");

         soldiersRunInterval = setInterval( function(){

          bossSoldier.style.opacity = '1';

          bossSoldier.style.animation = 'bossSoldiersRun 1s linear';
 
          console.log("run!!!");
 
          
         setTimeout(function(){ bossSoldier.style.animation = '' ;  bossSoldier.style.opacity = '0'}, 1000);

          }, 1800);


          setTimeout( function(){

           clearInterval(soldiersRunInterval);

           bossLanding();

          }, 7000);
      
        }

    
    function bossLanding(){

        //The boss shoots

        console.log("landing!");

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

        opponent2.style.opacity = '1';
            
        opponent2Bullet.style.opacity = '1';

        opponent2.style.animation = 'opponentMovement 1.5s linear';

        
        opponent2BulletInterval = setInterval(function(){
        
  
        updatedOpponent2BulletLeft = parseInt(window.getComputedStyle(opponent2Bullet).getPropertyValue('left')) - 70;
        
        console.log("bullet :" + updatedOpponent2BulletLeft );


        opponent2Bullet.style.left = updatedOpponent2BulletLeft + 'px';


        console.log('on');


        }, 30);

        setTimeout(function(){clearInterval(opponent2BulletInterval) ; opponent2.style.opacity = '0' ; opponent2.style.animation = '' ; opponent2Bullet.style.left = '99vw'; opponent2Bullet.style.opacity = '0'; nextOpponent2Apparition() }, 1500 );       
        
    }

    
    function nextOpponent1Apparition(){
 
       setTimeout(function(){

          opponentApparition();
          

        }, Math.floor(Math.random()*5000) + opponent1MinApparitionTime );

        if(opponent1MinApparitionTime > 1500){

              opponent1MinApparitionTime -= 500;

        }        
      
      }


      function nextOpponent2Apparition(){
       
       
         setTimeout(function(){

          opponent2Apparition();

        }, Math.floor(Math.random()*5000) + opponent2MinApparitionTime );

        if(opponent2MinApparitionTime > 3000){

              opponent2MinApparitionTime -= 500;
        }
        

      }


    







