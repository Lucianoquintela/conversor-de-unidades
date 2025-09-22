function converterValores() {
    const unidadeParaConverter = document.getElementById("valorInicial").value;
    const unidadeEscolhida = document.getElementById("tipo-conversao").value;
    const containerExibirResultado = document.getElementById("resultado")
    
    let valorConvertido;
    let unidade;
    
    switch (unidadeEscolhida) {
  case "milhas-km":
        valorConvertido = unidadeParaConverter * 1.60934;
        unidade = " km"
    break;
  case "km-milhas":
    valorConvertido = unidadeParaConverter * 0.621371;
    unidade = " milhas"
    break;
  case "celsius-fahrenheit":
    valorConvertido = (unidadeParaConverter * 9 / 5) + 32;
    unidade =  "°F"
    break;
  case "fahrenheit-celsius":
    valorConvertido = (unidadeParaConverter - 32) * 5 / 9 ;
    unidade = "°C" 
    break;    
        
  default:
      valorConvertido = "Erro..."
}
    
  containerExibirResultado.innerText = valorConvertido.toFixed(2) + unidade;
}

