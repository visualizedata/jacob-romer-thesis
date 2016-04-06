window.setTimeout(() => {
  [].slice.call(document.getElementsByTagName("h1")).map((el,i) => {
    if(i === 0) {
      el.classList.add("bounce", "animated", "textmarker", "invers")
      window.setTimeout(() => {
        $(el).typed({strings: ["Hello.", "I want to play a game", "This is a demo of what you can do with a sime content script"], typeSpeed: 10, startDelay: 200});
      }, 700);
    }
  });
}, 1000);

