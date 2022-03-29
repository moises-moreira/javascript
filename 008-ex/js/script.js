function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();

    msg.innerHTML = `<h3>Agora são ${hora}:${min}.</h3>`;
    if(hora >= 0 && hora < 12){
        //BOM DIA!
        img.src = 'images/manha.jpg';
        window.document.body.style.background = '#e2cd9f';
    }else{
        if(hora >= 12 && hora < 18){
            //BOA TARDE!
            img.src = 'images/tarde.jpg';
            window.document.body.style.background = '#b9846f';
        }else{
            //BOA NOITE!
            img.src = 'images/noite.jpg';
            window.document.body.style.background = '#515154';
        }
    }
}