function stringReverse(word){
    let letters = []
    let newsLetters = []
    for(let letter of word){
        letters.push(letter)
    }

    for(let lette of letters){
        newsLetters = lette + newsLetters
    }
    
    return newsLetters
}

    

word = prompt("Digite uma palavra para saber seu inverso")
result = stringReverse(word)

alert(
  "O reverso da palavra digitada é: " + result
)