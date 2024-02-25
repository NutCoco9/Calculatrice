let memoire = ""

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
    form.fenetre.value = form.fenetre.value + Math.PI
    
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

	if (container.includes('sqrt(')) {
            var txt= form.fenetre.value
            init = txt.indexOf('(');
            fin = txt.indexOf(')');
            var x = txt.substr(init+1,fin-init-1);

            var vsqrt =  Math.sqrt(x*Math.PI/180).toFixed(2);
            
            let text = form.fenetre.value
            let result = text.replace(`sqrt(${x})`, `${vsqrt}`)
            form.fenetre.value = result

        }
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
        if (container.includes('sin(')){
            var txt2= form.fenetre.value
            init = txt2.indexOf('(');
            fin = txt2.indexOf(')');
            var x = txt2.substr(init+1,fin-init-1);

            var vsin =  Math.sin(x*Math.PI/180).toFixed(2);
            
            let text2 = form.fenetre.value
            let result = text2.replace(`sin(${x})`, `${vsin}`)
            form.fenetre.value = result
        }  
	if (container.includes('tan(')){
            var txt3= form.fenetre.value
            init = txt3.indexOf('(');
            fin = txt3.indexOf(')');
            var x = txt3.substr(init+1,fin-init-1);

            var vtan =  Math.tan(x*Math.PI/180).toFixed(2);
            
            let text3 = form.fenetre.value
            let result = text3.replace(`tan(${x})`, `${vtan}`)
            form.fenetre.value = result
        }
	if (container.includes('arccos(')) {
            var txt= form.fenetre.value
            init = txt.indexOf('(');
            fin = txt.indexOf(')');
            var x = txt.substr(init+1,fin-init-1);

            var varccos =  Math.arccos(x*Math.PI/180).toFixed(2);
            
            let text = form.fenetre.value
            let result = text.replace(`arccos(${x})`, `${varccos}`)
            form.fenetre.value = result

        }  
	if (container.includes('arcsin(')){
            var txt2= form.fenetre.value
            init = txt2.indexOf('(');
            fin = txt2.indexOf(')');
            var x = txt2.substr(init+1,fin-init-1);

            var varcsin =  Math.arcsin(x*Math.PI/180).toFixed(2);
            
            let text2 = form.fenetre.value
            let result = text2.replace(`arcsin(${x})`, `${varcsin}`)
            form.fenetre.value = result
        }  
	if (container.includes('tan(')){
            var txt3= form.fenetre.value
            init = txt3.indexOf('(');
            fin = txt3.indexOf(')');
            var x = txt3.substr(init+1,fin-init-1);

            var vtan =  Math.tan(x*Math.PI/180).toFixed(2);
            
            let text3 = form.fenetre.value
            let result = text3.replace(`tan(${x})`, `${vtan}`)
            form.fenetre.value = result
        }
	if (container.includes(',')) {
            form.fenetre.value = container.replace(/,/g, '.');
        }
        if (container.includes('x')) {
            form.fenetre.value = form.fenetre.value.replace(/x/g, '*');        }
        let a=eval(form.fenetre.value);
        a=a.toString();
        if(a.includes(".")){
            a=a.replace(/\./g, ',');
        }
        form.fenetre.value = a;
        info.innerText = "";
    }

}

function suppr(){
    memoire = form.fenetre.value;
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

function historique(){
    form.fenetre.value=memoire;
}
