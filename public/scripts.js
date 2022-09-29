function mudaFoto (foto) {
    document.getElementById("icone").src = foto;
}

window.onscroll = function(){myFunction()};

var menu = document.getElementById("menu");

var sticky = menu.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
    menu.classList.add("sticky")
    } else {
        menu.classList.remove("sticky")
    }
}

function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);	
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot; 
}

function specs(foto, h2, topo, pe) {
    document.getElementById("tela").src= foto;
    document.getElementById("topo").textContent= topo;
    document.getElementById("contem").textContent= h2;
    document.getElementById("pe").textContent= pe;

}

