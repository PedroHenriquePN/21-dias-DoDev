let num1 = parseInt(prompt("Insira o primeiro número:"));
let num2 = parseInt(prompt("Insira o segundo número:"));
let operacao = prompt("Qual operação matemática vc gostaria de realizar: +,-,*,/")
switch(operacao){
    case "+":
      console.log("Vc escolheu a opção de adição, o resultado é: " + (num1+num2));
      break;
    case "-":
      console.log("Vc escolheu a opção de subtração, o resultado é: "+(num1-num2));
      break;
    case "*":
      console.log("vc escolheu a opção de multiplicação, o resultado é: "+ (num1*num2));
      break;
    case "/":
      console.log("Vc escolheu a opção de divisão, o resultado é: "+(num1/num2));
      break;
    default:
      console.log("Opção inválida.") 
      break; 
}