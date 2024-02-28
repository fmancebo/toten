// Usando os conceitos de usabilidade aprendidos, projetar uma sequência de telas para um TOTEM de um posto de
// saúde que tem por objetivo a emissão de uma senha levando em conta os seguintes critérios:​
// Existem as especialidades:​ Pediatria​, Ortopedia​, Clinica Geral​, Ginecologia​, Psiquiatria​ e Odontologia​
// Além das especialidades podem ser criadas senhas para outros atendimentos como:​ Farmácia, Regulação​,
// Assistência Social​, Insumos​ e Vacinas​
// Em todas as opções devem se considerar as prioridades por lei.​
// O Totem não emite sons, apenas imprime uma senha através de uma impressora acoplada.
var Especialidades;
(function (Especialidades) {
    Especialidades[Especialidades["Pediatria"] = 0] = "Pediatria";
    Especialidades[Especialidades["Ortopedia"] = 1] = "Ortopedia";
    Especialidades[Especialidades["ClinicaGeral"] = 2] = "ClinicaGeral";
    Especialidades[Especialidades["Ginecologia"] = 3] = "Ginecologia";
    Especialidades[Especialidades["Psiquiatria"] = 4] = "Psiquiatria";
    Especialidades[Especialidades["Odontologia"] = 5] = "Odontologia";
})(Especialidades || (Especialidades = {}));
var Atendimentos;
(function (Atendimentos) {
    Atendimentos[Atendimentos["Farm\u00E1cia"] = 0] = "Farm\u00E1cia";
    Atendimentos[Atendimentos["Regula\u00E7\u00E3o"] = 1] = "Regula\u00E7\u00E3o";
    Atendimentos[Atendimentos["Assist\u00EAnciaSocial"] = 2] = "Assist\u00EAnciaSocial";
    Atendimentos[Atendimentos["InsumosEvacinas"] = 3] = "InsumosEvacinas";
})(Atendimentos || (Atendimentos = {}));
var Prioridade;
(function (Prioridade) {
    Prioridade[Prioridade["Prioritario"] = 0] = "Prioritario";
    Prioridade[Prioridade["AtendNormal"] = 1] = "AtendNormal";
})(Prioridade || (Prioridade = {}));
var Totem = /** @class */ (function () {
    function Totem(especialidade, atendimento, prioridade) {
        this.escolhaEspecialidade = null;
        this.escolhaAtendimento = null;
        this.escolhaPrioridade = null;
        this.especialidade = especialidade;
        this.atendimento = atendimento;
        this.prioridade = prioridade;
        this.senhaMed = Totem.proxSenha();
        this.senhaPriMed = Totem.proxSenhaPri();
        this.senhaAtend = Totem.proxSenhaAtend();
        this.senhaPriAtend = Totem.proxSenhaAtendPri();
    }
    Totem.proxSenha = function () {
        Totem.ultSenhaMed++;
        return Totem.ultSenhaMed;
    };
    Totem.proxSenhaPri = function () {
        Totem.ultSenhaMedPri++;
        return Totem.ultSenhaMedPri;
    };
    Totem.proxSenhaAtend = function () {
        Totem.ultSenhaAtend++;
        return Totem.ultSenhaAtend;
    };
    Totem.proxSenhaAtendPri = function () {
        Totem.ultSenhaAtendPri++;
        return Totem.ultSenhaAtendPri;
    };
    Totem.prototype.tipoDeAten = function (especialidade, atendimento, prioridade) {
        var mensagem;
        var senha;
        if (especialidade === this.especialidade) {
            if (prioridade === Prioridade.Prioritario) {
                // mensagem = `CONFIRMAR atendimento PRIORITÁRIO a ${this.especialidade}`
                senha = this.senhaPriMed;
            }
            else {
                // mensagem = `CONFIRMAR atendimento a ${this.especialidade}`
                senha = this.senhaMed;
            }
        }
        else {
            if (prioridade === Prioridade.Prioritario) {
                // mensagem = `CONFIRMAR atendimento PRIORITÁRIO a ${this.atendimento}`
                senha = this.senhaPriAtend;
            }
            else {
                // mensagem = `CONFIRMAR atendimento a ${this.atendimento}`
                senha = this.senhaAtend;
            }
        }
        localStorage.setItem('senha', senha);
    };
    Totem.ultSenhaMed = 0;
    Totem.ultSenhaMedPri = 0;
    Totem.ultSenhaAtend = 0;
    Totem.ultSenhaAtendPri = 0;
    return Totem;
}());
var totem = new Totem(null, null, null);
