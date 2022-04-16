"use strict";
var img_yunon = new Image();
img_yunon.src = "./img/yunon.png";
var bgm = new Audio();
bgm.src = "./mp3/bgm.mp3";
var isPlaying = false; // bgmが再生中かどうか
var fire = document.getElementById("fire");
var yunon = document.getElementById("yunon");
var logo = document.getElementById("logo");
var FIRE_HEIGTH = fire.clientHeight;
var slider = document.querySelector("#karyoku");
var button = document.querySelector("#playbgm");
button.addEventListener("click", function () {
    if (!isPlaying) {
        bgm.play();
        logo.classList.add("buruburu");
        button.textContent = "BGMを止める";
    }
    else {
        bgm.pause();
        logo.classList.remove("buruburu");
        button.textContent = "BGMで盛り上げる";
    }
    isPlaying = !isPlaying;
});
slider.addEventListener("input", function (e) {
    if (!(e.target instanceof HTMLInputElement)) {
        return;
    }
    var val = Number(e.target.value);
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
