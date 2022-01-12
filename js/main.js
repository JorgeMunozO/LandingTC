var api="http://localhost:7865/"

var boton=document.getElementById('btnRegistrar')

if (boton) {
    boton.addEventListener('click', ValidacionDatos)
}

function botonx(){
    alert('asadsa')
}

function ValidacionDatos() {
    event.preventDefault();
    var DatosDocument={
        "name":document.getElementById('nombre').value,
        "type_document":document.getElementById('tipo_identidad').value,
        "documentID":document.getElementById('NoDocumento').value,
        "mail":document.getElementById('Email').value,
        "categoria":getCategoria(),
        "choice":getEleccion()
    }

    
    if(DatosDocument.name=='' || DatosDocument.type_document==null
        || DatosDocument.documentID=='' || DatosDocument.mail==''){
            alert("FALTAN DATOS POR COMPLETAR")
    }else{
        //console.log(DatosDocument)
        enviarDatos(DatosDocument)
    }
    
}

function enviarDatos(datosFormulario){
    //alert('entrando al ajax')
    $.ajax({
        url:api+'registrousertd',
        data:JSON.stringify(datosFormulario),
        type:'POST',
        contentType:'application/json',
        dataType:'json',
        cache:false,

        success:function(json){
            console.log(json)
            
       },
        error:function(xhr, status){
            alert('Error no se pudo realizar el registro')
        }
    })
}