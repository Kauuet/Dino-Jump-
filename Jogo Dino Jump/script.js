let dino = document.getElementById("dino"); 
let cactus = document.getElementById("cactus");

window.addEventListener("keydown", jump) //adiciona um evento de clique no dino para que ele pule

function jump() {
    dino.classList.add("jump");
    setTimeout(() => {
        dino.classList.remove("jump");
    }, 1000)//remove a classe "jump" após 2 segundos para que o dino volte à posição original
}  


 
setInterval(()=>{
    let cactusPosition = cactus.offsetLeft; //pega a posição do cacto
    let dinoPosition = dino.offsetTop; //pega a posição do dino
    if(cactusPosition <= 68 && dinoPosition >= 358) { //verifica se o cacto está na posição do dino e se o dino não está pulando
    cactus.style.animation = "none"; //para a animação do cacto
 }
}, 10) //verifica a posição do cacto a cada 10 milissegundos

