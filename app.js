const info = document.querySelector('.infos')

const allBtns = document.querySelectorAll('input[type=button]')

function val(resultat){
    form.fenetre.value = form.fenetre.value + resultat
}

/** 
function cos(resultat){
    var valeur = document.getElementById("cosid").innerHTML;
    
    valeur = valeur *Math.PI/180
    cosid.value = Math.cos(valeur)
    form.fenetre.value = form.fenetre.value + resultat
}
*/




function cos(resultat) {
    form.fenetre.value = Math.cos(resultat*Math.PI/180).toFixed(2)
}



function calcule(){
    if(form.fenetre.value == ""){
        info.innerText = `Veuillez écrire une opération`;
        allBtns.forEach(btn => {
            btn.addEventListener('click', function(){
                info.innerText = ""
            })
        }) 
    }else {
        const container = document.getElementById('fenetre').value;

        if (container.includes('(')) {
            var txt= form.fenetre.value
            init = txt.indexOf('(');
            fin = txt.indexOf(')');
            var x = txt.substr(init+1,fin-init-1)

            var y = eval(Math.cos(x))
            console.log(y)
        }

       /* form.fenetre.value = eval(form.fenetre.value);
        info.innerText = ""*/
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