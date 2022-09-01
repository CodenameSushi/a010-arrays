const arrayNum = [8, 3, 9, 12, 27, 39]
const arrayString = ["Iphone", "Samsung Galaxy", "Oneplus"]
const arraySort = [22, false, "papel"]


// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
// e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNumCopia = arrayNum.slice()
const arrayStringCopia = arrayString.slice()
const arraySortCopia = arraySort.slice()

// - Adicione um item `number` ao primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumCopia.push(277)

console.log(arrayNum, arrayNumCopia)

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringCopia.pop()

console.log(arrayString, arrayStringCopia)

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arraySortCopia.splice(1, 1)

console.log(arraySort, arraySortCopia)
