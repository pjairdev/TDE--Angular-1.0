export class Palestra {
    id: number;
    nome: string;
    descricao: string;
    dt_palestra: string;
    nome_palestrante: string;
    horario_inicio_palestra: string;
    horario_fim_palestra: string;
    minicurriculo_palestrante: string
    id_evento: string;

    constructor(id: number, nome: string, horario_inicio_palestra: string,horario_fim_palestra: string,dt_palestra: string ,descricao: string, nome_palestrante: string, minicurriculo_palestrante: string, id_evento: string){
        this.id = id;
        this.nome = nome;
        this.descricao = descricao;
        this.dt_palestra = dt_palestra;
        this.horario_inicio_palestra = horario_inicio_palestra;
        this.horario_fim_palestra = horario_fim_palestra;
        this.nome_palestrante = nome_palestrante;
        this.minicurriculo_palestrante = minicurriculo_palestrante;
        this.id_evento = id_evento;
    }
}
