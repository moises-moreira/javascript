let btnAdd = window.document.getElementById('add');
let btnFin = window.document.getElementById('fin');

let sel = window.document.getElementById('sel');
let res = window.document.getElementById('res');

let v = [];

btnAdd.onclick = function(){
    let n = window.document.getElementById('txtn');
    let nC = Number(n.value);

    if(nC >= 1 && nC <= 100){
        if(v.indexOf(nC) == -1){
            v.push(nC);
            let item = window.document.createElement('option');
            item.text = `Valor ${nC} Add`;
            sel.appendChild(item);
            res.innerHTML = '';
            n.value = '';
            n.focus();
        }
        else{
            window.alert('Não pode colocar o mesmo número');
        }
    }
    else{
        window.alert('Número Inválido!');
    }
}

btnFin.onclick = function(){
    if(v.length >= 1){
        let s = 0;
        v.sort();
        for (var c = 0; c < v.length; c++){
            s += v[c];
        }
        res.innerHTML = `<h3>Ao todo temos ${v.length} cadastrados</h3>`;
        res.innerHTML += `<h3>O maoir valor é ${v[v.length-1]}</h3>`;
        res.innerHTML += `<h3>o menor valor é ${v[0]}</h3>`;
        res.innerHTML += `<h3>Somado todos os valores, temos ${s}</h3>`;
        res.innerHTML += `<h3>A média dos valores digitados é ${s / v.length}</h3>`;

    }
    else{
        window.alert('Adicione primeiro antes de finalizar!');
    }
}