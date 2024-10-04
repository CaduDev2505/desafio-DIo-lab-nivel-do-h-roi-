let heroi = "link";
// aqui eu usei uma função para aleatoriozar o código, assim toda vez que rodar vamos ter um resultado diferente! 
let xp =  Math.floor(Math.random() * 15000);
let ranking = "";
//adicionei uma variável para mostrar o nível de xp e o ranking do héroi 
let status = "";

if (xp < 1000) {
 ranking = "ferro"
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 1001 && xp < 2000) {
 ranking = "bronze";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 2001 && xp < 5000) {
 ranking = "prata";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 5001 && xp < 7000) {
 ranking = "ouro";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 7001 && xp < 8000) {
 ranking = "platina";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 8001 && xp < 9000) {
 ranking = "ascendente";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else if (xp > 9001 && xp < 10000) {
 ranking = "imortal";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
} else {
 ranking = "radiante";
    console.log("o heroi de nome " + heroi + " esta com o xp de " + xp + " com o ranking de " + ranking);
};
