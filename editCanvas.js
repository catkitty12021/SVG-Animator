const canvas = document.getElementById("drawCanvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 150, 75);
const mySVG = ctx.getSerializedSvg();