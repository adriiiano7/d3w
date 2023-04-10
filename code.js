var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4db41bc9-9e7a-4483-b8ba-997ce8f0f7a9","dabc2fe4-3fb9-456e-b9b4-baada912f36d","0c5d297d-3086-49a7-a2be-87827daad83c","d9f11b82-6868-44f3-971a-9ad768b5fb6b"],"propsByKey":{"4db41bc9-9e7a-4483-b8ba-997ce8f0f7a9":{"name":"pinto","sourceUrl":"assets/api/v1/animation-library/gamelab/JwVRuLO1.C_VlImhXUAmrZufSFYcBmK./category_animals/chick_1.png","frameSize":{"x":372,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"JwVRuLO1.C_VlImhXUAmrZufSFYcBmK.","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":372,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/JwVRuLO1.C_VlImhXUAmrZufSFYcBmK./category_animals/chick_1.png"},"dabc2fe4-3fb9-456e-b9b4-baada912f36d":{"name":"car","sourceUrl":null,"frameSize":{"x":73,"y":133},"frameCount":1,"looping":true,"frameDelay":12,"version":"qhrbZPRSGkZqwlnk_.HHblxLd7fHOJKK","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":73,"y":133},"rootRelativePath":"assets/dabc2fe4-3fb9-456e-b9b4-baada912f36d.png"},"0c5d297d-3086-49a7-a2be-87827daad83c":{"name":"elefante1","sourceUrl":null,"frameSize":{"x":300,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"0BSjqtwsl9yhP4xPhmo0FjU1o7bkHxr8","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":286},"rootRelativePath":"assets/0c5d297d-3086-49a7-a2be-87827daad83c.png"},"d9f11b82-6868-44f3-971a-9ad768b5fb6b":{"name":"elefante2","sourceUrl":null,"frameSize":{"x":300,"y":286},"frameCount":1,"looping":true,"frameDelay":12,"version":"C5VSiO8ry4vMoit1EIHxB1.b.tlgPDQV","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":300,"y":286},"rootRelativePath":"assets/d9f11b82-6868-44f3-971a-9ad768b5fb6b.png"}}};
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

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var drico;
var adriano
  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  adriano = createSprite(374,185,20,20)
  drico = createSprite(20,190,13,13);
 
  drico.scale = 0.06
   drico.setAnimation("pinto")
  drico.shapeColor = "green";
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "white";
   car1.setAnimation("elefante1")
   car1.scale = 0.10
  car2 = createSprite(215,130,10,10);
   car2.scale = 0.10
   car2.setAnimation("elefante2")
  car2.shapeColor = "white";
  car3 = createSprite(156,250,10,10);
   car3.scale = 0.10
   car3.setAnimation("elefante1")
  car3.shapeColor = "white";
  car4 = createSprite(270,250,10,10);
   car4.scale = 0.10
   car4.setAnimation("elefante2")
  car4.shapeColor = "white";
  
//adicione velocidade para fazer o carro se mover.
 car1.velocityY = 2;
 car2.velocityY = 2;
 car3.velocityY = -2;
 car4.velocityY = -2;
function draw() {
   background("white");
  text("morte: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// crie a função rebater, para fazer o carro rebater nos limites
 car1.bounceOff(boundary1);
 car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
 car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
 car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
 car4.bounceOff(boundary2);
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita
 if(keyDown("right")){
   drico.x = drico.x + 2;
 }
 if(keyDown("left")){
   drico.x = drico.x  -2;
 }
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro.
  if(drico.isTouching(car1)|| drico.isTouching(car2)|| drico.isTouching(car3)|| drico.isTouching(car4))
 {
   drico.x = 20;
   drico.y = 190;
   life = life +1;
 }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
 drawSprites();{
   
 }
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
