let listNumbers = []
let newListNumbers = []

for(let i = 0; i <=3; i++){
  let number = parseFloat(prompt("Digite um número para adicionar na lista"))
  listNumbers +=number
}

let option = prompt("Você deseja inverter a lista? S-Sim/ N-Não")

if(option === "S"){
  for(i of listNumbers){
    newListNumbers = i + newListNumbers
  }

  console.log(newListNumbers)
}

console.log(listNumbers)