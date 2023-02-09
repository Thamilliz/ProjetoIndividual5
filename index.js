import readLineSync from 'readline-sync'
import ck from 'chalk' 
//const readLineSync = require('readline-sync') 

const valores = [] 
let input = "" 

while(input != "sair") 
{
 valores.push(input) 
 input = readLineSync.question(ck.blue("Digite uma propriedade CSS")) 
 .toLocaleLowerCase()
} 
console.log(ck.red.italic(valores.sort().join("\n")))