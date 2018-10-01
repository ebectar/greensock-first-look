let diagonalSpin = {
  x: 128,
  y: 128,
  rotation:360,
  scale:0.5,
  ease: Bounce.easeOut,
}

let shrink = {
  y: 128,
  ease: Elastic.easeOut,
  scale: 0.5
};

let squish = {
  scaleX: 3,
  scaleY: 0.1,
  ease: Bounce.easeOut,
  transformOrigin: "50% 50%",
};

let fade = {
  scale: 1.5,
  rotation: 360,
  opacity: 0,
  ease: Bounce.easeOut,
  transformOrigin: "50% 50%"
}

var tl = new TimelineLite({paused: true});
tl.add(TweenLite.to("#rectangle", 3, diagonalSpin), 0);
tl.add(TweenLite.to("#rectangle-2", 5, shrink), 3);
tl.add(TweenLite.to("#rectangle-3", 5, squish), 6);
tl.add(TweenLite.to("#rectangle-4", 5, fade), 9);

setTimeout(function () {
  tl.play();
}, 100);
