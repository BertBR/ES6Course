// Exercício 02

const usuarios = [
  { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
  { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
  { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
 ];

 // 2.1

class arrayThings {
   constructor(){
     
   }

   map () {

   return usuarios.map(item => item.idade)

   }
  
   // 2.2
  
  filter () {
    return usuarios.filter(item => item.empresa === 'Rocketseat' && item.idade > 18 ? item : null)
  }
  
   // 2.3
  
  find () {
    return usuarios.find(item => item.empresa === 'Google')
  }
  
  // 2.4
  
  elders () {
   return usuarios.filter(user => {
      user.idade *= 2;
      return user.idade <= 50
  })
  }
 }

 export const arrayMethods = new arrayThings