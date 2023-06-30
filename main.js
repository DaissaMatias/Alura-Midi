function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
       
//DIFERENTE    E(AND)
//elemento != null  
    if(elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
         //alert("Elemento não encontrado");
        console.log('Elemento não encontrado ou seletor inválido');
    }

}

const listaDeTeclas = document.querySelectorAll('.tecla');

//let contador = 0;

//para ( declaração do contador; condição; incrementação contador = contador + 1 )
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
     
    const idAudio = `#som_${instrumento}`;//template string 

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) {     
                    //IGUAL
        if(evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
