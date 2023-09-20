function entrar() {
    const input = document.getElementById("horario")
    const crono = document.getElementById("crono")

    const input1 = document.getElementById("ihoras");
    const horas = Number(input1.value);

    const input2 = document.getElementById("inum");
    const minutos = Number(input2.value);

    const input3 = document.getElementById("isegundos");
    const segundos = Number(input3.value);

    if(horas==''){
        if(minutos==''){
           if(segundos==''){
           alert("[Erro, Minuto Invalido]")
       }else if(segundos<=0, segundos>60, segundos<=-1){
        alert("[Erro, Minuto Invalido]")
    } else {
           input.style.display = 'none'
           crono.style.display = 'flex'
       }
    }else if(minutos<=0, minutos>60, minutos<=-1){
        alert("[Erro, Minuto Invalido]")
    }else {
        input.style.display = 'none'
        crono.style.display = 'flex'
    }
    }else if(horas<=0, horas>60, horas<=-1){
        alert("[Erro, Minuto Invalido]")
    } else{
        input.style.display = 'none'
        crono.style.display = 'flex'
    }

    const horario1 = document.getElementById("horash");
    const horario2 = document.getElementById("minutosh");
    const horario3 = document.getElementById("segundosh");
}