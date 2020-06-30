"use strict";

const hidden = document.querySelector('.hidden');
const wrap = document.querySelector('.wrap');
const showButtonWrap = document.querySelector('button');
const closeButtonWrap = document.querySelector('.crest');

showButtonWrap.addEventListener("click", function () {
    wrap.classList.remove('hidden');
});

closeButtonWrap.addEventListener("click", function () {
    wrap.classList.add('hidden');
});