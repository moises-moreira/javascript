var agora = new Date();
var diaSem = agora.getDay();

switch(diaSem){
    case 1:
        GetNomeDiaSem('Domingo!');
        break;
    case 2:
        GetNomeDiaSem('Segunda!');
        break;
    case 3:
        GetNomeDiaSem('Terça!');
        break;
    case 4:
        GetNomeDiaSem('Quarta');
        break;
    case 5:
        GetNomeDiaSem('Quinta!');
        break;
    case 6:
        GetNomeDiaSem('Sexta!');
        break;
}

function GetNomeDiaSem(dia){
    console.log(dia);
}