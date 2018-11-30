//TAMANHO DA TELA DO JOGO
var altura = window.innerHeight
var largura = window.innerWidth

function ajudaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajudaTamanhoPalco()



//GERACAO DE POSICAO RANDOMICA
var posicaoX = Math.floor( (Math.random() * largura) ) - 90
var posicaoY = Math.floor( (Math.random() * altura) ) - 90

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY



//CRIACAO DOS ELEMENTOS
function posicaoRandomica() {
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	
	document.body.appendChild(mosquito)
}

//GERANDO TAMANHOS ALEATORIOS PARA OS MOSQUITOS
function tamanhoAleatorio() {
	var classe = Math.floor( Math.random() * 3 )
	
	switch(classe) {
		case 0: return 'mosquito1'
		case 1: return 'mosquito2'
		case 2: return 'mosquito3'
	}
}