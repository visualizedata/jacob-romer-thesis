var canvas, ctx;
var body = document.querySelector("body");

var port = chrome.extension.connect({
    name: "screenshot"
});
port.postMessage({
    request: "screenshot"
});
port.onMessage.addListener(function (msg) {
  canvas = document.createElement("canvas");
  canvas.setAttribute("id", "ext-canvas");
  body.appendChild(canvas);
  ctx = canvas.getContext('2d');
  resizeCanvas();

  var img = new Image;
  img.onload = function(){
    ctx.drawImage(img,0,0, canvas.width, canvas.height); // Or at whatever offset you like
  };
  img.src = msg;
  canvas.classList.add("animated", "infinite", "zoomOutUp");

  window.addEventListener('resize', resizeCanvas, false);
});

function drawStuff() {
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  drawStuff();
}

// –––––––––



window.setTimeout(() => {
}, 2000);

function typeH1() {
  [].slice.call(document.getElementsByTagName("h1")).sort((pre, cur) => {
    return (
      (cur.getBoundingClientRect().width * cur.getBoundingClientRect().height) -
      (pre.getBoundingClientRect().width * pre.getBoundingClientRect().height) 
    )
  }).map((el, i) => {
    if(i === 0) {
      console.log(el)
      el.classList.add("bounce", "animated", "textmarker", "invers")
      window.setTimeout(() => {
        $(el).typed({strings: ["Hello.", "Content Scripts are great.", `Christ on a cross, this site has ${Math.floor(Math.random() * 40 + 1)} trackers!!!1!`], typeSpeed: 10, startDelay: 200});
      }, 1700);
    }
  });
}
