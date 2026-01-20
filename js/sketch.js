let video;
let precision;
// let ascii = ['🪼','👖','🦚','🤢','🐸','🌕','.']
let ascii = ['✿','⁂','✿','❀','  ¤  ','  ⁂  ','   ⁂   ','  ','  ','  ']
let imgPrecedante;
let augmentation= 0;    




function setup() {
  colorMode(HSL)
  angleMode(DEGREES)
  createCanvas(windowWidth,windowHeight)
  video = createCapture(VIDEO)
  video.hide()
  imgPrecedante = video.get();
}
// function mousePressed(){
//   video.loadPixels()
//   let x = getPixel(mouseX,mouseY,video)
//   print(x)
// }


function draw() {
clear()
//   background(255)
// tint(255,0,1200)
//  image(video,0,0)

let mouvement = mouvementDetect(video,imgPrecedante,30,3)
    augmentation+=mouvement;
augmentation = constrain(augmentation,0,60)
video.loadPixels()
let largeurVideo = video.width
let hauteurVideo = video.height

let precision = 5;

for (let x = 0; x <largeurVideo; x+=precision*3) {
for (let y = 0; y <hauteurVideo; y+=precision) {
let c = getPixel(x,y,video)
let r = c[0] 
let g = c[1]
let b = c[2]

  // noStroke()
  // fill(color(c))
  let aleatoire = random(2)
// fill(0,100)
let xConverti = map(x,0,largeurVideo,0,height)
let yConverti = map(y, 0, hauteurVideo, 0, height)

let taille = map(r,255,0,ascii.length,1)
taille =int(taille)

// fill(200,80,l)
//  square(xConverti,yConverti,20)


let l = map(r,50,300,augmentation,100)

//  stroke(239, 100, 57)                       
//  strokeWeight(l)
 fill(255)
 //square(xConverti+random(augmentation),yConverti,7)
textSize(l)
fill(r,50,70,0.8)
square(xConverti,yConverti,l)
text(ascii[taille],xConverti,yConverti,0.5)




// push()
// if(aleatoire>1){
// fill(325, 100, 71,50)
// ellipse(xConverti,yConverti,frameCount*0.5%10)
// }else{
// fill(174, 96, 56,50)
// square(xConverti,yConverti,frameCount*0.5%15)
// }
// pop()



}
}



print(augmentation)
fill(0, 100, 57,0.7)
noStroke()
// ellipse(width/2,height/2,augmentation)

textAlign(CENTER,CENTER)
//text('💮',width/2,height/2,augmentation)

imgPrecedante = video.get();

}


function getPixel(x, y, img) {
  let i = 4 * (y * img.width + x);
  return [
    img.pixels[i],
    img.pixels[i + 1],
    img.pixels[i + 2],
    img.pixels[i + 3]
  ];
}
function mouvementDetect(_cam,_previousFrame,threshold,vitesse){
    precisionAnalyse = 10
      _cam.loadPixels();//ajouter
  _previousFrame.loadPixels(); //ajouter
      let diffGlobale = 0;
    for (let y = 0; y < _cam.height; y += precisionAnalyse) {
    for (let x = 0; x < _cam.width; x += precisionAnalyse) {
     let pixel =  getPixel(x,y,_cam)
      let r1 = pixel[0];
      let g1 = pixel[1];
      let b1 = pixel[2];

    let pixel2 =  getPixel(x,y,_previousFrame)
      let r2 = pixel2[0];
      let g2 = pixel2[1];
      let b2 = pixel2[2];

      let diff = dist(r1, g1, b1, r2, g2, b2);

      if (diff > threshold) {
        diffGlobale += diff;
      }
    }
    
  }

  let aug = map(diffGlobale, 0, video.width * video.height/precisionAnalyse, -vitesse,vitesse);

 aug = constrain(aug,-vitesse,vitesse)
  return aug


}




// let cam;
// let s=0;
// let precision=5; //échantillonnage caméra
// let imgPrecedante;
// let augmentation=0;

// function preload(){
// }

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   //récupération de la vidéo
//   cam = createCapture(VIDEO);
//   cam.size(640, 480);
//   cam.hide();
//   imgPrecedante = cam.get(); //capture de l'image initiale
// }

// function draw() {

// background(254,230,230)

// let mouvement= mouvementDetect(cam,imgPrecedante,30,2)
// augmentation += mouvement
// augmentation = constrain(augmentation,0,255)
// print(augmentation);

// ellipse(mouseX,mouseY,augmentation)




// cam.loadPixels();
// let largeurVideo = cam.width;
// let hauteurVideo = cam.height; 

//      for (let x = 0; x < largeurVideo; x+=precision) {
//         for (let y = 0; y < hauteurVideo; y+=precision) {
        
//             let c = getPixel(x,y,cam) ///réutilisation de la fonction
//             fill((frameCount+100)%360,80,50)
//             noStroke()
//             let xConverti =map(x,0,largeurVideo,0,height)
//             let yConverti = map(y,0,hauteurVideo,0,height)
           
//             let taille = map(c[1],255,10,0,augmentation)
//             //fill(40,30,10,opacity)
//             fill(200,augmentation,0,200)
//             ellipse(xConverti,yConverti,1.5*taille)
            
//     }
//     }
//     imgPrecedante = cam.get(); //mise à jour de l'image précédente
// }


// /////////////////////////////NE PAS TOUCHER !!!
// function getPixel(x, y, img) {
//   let i = 4 * (y * img.width + x);
//   return [
//     img.pixels[i],
//     img.pixels[i + 1],
//     img.pixels[i + 2],
//     img.pixels[i + 3]
//   ];
// }
// function mouvementDetect(_cam,_previousFrame,threshold,vitesse){
//     precisionAnalyse = 10
//       _cam.loadPixels();//ajouter
//   _previousFrame.loadPixels(); //ajouter
//       let diffGlobale = 0;
//     for (let y = 0; y < _cam.height; y += precisionAnalyse) {
//     for (let x = 0; x < _cam.width; x += precisionAnalyse) {
//      let pixel =  getPixel(x,y,_cam)
//       let r1 = pixel[0];
//       let g1 = pixel[1];
//       let b1 = pixel[2];

//     let pixel2 =  getPixel(x,y,_previousFrame)
//       let r2 = pixel2[0];
//       let g2 = pixel2[1];
//       let b2 = pixel2[2];

//       let diff = dist(r1, g1, b1, r2, g2, b2);

//       if (diff > threshold) {
//         diffGlobale += diff;
//       }
//     }
    
//   }

//   let aug = map(diffGlobale, 0, _cam.width * _cam.height/precisionAnalyse, -vitesse,vitesse);

//  aug = constrain(aug,-vitesse,vitesse)
//   return aug


// }