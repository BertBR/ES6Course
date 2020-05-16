// MÓDULO 1

import {User1, Adm1} from './ex01'
console.log('EXERCÍCIO 01:')
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

import { arrayMethods } from './ex02'
console.log('EXERCÍCIO 02:')
console.log(arrayMethods.map())
console.log(arrayMethods.filter())
console.log(arrayMethods.find())
console.log(arrayMethods.elders())

import { mostraIdade, mostraUsuario } from './ex03'
console.log('EXERCÍCIO 03:')
const usuario = { nome: 'Bert', idade: 32 };
console.log(mostraIdade(usuario));
const nome = "Bert";
const idade = 32;
console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

import { name, cidade, estado, mostraInfo } from './ex04'
console.log('EXERCÍCIO 04:')
console.log(name); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

console.log(mostraInfo({ nome: 'Bert', idade: 32 }))


import { x,y, soma, usuario2, usuario3 } from './ex05'
console.log('EXERCÍCIO 05:')
console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]
console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

console.log(usuario2)
console.log(usuario3)

import { uSuario, iDade } from './ex06'
console.log('EXERCÍCIO 06:')
console.log(`O usuário ${uSuario} possui ${iDade} anos'`);

import { usUario } from './ex07'
console.log('EXERCÍCIO 07:')
console.log(usUario)