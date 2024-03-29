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

        if (container.includes('cos(')) {
            var txt= form.fenetre.value
            init = txt.indexOf('(');
            fin = txt.indexOf(')');
            var x = txt.substr(init+1,fin-init-1);

            var vcos =  Math.cos(x*Math.PI/180).toFixed(2);
            
            let text = form.fenetre.value
            let result = text.replace(`cos(${x})`, `${vcos}`)
            form.fenetre.value = result

        }  if (container.includes('sin(')){
            var txt2= form.fenetre.value
            init = txt2.indexOf('(');
            fin = txt2.indexOf(')');
            var x = txt2.substr(init+1,fin-init-1);

            var vsin =  Math.sin(x*Math.PI/180).toFixed(2);
            
            let text2 = form.fenetre.value
            let result = text2.replace(`sin(${x})`, `${vsin}`)
            form.fenetre.value = result
        }  if (container.includes('tan(')){
            var txt3= form.fenetre.value
            init = txt3.indexOf('(');
            fin = txt3.indexOf(')');
            var x = txt3.substr(init+1,fin-init-1);

            var vtan =  Math.tan(x*Math.PI/180).toFixed(2);
            
            let text3 = form.fenetre.value
            let result = text3.replace(`tan(${x})`, `${vtan}`)
            form.fenetre.value = result
        }
        form.fenetre.value = eval(form.fenetre.value);
        info.innerText = ""
    }
    

}

function suppr(){
    form.fenetre.value = "";
}

function func(){
    funcvar.style = "visibility:visible";
}
