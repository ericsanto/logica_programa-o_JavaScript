/*(alterar, inserir, remover) Gerar um vetor com números aleatórios, e em seguida... (para os exemplos, con-
sidere o vetor "vet = [11 22 33 44]").

a. (alterar) Alterar o valor de um elemento para uma dada posição (pos) do vetor. Supondo, 'pos = 1' e
'numSubstituto = 99', após a execução do programa, "vet = [11 99 33 44]", 22 foi substituído por 99.

b. (inserir) Inserir um elemento em uma posição (pos). Considerando o exemplo, 'pos = 1', 'novo número =
99', após a inserção "vet = [11 99 22 33 44]".

c. (remover) Remover um elemento de uma posição (pos). Supondo o vetor exemplo e 'pos = 1' após a re-
moção "vet = [11 33 44]", 22 foi removido.*/


function createArrayWithAleatoriesValues(){
  let vet = []

  for(let i = 0; i< 10; i++){
    let numberAleatory = Math.floor(Math.random() * 10) + 1
    vet.push(numberAleatory)
  }
  
  return vet
}

function alterValueInArray(vet, position, value){
  let array = vet
  let numberSubstitute = value
  start = true
  
  if(position <= array.length-1){
    for(let i = 0; i < array.length; i++){
      array[position] = numSubstitute
      start = false
    }
  }else{
    console.log("Posição inexistente no array")
  }
  return array
}

function removeNumberArray(vet, value){
    let array = vet
    let numberOfRemove = value
    for(let i = 0; i < array.length; i++){
      if(array[i] === numberOfRemove){
        array.splice(i, 1)
      }
    }
    console.log(array)
  }
    

let vet =  [11, 22, 33, 44]
result = removeNumberArray(vet, 11)
