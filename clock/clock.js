let shadow = document.getElementById("SVGID_1_");
let hands = document.getElementById("hands");

TweenLite.defaultEase = Linear.easeNone;

var tl = new TimelineLite({
  paused:true,
  onComplete: () => {
    setTimeout(() => {
      tl.restart();
    });
  } 
});

let shadowAnimation = {
  rotation: 180,
  transformOrigin: "100% 50%",
};

let shadowAnimation = {
  rotation: 180,
  transformOrigin: "50% 67%",
}


tl.add(TweenLite.to(shadow, 30, shadowAnimation), 0);
tl.add(TweenLite.to(hands, 30, shadowAnimation), 0);


setTimeout(function(){
  tl.play();
}, 100);
