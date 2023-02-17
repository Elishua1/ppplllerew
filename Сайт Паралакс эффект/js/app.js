window.addEventListener("scroll", (e) => {
  // это для получения сролла по оси игрика
  //   Кода мф назначаем тегу body или любому другому тегу через cssText какие-то стили текстовые из JS то здесь необходимо указывать (+=), а не просто равно. Это будет говорить а том что мы будем добавлять стили к уже имеющимся
  document.body.style.cssText += `--scrollTop: ${this.scrollY}px`;
});
WebGLSampler.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
  wrapper: ".wrapper",
  content: ".content",
});
