// Usando os conceitos de usabilidade aprendidos, projetar uma sequência de telas para um TOTEM de um posto de
// saúde que tem por objetivo a emissão de uma senha levando em conta os seguintes critérios:​
// Existem as especialidades:​ Pediatria​, Ortopedia​, Clinica Geral​, Ginecologia​, Psiquiatria​ e Odontologia​
// Além das especialidades podem ser criadas senhas para outros atendimentos como:​ Farmácia, Regulação​,
// Assistência Social​, Insumos​ e Vacinas​
// Em todas as opções devem se considerar as prioridades por lei.​
// O Totem não emite sons, apenas imprime uma senha através de uma impressora acoplada.

enum Especialidades {
    Pediatria,
    Ortopedia,
    ClinicaGeral,
    Ginecologia,
    Psiquiatria,
    Odontologia,
}
enum Atendimentos {
    Farmácia,
    Regulação,
    AssistênciaSocial,
    InsumosEvacinas,
}
enum Prioridade {
    Prioritario,
    AtendNormal,
}

class Totem {
    static ultSenhaMed = 0;
    static ultSenhaMedPri = 0;
    static ultSenhaAtend = 0;
    static ultSenhaAtendPri = 0;
    especialidade: Especialidades | null;
    atendimento: Atendimentos | null;
    prioridade: Prioridade | null;
    senhaMed: number;
    senhaPriMed: number;
    senhaAtend: number;
    senhaPriAtend: number;
    escolhaEspecialidade: Especialidades | null = null;
    escolhaAtendimento: Atendimentos | null = null;
    escolhaPrioridade: Prioridade | null = null;


    constructor(
        especialidade: Especialidades | null,
        atendimento: Atendimentos | null,
        prioridade: Prioridade | null
    ) {
        this.especialidade = especialidade;
        this.atendimento = atendimento;
        this.prioridade = prioridade;
        this.senhaMed = Totem.proxSenha();
        this.senhaPriMed = Totem.proxSenhaPri();
        this.senhaAtend = Totem.proxSenhaAtend();
        this.senhaPriAtend = Totem.proxSenhaAtendPri();
    }

    static proxSenha(): number {
        Totem.ultSenhaMed ++;
        return Totem.ultSenhaMed;
    }

    static proxSenhaPri(): number {
        Totem.ultSenhaMedPri ++;
        return Totem.ultSenhaMedPri;
    }
    static proxSenhaAtend(): number {
        Totem.ultSenhaAtend ++;
        return Totem.ultSenhaAtend
    }

    static proxSenhaAtendPri(): number {
        Totem.ultSenhaAtendPri ++;
        return Totem.ultSenhaAtendPri
    }
    

    tipoDeAten(especialidade: Especialidades, atendimento: Atendimentos, prioridade: Prioridade): void {
        let mensagem
        let senha
        if (especialidade === this.especialidade) {
            if (prioridade === Prioridade.Prioritario) {
                // mensagem = `CONFIRMAR atendimento PRIORITÁRIO a ${this.especialidade}`
                senha = this.senhaPriMed
            } else {
                // mensagem = `CONFIRMAR atendimento a ${this.especialidade}`
                senha = this.senhaMed
            }
        } else {
            if (prioridade === Prioridade.Prioritario) {
                // mensagem = `CONFIRMAR atendimento PRIORITÁRIO a ${this.atendimento}`
                senha = this.senhaPriAtend
            } else {
                // mensagem = `CONFIRMAR atendimento a ${this.atendimento}`
                senha = this.senhaAtend
            }
        }
        localStorage.setItem('senha', senha);
    }
}
const totem = new Totem(null, null, null);
   


