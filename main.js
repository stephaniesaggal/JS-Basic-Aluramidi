function tocaSom (idAudio) { 
    document.querySelector(idAudio).play(); 
}

const listaSom = document.querySelectorAll('audio')

const listaTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaTeclas.length; contador++) {
    
    const tecla = listaTeclas[contador];
    const instrumento = tecla.classList[1];

    const audio = `#som_${instrumento}`;

    listaTeclas[contador].onclick = function () {
       tocaSom(audio)  
    } 

    tecla.onkeydown = function (event) {
        if(event.code === "Space" || event.code === "Enter"){
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}
