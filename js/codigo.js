let bandera = false;
let coordenada = [0,0];
$("<table></table>",{"id": "tabla"}).appendTo("body");
$(document).ready(function(){
    for(let i = 0; i < 19; i++){
        $("<tr></tr>",{"id": i+""}).appendTo("#tabla");
        for(let j = 0; j < 19; j++){
            let clase = "";
            if((i+j) % 2){
                clase = "oscuro";
            }else{
                clase = "claro";
            }
            $("<td></td>", {"class": clase}).appendTo("#"+i);
        }
    }
    $("<td></td>",{"id": "serpiente"}).appendTo("body");
    serpiente = $("#serpiente")[0];

    function mostrarAlerta(a, b) {
        if (parseFloat(a)==b && !bandera) {
            bandera = true;
            $("<h1>GAME OVER</h1>",{"id": "titulo"}).appendTo("body");
            $("#serpiente").hide();
        }
    }
    let top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
    let left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
    $(window).keydown(function(event){
        top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
        left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
        switch (event.keyCode) {
            case 37: //tecla izquierda
                if(parseFloat(left) > 480){
                    serpiente.style.setProperty("left","" + (parseFloat(left) - 24) + "px");
                    esPunto(left, top);
                }
                mostrarAlerta(left,480);
                break;
            case 38: //tecla arriba
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                if(parseFloat(top) > 96){
                    serpiente.style.setProperty("top","" + (parseFloat(top) - 24) + "px");
                }
                mostrarAlerta(top,96);
                break;
            case 39: //tecla derecha
                left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
                if(parseFloat(left) < 912){
                    serpiente.style.setProperty("left","" + (parseFloat(left) + 24) + "px");
                }
                mostrarAlerta(left,912);
                break;
            case 40: //tecla abajo
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                if(parseFloat(top) < 528){
                    serpiente.style.setProperty("top","" + (parseFloat(top) + 24) + "px");
                }
                mostrarAlerta(top,528);
                break;
            default:
                break;
        }
        crecimiento();
    })
    
    punto();

    function punto() {
        let casilla = Math.floor(Math.random()*361);
        let celda = $("#tabla").find("tr").find("td")[casilla];
        $("<img src='img/punto.png'>",{"id": "imagen"}).appendTo(celda);
        coordenada[0] = celda.offsetTop;
        coordenada[1] = celda.offsetLeft;
        console.log(coordenada[0]+" "+coordenada[1]);
    }

    function esPunto(x, y){
        
    }

    function crecimiento(){
        
        top = parseInt(window.getComputedStyle(serpiente, null).getPropertyValue("top").replace("px",""))-parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("top").replace("px",""));
        left = parseInt(window.getComputedStyle(serpiente, null).getPropertyValue("left").replace("px",""))-parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("left").replace("px",""));
        console.log(top+" "+left);
        if(false){

        }
    }

});

