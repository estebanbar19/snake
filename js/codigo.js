let bandera = false;
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

    $(window).keydown(function(event){
        let top;
        let left;
        switch (event.keyCode) {
            case 40: //tecla abajo
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                if(parseFloat(top) < 528){
                    serpiente.style.setProperty("top","" + (parseFloat(top) + 24) + "px");
                }
                break;
            case 37: //tecla izquierda
                left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
                if(parseFloat(left) > 480){
                    serpiente.style.setProperty("left","" + (parseFloat(left) - 24) + "px");
                }
                break;
            case 38: //tecla arriba
                top = window.getComputedStyle(serpiente, null).getPropertyValue("top");
                if(parseFloat(top) > 96){
                    serpiente.style.setProperty("top","" + (parseFloat(top) - 24) + "px");
                }
                break;
            case 39: //tecla derecha
                left = window.getComputedStyle(serpiente, null).getPropertyValue("left");
                if(parseFloat(left) < 912){
                    serpiente.style.setProperty("left","" + (parseFloat(left) + 24) + "px");
                }
                break;
            default:
                break;
        }
    })
});

