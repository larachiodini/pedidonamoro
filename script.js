const card = document.querySelector(".card");

function primeiraPergunta(){

card.innerHTML=`

<h1>Pergunta 1</h1>

<p style="font-size:25px;margin:30px 0;">
Você tem aura? 
</p>

<div class="botoes">

<button id="auraSim">SIM</button>

<button id="auraNao">NÃO</button>

</div>

`;

document.getElementById("auraSim").onclick=pedido;

document.getElementById("auraNao").onclick=semAura;

}

function semAura(){

card.innerHTML=`

<h1>Infelizmente...</h1>

<img src="semaura.jpg" style="width:300px;border-radius:20px;margin:25px 0;">

<p>Quem não tem aura não pode continuar 😔</p>

<button onclick="primeiraPergunta()">Tentar novamente</button>

`;

}

function pedido(){

card.innerHTML=`

<h1>Agora a pergunta de verdade ❤️</h1>

<p style="font-size:28px;margin:30px 0;">
Você aceita namorar comigo?
</p>

<div class="botoes">

<button id="sim">SIM ❤️</button>

<button id="nao">NÃO</button>

</div>

`;

const nao=document.getElementById("nao");

nao.style.position="absolute";

nao.style.left="58%";
nao.style.top="55%";

function fugir(){

const largura=window.innerWidth-nao.offsetWidth-20;
const altura=window.innerHeight-nao.offsetHeight-20;

nao.style.left=Math.random()*largura+"px";
nao.style.top=Math.random()*altura+"px";

}

nao.addEventListener("mouseenter",fugir);
nao.addEventListener("touchstart",fugir);

document.getElementById("sim").onclick=finalFeliz;

}

function finalFeliz(){

document.getElementById("musica").play();

confetti({
particleCount:250,
spread:180
});

document.body.innerHTML=`

<div class="card">

<h1>❤️ ELA DISSE SIM ❤️</h1>

<img src="foto.jpg" style="width:250px;border-radius:20px;margin:20px;">

<p>

Desde que você apareceu na minha vida, tudo ficou mais bonito.
Obrigado por ser exatamente quem você é.
❤️

</p>

</div>

`;

}

document.getElementById("continuar").onclick=primeiraPergunta;
};
