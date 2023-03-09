"use strict";

const shareBtn = document.querySelector(".share__link");
const shareMedia = document.querySelector(".share__media");

shareBtn.addEventListener("click", () => {
  shareMedia.classList.toggle("hidden");
});
