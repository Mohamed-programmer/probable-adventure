$(function () {
    //variables de temps i de punts
    var temps = 60;
    var punts = 0;

    var crono = setInterval(function () {
        //el temps es va restant
        temps--;
        $("#temps").text(temps);
        //depenent de quin numero surti sera un forat o un altra
        var furat = randomBetween(1, 9);
        //depenent de quin numero surti sera una bomba o un topo d'or o un nurmal
        var tipus = randomBetween(1, 3);
        //si el numaro es 1 surtira la imatge de el topo nurmal
        if (tipus == 1) {
            $(`#furat${furat} img`).attr("src", "img/1punt.png");
            $(`#furat${furat} img`).addClass("unpunt");

        }
        //si la numero es 2 surtira un topo d'or
        else if (tipus == 2) {
            $(`#furat${furat} img`).attr("src", "img/2punts.png");
            $(`#furat${furat} img`).addClass("dospunt");

        }
        //si la numero es 3 surtira un bomba
        else if (tipus == 3) {
            $(`#furat${furat} img`).attr("src", "img/bomba.png");
            $(`#furat${furat} img`).addClass("bomba");

        }
        //cada sagon la imatga surtira
        setTimeout(function () {
            $(`#furat${furat} img`).attr("src", "img/Furat.png");
            $(`#furat${furat} img`).removeClass();
        }, 1000);
        //si el temps ariva a 0 el joc sacabara
        if (temps == 0) {
            clearInterval(crono);
            alert(`S’ha acabat el joc. Tens ${punts} punts`);
        }
        //cun clickas cualsabo imatga conparara quina classe te par saver que a de fer amb els punts
        $(`#furat${furat} img`).click(function () {
            //si es un nurmal numes suma 1 punt
            if ($(this).hasClass("unpunt")) {
                punts++;
            }
            //si es un d'or suma 2
            else if ($(this).hasClass("dospunt")) {
                punts = punts + 2;
            }
            //si surt la bomba resta 5 punts i treu 5 segons
            else if ($(this).hasClass("bomba")) {
                punts = punts - 5;
                temps = temps - 5;
            }
            //mostra els punts
            $("#punts").text(punts);

        });
    }, 1000);
});