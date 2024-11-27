export class Evento {
    id: number;
    nome: string;
    descricao: string;
    dt_inicio: string;
    dt_fim: string;
    dt_limite_inscricao: string;
    numero_vagas: number;
    cpf_responsavel: string;
    nome_responsavel: string;
    email_responsavel: string;
    nome_palestrante: string;

    constructor(id: number, nome: string, dt_inicio: string, dt_fim: string, numero_vagas: number, descricao: string, dt_limite_inscricao: string, cpf_responsavel: string, nome_responsavel: string, email_responsavel: string, nome_palestrante: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dt_inicio = dt_inicio;
        this.dt_fim = dt_fim;
        this.dt_limite_inscricao = dt_limite_inscricao;
        this.numero_vagas  = numero_vagas;
        this.cpf_responsavel = cpf_responsavel;
        this.nome_responsavel = nome_responsavel
        this.email_responsavel = email_responsavel;
        this.nome_palestrante = nome_palestrante
    }
}