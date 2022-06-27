var bloco1 = document.getElementsByClassName("bloco1")
var bloco2 = document.getElementsByClassName("bloco2")



for (let x=0; x<bloco1.length; x++) {
    bloco1[x].addEventListener("mouseover", aplicarEstilo);
    bloco1[x].addEventListener("mouseout", sair)
    }


    function aplicarEstilo(p) {
        if( bloco1 !== bloco2 ){
            p.target.document.getElementsByClassName("bloco1").style.border = "5px solid black"
            p.target.document.getElementsByClassName("bloco2").style.border = "5px solid red"
        }

    }

    function sair(p) {
        if( bloco1 !== bloco2 ){
            p.target.document.getElementsByClassName("bloco1").style.border = "5px solid white"
            p.target.document.getElementsByClassName("bloco2").style.border = "5px solid white"
    }

    }





