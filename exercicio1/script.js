// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
const sacolao = []
const fruta1 = {
    nome: "maçã",
    preco: 5,
    disponibilidade: true
}
const fruta2 = {
    nome: "abacaxi",
    preco: 2,
    disponibilidade: false
}
const fruta3 = {
    nome: "banana",
    preco: 3,
    disponibilidade: true
}
sacolao.push(fruta1 , fruta2 , fruta3)
console.log(sacolao)


