const attacker = prompt("Digite o nome do atacante: ")
const powerAttacker = parseFloat(prompt("Digite o poder de ataque do atacante: "))

const defender = prompt("Digite o nome do defensor: ")
const quantityLifeDefender = prompt("Digite a quantidade de vida do defensor: ")
const powerDefender = parseFloat(prompt("Digite o poder de defesa do defensor: "))
const hasShield = prompt("S- Sim\n N- Não")

let demageCaused = 0

if (powerAttacker > powerDefender && hasShield === "N"){
  demageCaused = powerAttacker - powerDefender
  alert("O dano causado pelo personagem " + attacker + " foi de " + (demageCaused))
} else if (powerAttacker > powerDefender && hasShield === "S"){
  demageCaused = ((powerAttacker - powerDefender)/2)
  alert("O dano causado pelo personagem " + attacker + " foi de " + (demageCaused))
} else if (powerAttacker < powerDefender){
  demageCaused = 0
  alert("O dano causado pelo personagem " + attacker + " foi de " + demageCaused)
}

