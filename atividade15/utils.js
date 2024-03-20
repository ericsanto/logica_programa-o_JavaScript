let list = [87, 55, 90, 23, 13, 24, 4, 6, 10, 1]

let listOrdered = []
let tamList = list.length
console.log(tamList)

while(tamList > 0){
  let smallerNumber = list[0]
  let smallerNumberOfIndex= 0
  for(let i = 0; i < list.length; i++){
    if( smallerNumber > list[i]){
      smallerNumber = list[i]
      smallerNumberOfIndex = i
    }
  }
  console.log(listOrdered.push(smallerNumber))
  console.log(list.splice(smallerNumberOfIndex, 1))
  tamList--
}

console.log(listOrdered)