/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var calendario = [28, 'mês', 1995, true, 'semestral'];


/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function thing (home){
      return home;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log (thing(calendario)[1]);
/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

function people (body, num){
    return body [num];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var raira = ['negra', 'cabelo cacheado', 1.75, null, (2018-1995)];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log (people (raira, 0));
console.log (people (raira, 1));
console.log (people (raira, 2));
console.log (people (raira, 3));
console.log (people (raira, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (n){
    var espec = {
        'Eleanor e Park' : {autor:'Rainbow Rowell' , quantidadePaginas:380, editora:'Intrisica'},
        'Orgulho e Preconceito' : {autor:'Jane Austen' , quantidadePaginas:350, editora:'Intrisica'},
        'A maldição do tigre' : {autor:' Collen Hoover' , quantidadePaginas:420, editora:'Intrisica'}
    };
        return !n ? espec : espec [n];
    };

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log(book('O livro Eleanor e Park tem' + book ('Eleanor e Park').quantidadePaginas+ 'páginas!'));

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log(book('O autor do livro Orgulho e Preconceito' + 'é' + book ('Orgulho e Preconceito').autor));

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log(book('O livro A maldição do tigre' + 'foi publicado pela editora' + book('A maldição do tigre').editora));
