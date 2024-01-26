//Funcion que indica el link seleccionado
function seleccionar(link) {
    let opciones = document.querySelectorAll('#links a');
    opciones[0].className ="";
    opciones[1].className ="";
    opciones[2].className ="";
    opciones[3].className ="";
    opciones[4].className ="";
    link.className = "seleccionado";
//Hacemos desaparecer el menu una vez seleccionada una opcion
    let x = document.getElementById("nav");
    x.className = "";
}    



//Funcion que muestra el menu responsive
    function responsiveMenu()
    {
        let x = document.getElementById("nav");
        if(x.className === ""){
            x.className = "responsive";
        }else{
            x.className = "";
        }
    }

    function efectoHabilidades() {
        let skills = document.getElementById("skills");
        let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
        if (distancia_skills >= 300) {
            document.getElementById("html").classList.add("barra-animada1");
            document.getElementById("javascript").classList.add("barra-animada2");
            document.getElementById("bd").classList.add("barra-animada3");
            document.getElementById("dieseño-web").classList.add("barra-animada4");
        }
    }
    
    window.onscroll = function () {
        efectoHabilidades();
    };
 