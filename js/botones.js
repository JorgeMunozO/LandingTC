var categoria='Moda';
var eleccion='Si';

function SeleccionarCategoria(CategoryS) {
    event.preventDefault();
    document.getElementById('imagencategoria').src='./images/sectionTwo/iconosBtn/'+CategoryS+'.png';

    categoria=CategoryS
}

function EleccionTarjeta(Elect) {
    
    if(Elect=='Si'){
        document.getElementById('imgTituloSeccion2').src='./images/sectionOne/Título-Si.png'
        document.getElementById('TxtTitulo1Seccion3').innerHTML='Regístrate aquí <br>  y cumple tu meta'
        document.getElementById('TxtTitulo2Seccion3').innerHTML='para reclamar uno de nuestros <br> premios en efectivo'
    }else if(Elect=='No'){
        document.getElementById('imgTituloSeccion2').src='./images/sectionOne/Título-No.png'
        document.getElementById('TxtTitulo1Seccion3').innerHTML='Solicítala en una de nuestras oficinas'
    }

    eleccion=Elect
}

function getCategoria(){
    return categoria
}

function getEleccion(){
    return eleccion
}