var area = document.getElementById('area');

function entrar() {
    var nome = prompt('Qual seu nome: ');
    
    if (nome==="" || nome === null) {
        alert("ERRO !!");
        area.innerHTML = "Você nao digitou o seu nome";
    } else {
        area.innerHTML = "Bem Vindo " + nome+ " ";

        let botaoSair = document.createElement("button");
        botaoSair.innerText = "Sair da conta";
        botaoSair.onclick = sair;
        area.appendChild(botaoSair);

    //document.write("<img src='jujuba.jpg'/>");
    } 
  
}

function sair() {
      alert("Até mais");
      area.innerHTML = "Você saiu ..."
}
