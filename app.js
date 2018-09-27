function counter() {

    this.i = 0;


    this.init();



}

// defining init method
counter.prototype.init = function () {
    setInterval(

        this.countUp.bind(this)
    , 1000);
};


counter.prototype.countUp = function () {
    this.i++;


};

class game{
  constructor(name){
    this.name=name;
    this.timer=new counter();
    this.age=0;
    this.hunger=0;
    this.bored=0;
    this.sleepy=0;
    this.alive=true;
  }



update(){
$( "#clock" ).text( `${this.timer.i}` );
  if(this.timer.i%3==0){

    this.bored++;
    $( "#bored" ).text( `${this.bored}` );

  }
  else if(this.timer.i%5==0){

    this.hunger++;
    $( "#hunger" ).text( `${this.hunger}` );
  }
  else if(this.timer.i%7==0){
    this.sleepy++;
    this.age++;
      $( "#tired" ).text( `${this.sleepy}` );
        $( "#age" ).text( `${this.age}` );
  }


  if(this.bored>=10 || this.hungry>=10||this.sleepy>=10){
    this.alive=false;
  }
}

petPlay(){
  if(this.age>6){
  $(".char").attr("src","../tomagotchi/images/dog-play-old.gif");
}
else{
    $(".char").attr("src","../tomagotchi/images/dog-play.gif");
}

  this.bored-=2;
  if(this.bored<0){
    this.bored=0;
  }

  $( "#bored" ).text( `${this.bored}` );


}
petSleep(){

  $(".char").css('height', ' ');
  $(".char").attr("src","../tomagotchi/images/dog-sleep.gif");
  this.sleepy-=3;
  if(this.sleepy<0){
    this.sleepy=0;
  }
  $( "#tired" ).text( `${this.sleepy}` );

}
petFeed(){
  if(this.age>6){
    $(".char").css('height', ' ');
    $(".char").attr("src","../tomagotchi/images/dog-eat-old.gif");

  }
else{
$(".char").css('height', ' ');
$(".char").attr("src","../tomagotchi/images/dog-eat.gif");
}
  this.hunger-=2;
  if(this.hunger<0){
    this.hunger=0;
  }
  $( "#hunger" ).text( `${this.hunger}` );

}


gamePlay(){
   let _this = this;

  $(".feed").on("click", function(e){
    e.stopImmediatePropagation();


    _this.petFeed();
  });

  $(".play").on("click", function(e){
    e.stopImmediatePropagation();

    _this.petPlay();
  });

  $(".sleep").on("click", function(e){
    e.stopImmediatePropagation();
    _this.petSleep();
  });


}

}

$( ".page" ).hide();
$(" .side" ).hide();


$("#start").on("click", function(e){
  e.preventDefault();

  $("body").removeAttr('style');
  $("body").css('background-image', 'none');
  $( "#start" ).remove();
  $( "#menu" ).remove();
  $( ".page" ).show();
  $(" .side" ).show();
});



function displayTime() {

   }




let update_loop = setInterval(Main, 1000);
const pet = new game('pet');

function Main(){

pet.update();
pet.gamePlay();
if(pet.timer.i%3==0){

if(pet.age>6){
  $(".char").attr("src","../tomagotchi/images/dog-old.gif");
}
else{
  $(".char").attr("src","../tomagotchi/images/dog.gif");
}
}

if(pet.alive==false){

    $(".char").css('height','');
    $(".char").attr("src","../tomagotchi/images/dead.gif");
  clearInterval(update_loop);
}
}
