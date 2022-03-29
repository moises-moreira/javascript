let btn = window.document.getElementById('btn_click');

btn.onclick = function(){
    let num = window.document.getElementById('txt_N');
    let tab = window.document.getElementById('seltab');

    if(num.value.length != 0){
        let nC = Number(num.value);
        let c = 1;
        tab.innerHTML = '';
        while(c <= 10){
            let item = window.document.createElement('option');
            item.text = `${nC} x ${c} = ${nC*c}`;
            item.value = `tab${c}`;
            tab.appendChild(item);
            c++;
        }
    }
    else{
        window.alert('Informe um numero');
    }
}