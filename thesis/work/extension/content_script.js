window.setTimeout(() => {
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
}, 2000);

