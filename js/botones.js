var categoria='Moda';
var eleccion='Si';

function SeleccionarCategoria(CategoryS) {
    event.preventDefault();
    document.getElementById('imagencategoria').src='./images/sectionTwo/iconosBtn/'+CategoryS+'.png';

    categoria=CategoryS
}

const tablaSi="<table class='table1 positionTableSi' ><thead><tr class=''><th scope=''><div class=' text-center  line-normal4ta'><p class='text-fontM text-4taSection'><span class='text-fontM text-azulOsc'>Misión</span></p></div></th><th scope=''><div class=' text-center  line-normal4ta'><p class='text-fontM text-4taSection'><span class='text-fontM text-azulOsc'>Premio</span></p></div></th></tr></thead>"+
"<tbody><tr class=''><th ><div class=' text-center line-normal4ta'><p class='text-font500 text-xx'><span class='text-azulOsc'>Reclama tu Tarjeta Débito en nuestras oficinas <br>y úsala mínimo 5 veces. </span><span class='text-col-negro'>Ganan los primeros 200 <br> clientes en cumplir la meta.</span></p></div></th>"+
"<th ><div class=' text-center line-normal4ta'><p class='text-fontM text-4taSection'><span class=' text-azulOsc'>$50.000*</span></p></div></th></tr>"+
"<tr><th><div class=' text-center line-normal4ta'><p class='text-font500 text-xx'><span class=' text-azulOsc'>Realiza el mayor número de transacciones</span><span class='text-col-negro'>durante <br>la vigencia de la campaña (Minimo 8 <br> transacciones para participar) . Ganan los 25 clientes <br>con mayor número de transacciones.</span></p></div></th>"+
"<th><div class='text-center line-normal4ta'><p class='text-fontM text-4taSection'><span class=' text-azulOsc'>$200.000*</span></p></div></th></tr></tbody></table>"

const tablaNo="<table class='table1 ' style='margin: 0 auto;'><thead><tr class=''><th scope=''><div class=' text-center  line-normal4ta'><p class='text-fontM text-4taSection'><span class='text-fontM text-azulOsc'>Misión</span></p></div></th><th scope=''><div class=' text-center  line-normal4ta'><p class='text-fontM text-4taSection'><span class='text-fontM text-azulOsc'>Premio</span></p></div></th></tr></thead>"+
"<tbody><tr class=''><th ><div class=' text-center line-normal4ta'><p class='text-font500 text-xx'><span class='text-azulOsc'>Reclama tu Tarjeta Débito en nuestras oficinas <br>y úsala mínimo 5 veces. </span><span class='text-col-negro'>Ganan los primeros 200 <br> clientes en cumplir la meta.</span></p></div></th>"+
"<th ><div class=' text-center line-normal4ta'><p class='text-fontM text-4taSection'><span class=' text-azulOsc'>$50.000*</span></p></div></th></tr>"+
"<tr><th><div class=' text-center line-normal4ta'><p class='text-font500 text-xx'><span class=' text-azulOsc'>Usa tu tarjeta por lo menos una vez almes.</span></p></div></th>"+
"<th><div class=' text-center line-normal4ta'><p class='text-fontM text-4taSection'><span class=' text-azulOsc'>Cuota de Manejo Gratis</span><br><span class='text-col-negro text-font500 text-xx'>por 3 meses (enero, febreroy marzo)</p></div></th></tr>"+
"<tr><th><div class=' text-center line-normal4ta'><p class='text-font500 text-xx'><span class=' text-azulOsc'>Realiza el mayor número de transacciones</span><span class='text-col-negro'>durante <br>la vigencia de la campaña (Minimo 8 <br> transacciones para participar) . Ganan los 25 clientes <br>con mayor número de transacciones.</span></p></div></th>"+
"<th><div class='text-center line-normal4ta'><p class='text-fontM text-4taSection'><span class=' text-azulOsc'>$200.000*</span></p></div></th></tr></tbody></table>"

function EleccionTarjeta(Elect) {
    
    if(Elect=='Si'){
        document.getElementById('imgTituloSeccion2').src='./images/sectionOne/Título-Si.png'
        document.getElementById('TxtTitulo1Seccion3').innerHTML='Regístrate aquí <br>  y cumple tu meta'
        document.getElementById('TxtTitulo2Seccion3').innerHTML='para reclamar uno de nuestros <br> premios en efectivo'
        document.getElementById('Titulo1Seccion4').innerHTML="<span class='text-col-negro'>Gana dinero usando <br> tu <span class='text-azulOsc'>Tarjeta Débito Giros y Finanzas</span>"
        document.getElementById('TablaSeccion4').innerHTML=tablaSi
    }else if(Elect=='No'){
        document.getElementById('imgTituloSeccion2').src='./images/sectionOne/Título-No.png'
        document.getElementById('TxtTitulo1Seccion3').innerHTML='Solicítala en una de nuestras oficinas y Regístrate aquí <br>'
        document.getElementById('TxtTitulo2Seccion3').innerHTML='para cumplir tu meta y reclamar uno de nuestros premios en efectivo.'
        document.getElementById('Titulo1Seccion4').innerHTML="<span class='text-col-negro'>Gana dinero solicitando y usando <br> tu <span class='text-azulOsc'>Tarjeta Débito Giros y Finanzas</span>"
        document.getElementById('TablaSeccion4').innerHTML=tablaNo
    }

    eleccion=Elect
}

function getCategoria(){
    return categoria
}

function getEleccion(){
    return eleccion
}