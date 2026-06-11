const continuar = document.getElementById("continuar");
const pergunta = document.getElementById("pergunta");
const titulo = document.getElementById("titulo");
const texto = document.getElementById("texto");

continuar.onclick = () => {

titulo.innerHTML = "Última pergunta...";
texto.style.display = "none";
continuar.style.display = "none";

pergunta.classList.remove("escondido");

};

const nao = document.getElementById("nao");

nao.style.left="58%";
nao.style.top="57%";

function fugir(){

const largura = window.innerWidth-nao.offsetWidth-20;
const altura = window.innerHeight-nao.offsetHeight-20;

const x=Math.random()*largura;
const y=Math.random()*altura;

nao.style.left=x+"px";
nao.style.top=y+"px";

}

nao.addEventListener("mouseenter", fugir);
nao.addEventListener("touchstart", fugir);

const sim=document.getElementById("sim");

sim.onclick=()=>{

document.getElementById("musica").play();

confetti({
particleCount:250,
spread:180
});

document.body.innerHTML=`

<div class="card" id="final">


<p style="font-size:22px">

Desde que você entrou na minha vida, tudo ficou mais leve.
Seu sorriso é um dos meus lugares favoritos, e cada momento ao seu lado
me faz ter ainda mais certeza de que quero viver muitos outros com você.

Obrigado por ser exatamente quem você é.

❤️

</p>

<h2>
Esse não é o pedido oficial ta kkkkkkkkkkkkk
</h2>

</div>

`;

};