let queue = ["Éric", "João", "Julio", "Inocêncio"]
let menu = 0
let fold = false

for(let i = 0; i<=queue.length -1; i++){
  console.log((i + 1) + "- " + queue[i])
}

while ( 1 <= menu <=2 ){
  let menu = parseFloat(prompt("1- Adicionar Paciente" +
  "\n2- Consultar Paciente" +
  "\n3- Sair"))

  switch (menu){
    case 1:
      let newPatient = prompt("Nome do Paciente: ")
      queue.push(newPatient)
      alert("Paciente " + newPatient + " adicionado à fila")
      console.log(queue)
      break

    case 2:
      let consultPatient = prompt("Nome do paciente: ")
      for (let i = 0; i <= queue.length -1; i++){
        if (consultPatient === queue[i]){
          alert("Paciente chamado: " + consultPatient)
          queue.splice(i,  1)
          fold = true
          break
        }
      }

        if(fold === false){
          alert("Paciente " + consultPatient + " não está na lista de espera")
          break
        }
      
    case 3:
      alert("Saindo...")
      break

    default:
      alert("Opção inválida!")

  }

  if(menu === 3){
    break
  }

}