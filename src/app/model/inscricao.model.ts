export class Inscricao {
    idEvento: number;
    idMinicurso: number;
    idPalestra: number;
    idParticipante: number;
    nomeParticipante: string;
    emailParticipante: string;
    cpfParticipante: string;
    constructor(
        idEvento: number, idMinicurso: number, idPalestra: number, idParticipante: number, 
        nomeParticipante: string, emailParticipante: string, cpfParticipante: string){
        
        this.idEvento = idEvento;
        this.idMinicurso = idMinicurso;
        this.idPalestra = idPalestra;
        this.idParticipante = idParticipante;
        this.nomeParticipante = nomeParticipante;
        this.emailParticipante = emailParticipante;
        this.cpfParticipante = cpfParticipante;
        
    }

}