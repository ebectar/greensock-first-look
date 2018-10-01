let tl = new TimelineLite({
  paused: true
})
let cloudAnimation = {
  x:512
}
let carAnimation = {
  x:512,
  ease: Power4.easeOut,
}
let carAnimation2 = {
  x:!512,
  ease: Power4.easeOut,
}

TweenLite.defaultEase = Linear.easeNone

tl.add(TweenLite.to("#cloud1", 15, cloudAnimation), 0)
tl.add(TweenLite.to("#cloud2", 10, cloudAnimation), 0)
tl.add("startCar", 5);
tl.add(TweenLite.from("#car", 3, carAnimation), 0)
tl.add(TweenLite.to("#car", 3, carAnimation2), "startCar")

setTimeout(function () {
  tl.play();
}, 100);
