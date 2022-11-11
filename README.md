# Trabalho de Pesquisa e Ornedação

## _Algoritmos de Ordenação e Calculo do custo computacional_
[Ver deploy da aplicação](https://calculo-algoritmos-ordenacao.herokuapp.com/)

<br>

## Tecnologias utilizadas no projeto:

- HTML, CSS, JavaScript, NodeJS

<br>

## Utilização do Excel para criar e realizar análise gráfica

- [Arquivo com os dados](https://github.com/SouzaGabriel26/calculo_algoritmos_de_ordenacao/blob/master/algoritmos.xlsx)

## Biblioteca para construção de gráficos no JavaScript:

- [ChartJs](https://www.chartjs.org/docs/latest/)

## Os algoritmos de ordenação estão todos na pasta algoritmosOrdenacao

- [algoritmosOrdenacao](https://github.com/SouzaGabriel26/calculo_algoritmos_de_ordenacao/tree/master/js/algoritmosOrdenacao)

## A implementação e tempo de execução dos algoritmos:

- _link para pasta_
- A contagem do tempo de execução de cada algoritmo foi feita pelo método [console.time()](https://developer.mozilla.org/en-US/docs/Web/API/console/time)
- Foram executados manualmente cada algoritmo e anotado o tempo
- Função para gerar os vetores aleatorios, ordenados e ordenados inversamente (_link pra função_)
- Exemplo de utilização:

```js
let array100 = []
randomGenerate(array100, 100, "desc")
console.time("#bubbleSort")
bubbleSort(array100)
console.timeEnd("#bubbleSort")
```

<br>

## Função para gerar números aleatórios em arrays(randomGenerate):

- _link para arquivo_
- Parâmetros:

  - Array: passa o array que quer gerar os números;
  - Size: quantidade de números que deseja dentro do array;
  - Type: tipo de ordenação do array
    - random - números aleatórios
    - order - números ordenados crescentemente
    - desc - números ordenados decrescentemente

- Exemplo de utilização:

```js
let arrayRandom = []
randomGenerate(arrayRandom, 10, "random")

let arrayOrder = []
randomGenerate(arrayOrder, 100, "order")

let arrayDesc = []
randomGenerate(arrayDesc, 1000, "desc")
```
