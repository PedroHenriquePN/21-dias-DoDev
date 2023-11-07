let nome = prompt("Informe seu nome:");
let idade = parseInt(prompt("Informe sua idade:"));
let cnh = prompt("Você possui carteira de motorista?");
let carro = prompt("Você tem carro?");

if(idade < 18 || cnh === "N"){
  console.log(nome+", voçê não pode dirigir.")
}
if(idade > 18 && cnh === "S" && carro === "N"){
  console.log(nome+", voçê pode dirigir mas não tem um carro.")
}
if(idade > 18 && cnh === "S" && carro === "S"){
  console.log(nome+", voçê será o motorista.")
}