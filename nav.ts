let xAxis: number | undefined,
  yAxis: number | undefined,
  xs: number | undefined,
  ys: number | undefined,
  count = false;

const scrollAnimation = (event: Event) => {
  xAxis = window.scrollX;
  yAxis = window.scrollY;
  if (yAxis && yAxis < 40) {
    document.querySelector("nav")?.classList.remove("activeNav");
    document.querySelector(".navbar")?.classList.remove("activeNavbar");
    document.querySelector(".logo")?.classList.remove("activeLogo");
  } else if (yAxis && yAxis > 40) {
    document.querySelector("nav")?.classList.add("activeNav");
    document.querySelector(".navbar")?.classList.add("activeNavbar");
    document.querySelector(".logo")?.classList.add("activeLogo");
  }
};

const stopScroll = () => {
  if (count) {
    window.scroll(xs ?? 0, ys ?? 0);
  }
};

document.querySelector(".menu")?.addEventListener("click", function () {
  this.classList.toggle("activeMenu");
  document.querySelector("nav")?.classList.toggle("navOnOff");
  count = !count;
  xs = window.scrollX;
  ys = window.scrollY;
  window.addEventListener("scroll", stopScroll);
});

window.addEventListener("scroll", scrollAnimation);
