function calcular () {
    var textv = window.document.getElementById("textvel")
    var res = window.document.getElementById("res")
    var vel = Number(textv.value)
    res.innerHTML = `<p> Sua velocidade atual é de <strong>${vel} km/h.</strong></p>`;
    if (vel > 60) {
        res.innerHTML +=`<p> Você está <strong>MULTADO</strong> por excesso de velocidade!</P>`;
        res.style.background = 'red'

    } else if(vel <10 || vel >= 0) {
        res.innerHTML +=`<p> <strong>Desenvolve </strong> meu filho(a) </p>`;
        res.style.background = 'green'

    }   if (vel <0){

        res.innerHTML += `<p> [ERRO] Número inválido </p>`;
        res.style.background = 'yellow'
    }

    res.innerHTML +=`<p> Dirija sempre com cinto de segurança!</p>`;
}
    