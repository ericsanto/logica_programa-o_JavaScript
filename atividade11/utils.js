function isPalindrome(parameter){
    let word = parameter
    let verifyPalindrome = ""

    for( i of word){
      verifyPalindrome = i + verifyPalindrome
    }

    if( word === verifyPalindrome ) {
      console.log("A palavra " + word + " é um palíndromo" +
      "\nPalavra digitada: " + word +
      "\nPalavra inversa: " + verifyPalindrome)
    } else {
      console.log("A palavra " + word + " não é um palíndromo" +
      "\nPalavra digitada: " + word +
      "\nPalavra inversa: " + verifyPalindrome)
    }
}


word = prompt("Digite uma palavra para verificar se ela é um palíndromo")
result = isPalindrome(word)