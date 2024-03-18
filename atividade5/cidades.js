let citys = []

let cont = 0

let responseUser = prompt("Você já viajou para alguma cidade? S-Sim/N-Não")

while (responseUser === "S"){
  let city = prompt("Digite o nome da cidade que você visitou! ")
  let responseUser = prompt("Você já viajou para alguma cidade? S-Sim/N-Não")
  citys.push(city)
  cont += 1

  if (responseUser === "N") {
    break
  }
}


  alert(
    "Cidades visitadas: " + citys + ", " + 
    "\nQuantidade de cidades visitadas: " + cont
  )