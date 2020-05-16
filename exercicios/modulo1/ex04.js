// Exercício 04
// 4.1 Desestruturação simples

const empresa = {
  name: 'Rocketseat',
  endereco: {
  cidade: 'Rio do Sul',
  estado: 'SC',
  }
 };

export const {name, endereco: {cidade,estado} } = empresa

// 4.2 Desestruturação em parâmetros

export function mostraInfo({nome, idade}) {
  return `${nome} tem ${idade} anos.`;
 }
