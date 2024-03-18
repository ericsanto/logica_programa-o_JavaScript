function contVowels(word){
    let volwels = 'aeiouAEIOU'
    let wordDeclared = word
    let cont = 0

    for(let letter of wordDeclared){
      if(volwels.includes(letter)){
        cont++
      }
    }

    return cont
}

word = prompt("Digite uma palavra para saber a quantidade de vogais contida nela")
result = contVowels(word)

alert(
  "A palavra digitadas contém " + result + " vogais"
)