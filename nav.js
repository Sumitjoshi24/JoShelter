var _a;
var xAxis, yAxis, xs, ys, count = false;
var scrollAnimation = function (event) {
    var _a, _b, _c, _d, _e, _f;
    xAxis = window.scrollX;
    yAxis = window.scrollY;
    if (yAxis && yAxis < 40) {
        (_a = document.querySelector("nav")) === null || _a === void 0 ? void 0 : _a.classList.remove("activeNav");
        (_b = document.querySelector(".navbar")) === null || _b === void 0 ? void 0 : _b.classList.remove("activeNavbar");
        (_c = document.querySelector(".logo")) === null || _c === void 0 ? void 0 : _c.classList.remove("activeLogo");
    }
    else if (yAxis && yAxis > 40) {
        (_d = document.querySelector("nav")) === null || _d === void 0 ? void 0 : _d.classList.add("activeNav");
        (_e = document.querySelector(".navbar")) === null || _e === void 0 ? void 0 : _e.classList.add("activeNavbar");
        (_f = document.querySelector(".logo")) === null || _f === void 0 ? void 0 : _f.classList.add("activeLogo");
    }
};
var stopScroll = function () {
    if (count) {
        window.scroll(xs !== null && xs !== void 0 ? xs : 0, ys !== null && ys !== void 0 ? ys : 0);
    }
};
(_a = document.querySelector(".menu")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    var _a;
    this.classList.toggle("activeMenu");
    (_a = document.querySelector("nav")) === null || _a === void 0 ? void 0 : _a.classList.toggle("navOnOff");
    count = !count;
    xs = window.scrollX;
    ys = window.scrollY;
    window.addEventListener("scroll", stopScroll);
});
window.addEventListener("scroll", scrollAnimation);
