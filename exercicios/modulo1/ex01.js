// Exercício - 01

class Usuario {
  constructor(email,senha) {
    this.email = email
    this.senha = senha
  }

  isAdmin() {
    if (this.admin){
      return true
    } 
    
    return false
    
  }
}

class Admin extends Usuario {

  constructor(){
    super()
    const admin = true
    this.admin = admin
  }

}


export const User1 = new Usuario('email@teste.com', 'senha123');
export const Adm1 = new Admin('email@teste.com', 'senha123');

