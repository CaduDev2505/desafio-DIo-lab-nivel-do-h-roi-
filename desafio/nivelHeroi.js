let heroi = "link";
let xp =  Math.floor(Math.random() * 15000);
let status = "";

if (xp < 1000) {
    status = "ferro"
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 1001 && xp < 2000) {
    status = "bronze";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 2001 && xp < 5000) {
    status = "prata";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 5001 && xp < 7000) {
    status = "ouro";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 7001 && xp < 8000) {
    status = "platina";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 8001 && xp < 9000) {
    status = "ascendente";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else if (xp > 9001 && xp < 10000) {
    status = "imortal";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
} else {
    status = "radiante";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + status);
};