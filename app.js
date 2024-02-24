const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type=button]')

function val(resultat){
    form.fenetre.value = form.fenetre.value + resultat
}



function cos(resultat) {
    form.fenetre.value = Math.cos(resultat*Math.PI/180).toFixed(2)
}


function sin(resultat) {
    form.fenetre.value = Math.sin(resultat*Math.PI/180).toFixed(2)
}


function tan(resultat) {
    form.fenetre.value = Math.tan(resultat*Math.PI/180).toFixed(2)
}


function arcos(resultat) {
    form.fenetre.value = Math.arccos(resultat*Math.PI/180).toFixed(2)
}


function arcsin(resultat) {
    form.fenetre.value = Math.arcsin(resultat*Math.PI/180).toFixed(2)
}


function arctan(resultat) {
    form.fenetre.value = Math.arctan(resultat*Math.PI/180).toFixed(2)
}


function sqrt(resultat) {
    form.fenetre.value = Math.sqrt(resultat).toFixed(2)
}


function pi() {
    return Math.PI
}

function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = `Veuillez écrire une opération`;
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""
            })
        }) 
    }
    else {
        const container = document.getElementById('fenetre').value;

        if (container.includes('cos(')) {
            var txt= form.fenetre.value
            init = txt.indexOf('(');
            fin = txt.indexOf(')');
            var x = txt.substr(init+1,fin-init-1);

            var vcos =  Math.cos(x*Math.PI/180).toFixed(2);
            
            let text = form.fenetre.value
            let result = text.replace(`cos(${x})`, `${vcos}`)
            form.fenetre.value = result

        }
        if (container.includes(',')) {
            form.fenetre.value = container.replace(/,/g, '.');
        }
        form.fenetre.value = 
        form.fenetre.value = eval(form.fenetre.value);
        info.innerText = ""
    }

}

function suppr(){
    form.fenetre.value = "";
}

function func(){
    trigo.style = "visibility:hidden";
    hist.style = "visibility:hidden";
    funcvar.style = "visibility:visible";
}

function trigof(){
    funcvar.style = "visibility:hidden";
    hist.style = "visibility:hidden";
    trigo.style = "visibility:visible";
}


function histf(){
    funcvar.style = "visibility:hidden";
    trigo.style = "visibility:hidden";
    hist.style = "visibility:visible";
}
