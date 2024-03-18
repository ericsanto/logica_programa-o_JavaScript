function sortNumberAscending(parameter){
    let listSorted = []

    while(parameter.length > 0){
      let smallNumber = parameter[0]
      let index = 0

      for(let i = 1; i < parameter.length; i++)
        if(parameter[i] < smallNumber){
          smallNumber = parameter[i]
          index = i
          
        } 
      listSorted.push(smallNumber)
      parameter.splice(smallNumber, 1)  
    } 
    
}

values = [5, 2, 4, 8, 44, 32, 100, 89, 33]

result = sortNumberAscending(values)

alert(
  "A lista ordenada é: " + result
)