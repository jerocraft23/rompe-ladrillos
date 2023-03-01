var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b7deec52-0e1b-4128-a79c-5a4411a8ad00"],"propsByKey":{"b7deec52-0e1b-4128-a79c-5a4411a8ad00":{"name":"golfball_1","sourceUrl":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png","frameSize":{"x":393,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":393,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/HnGkChZ0Lf5fTeAmaQDwhmGSUiF59YcY/category_sports/golfball.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//crear paddle y ball - paleta y pelota
var paddle = createSprite(200, 375, 100, 10);
var ball = createSprite(150, 250, 15, 15);
paddle.shapeColor = "blue";
ball.shapeColor = "white";
ball.setAnimation("golfball_1");
ball.scale= 0.05;

var score=0;
var gameState ="serve";

//primera fila de cajas
var box1 = createSprite(50, 62, 95, 25);
box1.shapeColor="red";
var box2 = createSprite(150, 62, 95, 25);
box2.shapeColor="red";
var box3 = createSprite(250, 62, 95, 25);
box3.shapeColor="red";
var box4 = createSprite(350, 62, 95, 25);
box4.shapeColor="red";

//segunda fila de cajas
var box5 = createSprite(50, 92, 95, 25);
box5.shapeColor="orange";
var box6 = createSprite(150, 92, 95, 25);
box6.shapeColor="orange";
var box7 = createSprite(250, 92, 95, 25);
box7.shapeColor="orange";
var box8 = createSprite(350,92, 95, 25);
box8.shapeColor="orange";

//tercera fila de cajas
var box9 = createSprite(50, 122, 95, 25);
box9.shapeColor="green";
var box10 = createSprite(150, 122, 95, 25);
box10.shapeColor="green";
var box11 = createSprite(250, 122, 95, 25);
box11.shapeColor="green";
var box12 = createSprite(350, 122, 95, 25);
box12.shapeColor="green";

//cuarta fila de cajas
var box13 = createSprite(50, 152, 95, 25);
box13.shapeColor="yellow";
var box14 = createSprite(150, 152, 95, 25);
box14.shapeColor="yellow";
var box15 = createSprite(250, 152, 95, 25);
box15.shapeColor="yellow";
var box16 = createSprite(350, 152, 95, 25);
box16.shapeColor="yellow";

function draw() {
  background("black");
  
  //mostrar puntuación
  textSize(17);
  stroke("red");
  text("Puntuación: "+score,260,20);
  
  if(gameState == "serve")
  {
    //mostrar texto de bienvenida
    textSize(17);
    stroke("blue")
    text("¡Bienvenido! Presiona Enter para comenzar.",30,200);
    
     //Mover la pelota al presionar la tecla enter
     if(keyDown("enter")){
        ball.velocityX = 5;
        ball.velocityY = 5;
        gameState="play";
      }
  
  }
  
  if(gameState == "play")
  {
    //Mover la paleta con el mouse a lo largo del eje x
  paddle.x=World.mouseX;
  
    if(ball.isTouching(bottomEdge) || score == 16)
    {
      gameState="end"
    }
  }
  
  if(gameState == "end")
  {
    ball.velocityX=0;
    ball.velocityY=0;
    //Mostrar fin del juego
    textSize(17);
    stroke("red");
    text("FIN DEL JUEGO",140,200);
  }
  
  
  //Hacer que la pelota rebote en la paleta y en tres lados del lienzo
  createEdgeSprites();
  ball.bounceOff(rightEdge);
  ball.bounceOff(leftEdge);
  ball.bounceOff(topEdge);
  ball.bounceOff(paddle);

  
  
  //destruir las cajas cuando tocan la pelota
  if(ball.isTouching(box1))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box1);
    score=score+1;
    box1.destroy();
  }
  
  if(ball.isTouching(box2))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box2);
    score=score+1;
    box2.destroy();
  }
  
  if(ball.isTouching(box3))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box3);
    score=score+1;
    box3.destroy();
  }
  
  if(ball.isTouching(box4))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box4);
    score=score+1;
    box4.destroy();
  }
  
  if(ball.isTouching(box5))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box5);
    score=score+1;
    box5.destroy();
  }
  
  if(ball.isTouching(box6))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box6);
    score=score+1;
    box6.destroy();
  }
  
  if(ball.isTouching(box7))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box7);
    score=score+1;
    box7.destroy();
  }
  
  if(ball.isTouching(box8))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box8);
    score=score+1;
    box8.destroy();
  }
  
  if(ball.isTouching(box9))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box9);
    score=score+1;
    box9.destroy();
  }
  
  if(ball.isTouching(box10))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box10);
    score=score+1;
    box10.destroy();
  }
  if(ball.isTouching(box11))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box11);
    score=score+1;
    box11.destroy();
  }
  if(ball.isTouching(box12))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box12);
    score=score+1;
    box12.destroy();
  }
  if(ball.isTouching(box13))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box13);
    score=score+1;
    box13.destroy();
  }
  if(ball.isTouching(box14))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box14);
    score=score+1;
    box14.destroy();
  }
  if(ball.isTouching(box15))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box15);
    score=score+1;
    box15.destroy();
  }
  if(ball.isTouching(box16))
  {
    playSound("assets/category_tap/robotic_selection_1.mp3", false);
    ball.bounceOff(box16);
    score=score+1;
    box16.destroy();
  }
  
   if(paddle.isTouching(ball)) {
    playSound("assets/category_hits/retro_game_hit_block_4.mp3", false);
  }

  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
