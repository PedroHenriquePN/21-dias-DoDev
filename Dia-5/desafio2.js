let opcao = prompt("Escolha o serviço: \n1-Gasolina  \n2-Álcool  \n3-Calibrar pneus");


switch(opcao){
  case "1":
    let valor1 = parseInt(prompt("Insira o valor desejado:"));
    console.log("A quantidade em litros foi de: " + (valor1/5)+"L");
    break;
  case "2":
    let valor2 = parseInt(prompt("Insira o valor desejado:"));
    console.log("A quantidade em litros foi de: "+(valor2/3)+"L");
    break;
  case "3":
    console.log("pneus calibrados com sucesso.")
    break;
  default:
    console.log("Opção inválida.")
    break;
}