function enviar (){
  var nome = document.getElementById('txt-nome');
  if (nome.value !=""){
  alert("obrigado e desculpe " + nome.value + ", esta área esta em desenvolvimento")
  // mostrar mensagem com nome
  }else{
    alert("obrigado e desculpe usuario, esta área esta em desenvolvimento")
    // mostrar mensagem generica
  }
}
