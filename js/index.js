function entrar() {
  const input = document.getElementById("horario");
  const crono = document.getElementById("crono");
  const voltar = document.getElementById("voltar");
  const recomecar = document.getElementById("recomecar");
  const parar = document.getElementById("parar");
  const continuar = document.getElementById("continuar");

  const input1 = document.getElementById("ihoras");
  let horas = Number(input1.value);

  const input2 = document.getElementById("inum");
  let minutos = Number(input2.value);

  const input3 = document.getElementById("isegundos");
  let segundos = Number(input3.value);

  let setar = 0

  if (horas == "") {
    if (minutos == "") {
      if (segundos == "") {
        alert("[Erro, Minuto Invalido]");
      } else if ((segundos <= 0, segundos >= 60, segundos <= -1)) {
        alert("[Erro, Minuto Invalido]");
      } else {
        input.style.display = "none";
        crono.style.display = "flex";
        console.log(segundos);
      }
    } else if ((minutos <= 0, minutos >= 60, minutos <= -1)) {
      alert("[Erro, Minuto Invalido]");
    } else {
      input.style.display = "none";
      crono.style.display = "flex";
      console.log(minutos);
    }
  } else if ((horas <= 0, horas > 60, horas <= -1)) {
    alert("[Erro, Minuto Invalido]");
  } else {
    input.style.display = "none";
    crono.style.display = "flex";
    console.log(horas);
    console.log(minutos);
    console.log(segundos);
  }
  if (horas >= 60) {
    horas = 60;
  }
  if (minutos >= 60) {
    minutos = 60;
  }
  if (segundos >= 60) {
    segundos = 60;
  }

  const horario1 = document.getElementById("horash");
  const horario2 = document.getElementById("minutosh");
  const horario3 = document.getElementById("segundosh");

  if (horas < 10) {
    horario1.innerText = `0${horas}:`;
  } else {
    horario1.innerText = `${horas}:`;
  }
  if (minutos < 10) {
    horario2.innerText = `0${minutos}:`;
  } else {
    horario2.innerText = `${minutos}:`;
  }
  if (segundos < 10) {
    horario3.textContent = `0${segundos}`;
  } else {
    horario3.textContent = `${segundos}`;
  }

  let set3 = setInterval(tempo3, 1000);
  continuar.addEventListener("click", function continuar1() {
    parar.style.display = "flex";
    continuar.style.display = "none";
    setar = 1;
    if(setar == 1){
      set3 = setInterval(tempo3, 1000);
    } else {
      clearInterval(set3)
    }
  });

  function tempo3() {
    segundos -= 1;
    if (segundos < 10) {
      horario3.textContent = `0${segundos}`;
    } else {
      horario3.textContent = `${segundos}`;
    }
    if (segundos < 1) {
      if (!minutos < 1) {
        minutos -= 1;
        segundos += 59;
        if (minutos < 10) {
          horario2.innerText = `0${minutos}:`;
        } else {
          horario2.innerText = `${minutos}:`;
        }
      } else if (!horas < 1) {
        horas -= 1;
        minutos += 59;
        segundos += 59;
        if (minutos < 10) {
          horario2.innerText = `0${minutos}:`;
        } else {
          horario2.innerText = `${minutos}:`;
        }
        if (horas < 10) {
          horario1.innerText = `0${horas}:`;
        } else {
          horario1.innerText = `${horas}:`;
        }
      } else {
        setar = 1
        clearInterval(set3);
      }
    }
  }
  voltar.addEventListener("click", function voltar1() {
    horas = 0;
    minutos = 0;
    segundos = 0;
    input.style.display = "grid";
    crono.style.display = "none";
    setar = 1;
  });
  recomecar.addEventListener("click", function recomecar1() {
    horas = Number(input1.value);
    minutos = Number(input2.value);
    segundos = Number(input3.value);
  });
  parar.addEventListener("click", function parar1() {
    parar.style.display = "none";
    continuar.style.display = "flex";
    setar = 0
    clearInterval(set3)
  });
}