export class Minicurso {
    id: number;
    nome: string;
    dt_minicurso: string;
    horario_inicio_minicurso: string;
    horario_fim_minicurso: string
    nome_instrutor: string
    minicurriculo_instrutor: string;
    dt_limite_inscricao: string;
    vagas_disponiveis: number;  
    id_evento: number;
    descricao: string;
    nome_palestrante: string;
    
    constructor(id: number, nome_palestrante: string, nome: string, dt_minicurso: string, horario_inicio_minicurso: string, horario: string, vagas_disponiveis: number, descricao: string, palestrante: string, dataLimite: string, horario_fim_minicurso: string, nome_instrutor: string, minicurriculo_instrutor: string, dt_limite_inscricao: string, id_evento: number){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dt_minicurso = dt_minicurso;
        this.horario_inicio_minicurso = horario_inicio_minicurso;
        this.horario_fim_minicurso = horario_fim_minicurso;
        this.nome_instrutor = nome_instrutor;
        this.minicurriculo_instrutor = minicurriculo_instrutor;
        this.dt_limite_inscricao = dt_limite_inscricao;
        this.vagas_disponiveis  = vagas_disponiveis;
        this.id_evento = id_evento;
        this.nome_palestrante = palestrante;
    }
}
