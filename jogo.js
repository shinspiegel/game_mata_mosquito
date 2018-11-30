//TAMANHO DA TELA DO JOGO
var altura = window.innerHeight
var largura = window.innerWidth

function ajudaTamanhoPalco() {
    altura = window.innerHeight
    largura = window.innerWidth
}

ajudaTamanhoPalco()


//CRIACAO DOS ELEMENTOS
function posicaoRandomica() {
	
	//remover mosquito se ele existe
	if ( document.getElementById('mosquito') ) {
		document.getElementById('mosquito').remove()
	}

	//criando posicao alteatoria
	var posicaoX = Math.floor( Math.random() * largura ) - 90
	var posicaoY = Math.floor( Math.random() * altura ) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	//criando elemento
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	
	//inserindo elemento
	document.body.appendChild(mosquito)
}



//TAMANHO ALEATORIO
function tamanhoAleatorio() {
	var classe = Math.floor( Math.random() * 3 )

	switch(classe) {
		case 0: return 'mosquito1'
		case 1: return 'mosquito2'
		case 2: return 'mosquito3'
	}
}



//LADO ALEATORIO
function ladoAleatorio() {
	var classe = Math.floor( Math.random() * 2 )

	switch(classe) {
		case 0: return 'ladoA'
		case 1: return 'ladoB'
	}
}