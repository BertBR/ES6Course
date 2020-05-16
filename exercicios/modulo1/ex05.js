// Exercicio 05
// 5.1 Rest

const array = [1, 2, 3, 4, 5, 6]

export const [x, ...y] = array;

export function soma(...params){
 return params.reduce((total, next) => total + next);
}

// 5.2 Spread

const usuariO = {
 nome: 'Bert',
 idade: 32,
 endereco: {
 cidade: 'Natal',
 uf: 'RN',
 pais: 'Brasil',
 }
};

export const usuario2 = { ...usuariO, nome: 'Gabriel'}
export const usuario3 = { ...usuariO, endereco: { cidade: 'Lontras'} }
