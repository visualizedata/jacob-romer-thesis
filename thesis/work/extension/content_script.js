var canvas, ctx, container, ptCanvas, sapce;
var body = document.querySelector("body");
var port = chrome.extension.connect({ name: "screenshot" });

port.onMessage.addListener(function (msg) {
  console.log("huhu")
  container = document.createElement("div");
  container.setAttribute("id", "ext-canvas-container");
  console.log(container.height)

  ptCanvas = document.createElement("canvas");
  ptCanvas.setAttribute("id", "ext-ptCanvas");

  //ptCanvas.width = window.innerWidth;
  //ptCanvas.height = window.innerHeight;
  //ptCanvas.classList.add("ext-canvas");

  canvas = document.createElement("canvas");
  canvas.setAttribute("id", "ext-canvas");
  canvas.classList.add("ext-canvas");
  container.appendChild(canvas);

  ctx = canvas.getContext('2d');
  resizeCanvas();

  console.log("canvas")

  var img = new Image;
  img.onload = function(){
    ctx.drawImage(img,0,0, canvas.width, canvas.height); // Or at whatever offset you like
  };
  img.src = msg;

  body.appendChild(container);
  space = new CanvasSpace().display("#ext-canvas-container");
  makeSpace();

  console.log(space);

  canvas.classList.add("ext-canvas-slide");

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

function makeSpace() {

  var colors = {
    a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
    b1: "#96bfed", b2: "#f5ead6", b3: "#f1f3f7", b4: "#e2e6ef"
  };
  var form = new Form( space );


  //// 2. Create Elements
  var pts = [];
  var center = space.size.$divide(2);
  var line = new Line(center).to( space.size );

  var count = 200;
  var r = Math.min( space.size.x, space.size.y ) * 0.8;
  for (var i=0; i<count; i++) {
    var p = new Vector( Math.random()*r-Math.random()*r, Math.random()*r-Math.random()*r );
    p.moveBy( center ).rotate2D( i*Math.PI/count, center );
    pts.push( p );
  }


  //// 3. Visualize, Animate, Interact
  space.add({
    animate: function(time, fps, context) {

      for (var i=0; i<pts.length; i++) {

        // rotate the points slowly
        var pt = pts[i];
        pt.rotate2D( Const.one_degree / 20, center );
        form.stroke( false ).fill( colors["a" + (i % 4)] ).point( pt, 1 );

        // get line from pt to the mouse line
        var ln = new Line( pt ).to( line.getPerpendicularFromPoint( pt ) );

        // opacity of line derived from distance to the line
        var opacity = Math.min( 0.8, 1 - Math.abs( line.getDistanceFromPoint( pt ) ) / r );
        form.stroke( "rgba(255,255,255," + opacity + ")", 2*(i%20)/20 ).fill( false ).line( ln );
      }
    },
    onMouseAction: function(type, x, y, evt) {
      if (type=="move") {
        line.p1.set( x, y );
      }
    }
  });


  // 4. Start playing
  space.bindMouse();
  space.play();
}

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
