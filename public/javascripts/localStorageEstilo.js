function modificarEstiloLocalStorage(){
    var estilo=document.getElementById("linkEstilo").getAttribute("data-color");

    if (typeof (localStorage) !== "undefined") {;
        localStorage.setItem('estilo',estilo); 
    }

    $.post("/estiloUsuario",{'estilo': estilo});
}

$( window ).on( "load", function(req, res) { 

    $.get("/estiloUsuario", function (estilo) {
        console.log("entra a estilo usuario"); 
        if(estilo){
            cambiarEstilo(estilo);
        }
        else{
            if (typeof (localStorage) !== "undefined") {
                if(localStorage.getItem('estilo') !== null){
                    cambiarEstilo(localStorage.getItem('estilo')); 
                }
            }
        } 
        $('body').show(); 
    });
    
});

