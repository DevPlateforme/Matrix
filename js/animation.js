
function animateCharacters(){


//hero



var heroCanvas = document.getElementById('heroCanvas');


var heroCanvasContext = heroCanvas.getContext('2d');


var heroImages = new Array(8);

for (var i=1; i < heroImages.length ; i++){

       heroImages[i] = new Image();

       heroImages[i].src = './images/hero(' + i.toString() + ').png';

}


var index = 0;

setInterval(function(){

    index++;


    if( index >= 8){
          
        index = 3;

    }

    heroCanvasContext.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
    heroCanvasContext.drawImage(heroImages[index], 0, 0, heroCanvas.width, heroCanvas.height);

    
},80);





//opponent1



var opponent1Canvas = document.getElementById('opponent1Canvas');


var opponent1Context = opponent1Canvas.getContext('2d');


var opponent1Images = new Array(14);

for (var i=1; i < opponent1Images.length ; i++){

       opponent1Images[i] = new Image();

       opponent1Images[i].src = './images/bomber(' + i.toString() + ').png';

}


var index2 = 0;

setInterval(function(){

    index2++;


    if( index2 >= 13){
          
        index2 = 0;

    }

    opponent1Context.clearRect(0, 0, opponent1Canvas.width, opponent1Canvas.height);
    opponent1Context.drawImage(opponent1Images[index2], 0, 0, opponent1Canvas.width, opponent1Canvas.height);

    
} , 60);




//opponent1



var opponent2Canvas = document.getElementById('opponent2Canvas');


var opponent2Context = opponent2Canvas.getContext('2d');


var opponent2Images = new Array(4);

for (var i=1; i < opponent2Images.length ; i++){

       opponent2Images[i] = new Image();

       opponent2Images[i].src = './images/shooter(' + i.toString() + ').png';

}


var index3 = 0;

setInterval(function(){

    index3++;


    if( index3 >= 4){
          
        index3 = 0;

    }

    opponent2Context.clearRect(0, 0, opponent2Canvas.width, opponent2Canvas.height);
    opponent2Context.drawImage(opponent2Images[index3], 0, 0, opponent2Canvas.width, opponent2Canvas.height);

    
   } , 150);



}
