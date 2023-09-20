function entrar() {
    const input = document.getElementById("horario")
    const crono = document.getElementById("crono")

    const input1 = document.getElementById("ihoras");
    const horas = Number(input1.value);

    const input2 = document.getElementById("inum");
    const minutos = Number(input2.value);

    const input3 = document.getElementById("isegundos");
    const segundos = Number(input3.value);

    if(horas<=0, horas==''){
        if(minutos<=0, minutos==''){
           if(segundos<=0, segundos==''){
           alert("[Erro, Minuto Invalido]")
       } else {
           input.style.display = 'none'
           crono.style.display = 'flex'
       }
    }else {
        input.style.display = 'none'
        crono.style.display = 'flex'
    }
    }else {
        input.style.display = 'none'
        crono.style.display = 'flex'
    }

}