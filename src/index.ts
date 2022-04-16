let img_yunon = new Image();
img_yunon.src = "./img/yunon.png";

let bgm = new Audio();
bgm.src = "./mp3/bgm.mp3";

var isPlaying = false; // bgmが再生中かどうか

const fire = document.getElementById("fire")!;
const yunon = document.getElementById("yunon")!;
const logo = document.getElementById("logo")!;

const FIRE_HEIGTH = fire.clientHeight;

const slider = document.querySelector("#karyoku")!;
const button = document.querySelector("#playbgm")!;

button.addEventListener("click", () => {
    if (!isPlaying) {
        bgm.play();
        logo.classList.add("buruburu");
        button.textContent = "BGMを止める";
    } else {
        bgm.pause();
        logo.classList.remove("buruburu");
        button.textContent = "BGMで盛り上げる";
    }
    isPlaying = !isPlaying;
});

slider.addEventListener("input", (e) => {
    if (!(e.target instanceof HTMLInputElement)) {
        return;
    }
    let val = Number(e.target.value);
    if (fire instanceof HTMLImageElement) {
        fire.height = FIRE_HEIGTH - 10 * (1 - val);
    }
    document.documentElement.style.setProperty("--move", String(1 + val) + "px");
    document.documentElement.style.setProperty("--rotate", String(val) + "deg");
});
/*
const yunon = document.querySelector<HTMLCanvasElement>('#yunon')!;

const ctxSrc = yunon.getContext("2d")!;

img_yunon.addEventListener('load', () => {
  ctxSrc.drawImage(img_yunon, 0, 0)
})
let outImage = ctxSrc.createImageData(256, 256)

const testElem = document.getElementById("test")!;
testElem.innerHTML = '<span class="buruburu">asdfg</span>';
*/