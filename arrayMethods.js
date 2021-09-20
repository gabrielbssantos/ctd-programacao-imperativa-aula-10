let groceryList = ["Café", "Pão",  "Massa para lasanha", "Cenouras", "Tomates"]

// .join
console.log("Une itens de um Array em uma string, separando-os por um caracter específico")
console.log(groceryList.join("-"))

// .pop
console.log(".pop(): Pega o ÚLTIMO item de um Array, excluindo-o do mesmo")
console.log(groceryList.pop())
console.log(groceryList)

// .push
console.log(".push(): Adiciona um item ou vários itens ao FINAL do Array")
console.log(groceryList.push("Chá"))
console.log(groceryList)

// .shift
console.log(".shift(): Pega o PRIMEIRO item de um Array, excluindo-o do mesmo")
console.log(groceryList.shift())
console.log(groceryList)

// .unshift
console.log(".unshift(): Adiciona um item ou vários itens ao INÍCIO do Array")
console.log(groceryList.unshift("Sabão em pó", "Detergente", "Bucha de pia"))
console.log(groceryList)