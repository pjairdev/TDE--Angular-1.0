export class Usuario {
    id: number;
    cpf: string;
    nome: string;
    email: string;
    senha: string;
    adm: boolean;
    
    constructor(id: number, nome: string, email: string, senha: string, cpf: string, adm: boolean){
        this.id = id;
        this.cpf = cpf;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.adm = adm;
    }

    verificarAdm(){
        return this.adm;
    }
}