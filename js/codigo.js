let bandera = false;
let coordenada = [0,0];
var celda;
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
    let movimientoArriba, movimientoAbajo, movimientoIzquierda, movimientoDerecha;
    var keyAux;
    $(window).keydown(function(event){
        let top;
        let left;
        console.log(event.keyCode);
        keyAux = event.keyCode;
        // event.keyCode != 27  ||
        // while((event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40) && $("#serpiente").is(":visible")){
        //     setTimeout(function(){mover(keyAux)},10000);
        //     esPunto();
        // }

        if(event.keyCode==37 ){
            if(movimientoIzquierda == null){
                movimientoIzquierda = setInterval(function(){
                    mover(keyAux);
                    esPunto()
                },200);
            };
            clearInterval(movimientoArriba);
            clearInterval(movimientoAbajo);
            clearInterval(movimientoDerecha);
            movimientoArriba = null;
            movimientoAbajo = null;
            movimientoDerecha = null;
        }

        if(event.keyCode==38){
            if(movimientoArriba == null){
                movimientoArriba = setInterval(function(){mover(keyAux);esPunto()},200);
            }
            clearInterval(movimientoIzquierda);
            clearInterval(movimientoAbajo);
            clearInterval(movimientoDerecha);
            movimientoIzquierda = null;
            movimientoAbajo = null;
            movimientoDerecha = null;
        }
        
        if(event.keyCode==39){
            if(movimientoDerecha == null){
                movimientoDerecha = setInterval(function(){mover(keyAux);esPunto()},200);
            }
            clearInterval(movimientoArriba);
            clearInterval(movimientoAbajo);
            clearInterval(movimientoIzquierda);
            movimientoArriba = null;
            movimientoAbajo = null;
            movimientoIzquierda = null;
        }

        if(event.keyCode==40){
            if(movimientoAbajo == null){
                movimientoAbajo = setInterval(function(){mover(keyAux);esPunto()},200);
            }
            clearInterval(movimientoArriba);
            clearInterval(movimientoIzquierda);
            clearInterval(movimientoDerecha);
            movimientoArriba = null;
            movimientoIzquierda = null;
            movimientoDerecha = null;
        }
    })

    punto();

    function punto() {
        let casilla = Math.floor(Math.random()*361);
        celda = $("#tabla").find("tr").find("td")[casilla];
        $("<img src='img/punto.png'>",{"id": "imagen"}).appendTo(celda);
    }

    function esPunto(){
        let topSerp = parseInt(window.getComputedStyle(serpiente, null).getPropertyValue("top").replace("px",""))-parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("top").replace("px",""))-(parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("border").substr(0,2))/2);
        let leftSerp = parseInt(window.getComputedStyle(serpiente, null).getPropertyValue("left").replace("px",""))-parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("left").replace("px",""))-(parseInt(window.getComputedStyle(document.getElementById("tabla"), null).getPropertyValue("border").substr(0,2))/2);
        if(topSerp == 16){
            topSerp = 0;
        }
        if(leftSerp == 16){
            leftSerp = 0;
        }
        if(celda.offsetLeft == leftSerp && celda.offsetTop == topSerp){
            celda.innerHTML = "";
            punto();
        }
    }

    function mover(key){
        switch (key) {
            case 37: //tecla izquierda
                left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
                moverSnake("left",left,-24,480,"mayor");
                mostrarAlerta(left,480);
            break;
            case 38: //tecla arriba
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                moverSnake("top",top,-24,96,"mayor");
                mostrarAlerta(top,96);
                break;
            case 39: //tecla derecha
                left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
                moverSnake("left",left,+24,912,"menor");
                mostrarAlerta(left,912);
                break;
            case 40: //tecla abajo
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                moverSnake("top",top,+24,528,"menor");
                mostrarAlerta(top,528);
                break;
            default:
            break;
        }
    }

    function moverSnake(string, object, pxs, limite, operador){
        switch(operador){
            case "menor":
                if(parseFloat(object) < limite){
                    serpiente.style.setProperty(string,"" + (parseFloat(object) + pxs) + "px");
                }else{
                    clearInterval(movimientoArriba);
                    clearInterval(movimientoIzquierda);
                    clearInterval(movimientoDerecha);
                    clearInterval(movimientoAbajo);
                }
            break;
            case "mayor":
                if(parseFloat(object) > limite){
                    serpiente.style.setProperty(string,"" + (parseFloat(object) + pxs) + "px");
                }else{
                    clearInterval(movimientoArriba);
                    clearInterval(movimientoIzquierda);
                    clearInterval(movimientoDerecha);
                    clearInterval(movimientoAbajo);
                }
            break;
        }
    }
});
