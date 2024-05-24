const inItBackground = () => {
  const sizeItem = 50;
  const cols = parseInt(window.innerWidth / sizeItem);
  const rows = parseInt(window.innerHeight / sizeItem);
  const main = document.getElementById("main-bg");

  for (i = 0, size = cols * rows; i < size; ++i) {
    const item = document.createElement("div");
    item.className = "el";
    item.style.width = `${sizeItem}px`;
    item.style.height = `${sizeItem}px`;
    main.appendChild(item);
  }

  const randomBg = () =>
    anime({
      targets: "#main-bg .el",
      // scale: [
      //   { value: 0.1, easing: "easeOutSine", duration: 500 },
      //   { value: 1, easing: "easeInOutQuad", duration: 1300 },
      // ],
      // borderColor: [
      //   { value: "rgba(20,230,20,0.4)", easing: "easeOutSine", duration: 500 },
      //   { value: "rgba(0,0,0,0)", easing: "easeOutSine", duration: 1300 },
      // ],
      // backgroundColor: [
      //   {
      //     value: "rgba(24, 117, 19, 0.4)",
      //     easing: "easeInOutQuad",
      //     duration: 500,
      //   },
      //   { value: "rgba(0,0,0,0)", easing: "easeOutSine", duration: 1300 },
      // ],
      // backgroundColor: function () {
      //   return ["rgba(24, 117, 19, 0.4)", "rgba(0,0,0,0)"][anime.random(0, 1)];
      // },
      // borderColor: function () {
      //   return ["rgba(108, 255, 142, 0.675)", "rgba(0,0,0,0)"][
      //     anime.random(0, 1)
      //   ];
      // },
      borderRightColor: function () {
        return ["rgba(108, 255, 142, 0.675)", "rgba(0,0,0,0)"][
          anime.random(0, 1)
        ];
      },
      borderBottomColor: function () {
        return ["rgba(108, 255, 142, 0.675)", "rgba(0,0,0,0)"][
          anime.random(0, 1)
        ];
      },
      // delay: anime.stagger(100, 100),
      // loop: true,

      // easing: "easeInCubic",
      duration: 1500,
      // delay: anime.stagger(100, { grid: [cols, rows], from: "first" }),
      complete: randomBg,
    });
  randomBg();
};

document.addEventListener("DOMContentLoaded", () => {
  inItBackground();
});
