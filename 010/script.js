var btn = window.document.getElementById('btn');

btn.onclick = function(){
    var ini = window.document.getElementById('txt_I');
    var fim = window.document.getElementById('txt_F');
    var pas = window.document.getElementById('txt_P');
    var res = window.document.getElementById('res');

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0){
        window.alert('ERRO!... Informe valores nos campos');
    }else{
        res.innerHTML = '<p>contando.:</p>';
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(i < f){
            for(let c = i; c <= f; c += p){
                res.innerHTML += ` <span>${c} \u{1F449}</span>`;
            }
        }else{
            for (let c = i; c >= f; c -= p){
                res.innerHTML += ` <span>${c} \u{1F449}</span>`;
            }
        }
        res.innerHTML += `<span> \u{1F3C1}</span>`;
    }

}