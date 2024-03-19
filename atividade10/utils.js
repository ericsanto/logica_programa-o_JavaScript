function calculateTabuate(parameter){
    let cont = 0

    while(cont <= 20){
      let result = parameter * cont
      console.log(cont + " x " + parameter + " = " + result)
      cont++
    }
}

number = parseFloat(prompt("Digite um número para saber sua tabuada"))
result = calculateTabuate(number)
