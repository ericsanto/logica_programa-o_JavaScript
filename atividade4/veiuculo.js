const carOne = prompt("Digite o nome do veiculo: ")
const velocityCarOne = parseFloat(prompt("Digite a velocidade do veículo: "))

const carTwo = prompt("Digite o nome do segundo veículo: ")
const velocityCarTwo = parseFloat(prompt("Digite a velocidade do segundo veículo"))

if (velocityCarOne > velocityCarTwo) {
  alert("O carro " + " " + carOne + " " + "foi mais ráido que o carro" + " " + carTwo)
} else if (velocityCarOne === velocityCarTwo){
  alert("A velocidade do carro " + " " + carOne + " e do carro " + carTwo + " foram iguais")
} else {
  alert("O carro " + " " + carTwo + " " + "foi mais ráido que o carro" + " " + carOne)
}