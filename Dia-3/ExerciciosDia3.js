let nome = prompt("Insira seu nome:");
let idade = parseInt(prompt("Insira sua idade:"));
let altura = parseInt(prompt("Insira sua altura em cm:"))/100;
let peso = parseInt(prompt("Insira seu peso:"));
let anoNascimento = 2023 - idade;
let imc = peso/(altura*altura);

console.log("Olá, "+ nome + ",você tem: "+ idade+"anos, " + "nasceu em: "+anoNascimento+" tem "+altura*100+"cm de altura "+", pesa "+peso+"kg seu IMC é:"+imc+" KG/m2")