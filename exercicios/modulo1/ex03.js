// Exercício 03
// 3.1

const arr = [1, 2, 3, 4, 5];
arr.map(item => item + 10);

// 3.2
// Dica: Utilize uma constante pra function


export const mostraIdade = (usuario) => usuario.idade;

// 3.3
// Dica: Utilize uma constante pra function


export const mostraUsuario = (nome = 'Diego', idade = 18) => ({nome, idade });


// 3.4

const promise = () => new Promise((resolve, reject) => resolve())