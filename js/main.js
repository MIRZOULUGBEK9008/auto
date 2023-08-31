const m = document.querySelector("#message");
const l = document.querySelector("#l");
const c = document.querySelector("#close");
const er = document.querySelector("#er");
const captchaimg = document.querySelector("#captchaimg");
const captcha = document.querySelector("#captcha");
const newcaptcha = document.querySelector("#newcaptcha");
let r;
const loc = [
  ["img/1-removebg-preview.png", 2],
  ["img/2-removebg-preview.png", 3],
  ["img/3-removebg-preview.png", 7],
  ["img/4-removebg-preview.png", 4],
  ["img/5-removebg-preview.png", 5],
  ["img/6-removebg-preview.png", 3],
  ["img/7-removebg-preview.png", 4],
  ["img/8-removebg-preview.png", 3],
  ["img/9-removebg-preview.png", 9]
];
window.onload = () => {
  r = Math.round(Math.random() * (loc.length - 1));
  captchaimg.src = loc[r][0];
};
c.addEventListener("click", () => {
  m.style.display = "none";
});
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (input.value !== "9685") {
    er.style.display = "block";
    input.style = `
    border-color: #a94442;
    `;
    input.classList.add("e");
    l.style.color = "#a94442";
  }
  if (num.value != loc[r][1]) {
    er2.style.display = "block";
    num.style = `
    border-color: #a94442;
    `;
    l2.style.color = "#a94442";
  }
  if (input.value == "9685" && num.value == loc[r][1]) {
    window.location = "./file/2.pdf";
  }
});



captcha.addEventListener("click", () => {
  r = Math.round(Math.random() * (loc.length - 1));
  captchaimg.src = loc[r][0];
});

newcaptcha.addEventListener("click", () => {
  r = Math.round(Math.random() * (loc.length - 1));
  captchaimg.src = loc[r][0];
});
