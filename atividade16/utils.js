/*
(busca vetor) Dado um número inteiro (número procurado), a função varre o vetor e...
(durante os exemplos considere o vetor "vet = [11 22 33 44 22]" e "número procurado = 22")
a. (buscar primeira ocorrência) Retornar a posição (pos) da primeira ocorrência do 'número procurado' no

vetor. Assim que encontrar esse número a função deve interromper a busca. Exemplo: a função deve re-
tornar 1, posição da primeira ocorrência de 22 em 'vet'.

b. (buscar última ocorrência) Retornar a posição (pos) da última ocorrência do 'número procurado'. Exem-
plo: a função deve retornar 4, posição da última ocorrência de 22 em 'vet'.

c. (contar ocorrências) Contar o número de vezes que um dado número aparece no vetor. Para o exemplo,
a função deve retornar 2 (2 vezes).

d. (retornar todas as ocorrências) Retornar todas as posições de ocorrência para o número procurado. Con-
siderando o exemplo, a função deve retornar um vetor "r = [1 4]", posições de 22 em 'vet'.*/


function numberSearchInList(list, numberWanted){
  let vet = list
  const numberW = numberWanted

    for(let i = 0; i < vet.length; i++)
      if(vet[i] === numberW){
        indexOfNumber = i
        console.log("Número " + numberSerach + " foi encontrado na posição " + indexOfNumber)
        start = true
      }
  }

function lastSearchOcorrenceNumberInList(list, numberWanted){
  let vet = list
  const numberWant = numberWanted
  let indexOfNumber = 0
  let start = true

  while(start === true){
    for(let i = vet.length -1; i >= 0 ; i--)
      if(vet[i] === numberWant){
        indexOfNumber = i
        console.log("A última orrência do número " + numberWant + " ocorreu na posição " + indexOfNumber)
        start = false
        break
      }
  }
   
}

function contNumberInList(list, numberWanted){
  let vet = list
  const numberWant = numberWanted
  let cont = 0
  let indexOfNumber = 0

  for(let i = 0; i < vet.length; i++){
    if(vet[i] === numberWant){
      indexOfNumber = i
      cont++
      console.log("O número " + numberWant + " foi encontrado na posição " + indexOfNumber)
    }
  }
  console.log("O número " + numberWant + " foi encontrado " + cont + " vezes")
}

function returnPositioNumberInList(list, numberWanted){
  let vet = list
  const numberWant = numberWanted
  let vetPositionNumber = []
  let indexOfNumber = 0

  for(let i = 0; vet.length > i; i++){
    if(vet[i] === numberWant){
      indexOfNumber = i
      vetPositionNumber.push(indexOfNumber)
    }
  }
  
  console.log("Vetor composto por posição(ões) do número " + numberWant + ": " + vetPositionNumber)
}


let vet = [11, 22, 33, 44, 22]
let result = returnPositioNumberInList(vet, 22)