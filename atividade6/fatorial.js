function calculateFactorial(number){
    let numberCalculate = number
    let fatorial = 1
    while ( 1 <= numberCalculate ){
        fatorial *= numberCalculate
        numberCalculate -= 1
    }

    return fatorial
}

number = parseFloat(prompt("Digite um número para saber o seu fatorial: "))
result = calculateFactorial(number)

alert(
  "O fatorial do número é: " + result
)