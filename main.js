

function tocaSom (idAudio) { 
    document.querySelector(idAudio).play(); 
}

const listaSom = document.querySelectorAll('audio')

const listaTeclas = document.querySelectorAll('.tecla');

let contador = 0;

while(contador < listaTeclas.length) {
    
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const audio = `#som_${instrumento}`;

    listaTeclas[contador].onclick = function () {
       tocaSom(audio)
        
    }
    
    contador = contador + 1;
    
   
}