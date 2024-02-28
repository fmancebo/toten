
const botoesTiposEsp = document.querySelectorAll('.cont-espec .btn-espec button')
const botoesTipoAtend = document.querySelectorAll('.cont-atend .btn-atend button')


const botaoEspec = document.querySelector('#btn-especialidades')
const botaoAtend = document.querySelector('#btn-atendimentos')
const botaoPriNorm = document.querySelectorAll('.cont-tipo .btn-tipo button')
const botaoConfirm = document.querySelector('#botao-confirm')
const botaoNovoAtend = document.querySelector('#btn-NovoAtend')
const botaoVoltar = document.querySelector('.voltar')
const naoConfirm = document.querySelector('#nao-confirm')

const telaInicial = document.querySelectorAll('.cont-btn')

const telaEspec = document.querySelector('.cont-espec')
const telaAtend = document.querySelector('.cont-atend')

const telaTipoAtd = document.querySelector('.cont-tipo')

const telaConfirm = document.querySelector('.confirm-atend')
const telaSenha = document.querySelector('.cont-senha')

let especialidade = null;
let atendimento = null;
let prioridade = null;

// BOTAO ESPECIALIDADE
botaoEspec.addEventListener('click', () => {
    telaInicial.forEach(telaInicial => {
        telaInicial.classList.add('hidden');
    });
    telaEspec.classList.add('flex');
    botaoVoltar.classList.add('flex');
});

// BOTAO ATENDIMENTO
botaoAtend.addEventListener('click', () => {
    telaInicial.forEach(telaInicial => {
        telaInicial.classList.add('hidden');
    });
    telaAtend.classList.add('flex');
    botaoVoltar.classList.add('flex');
});

// TIPOS DE Especialidades
botoesTiposEsp.forEach((botao) => {
    botao.addEventListener('click', () => {
        especialidade = botao.dataset.especialidade
        telaEspec.classList.remove('flex');
        telaTipoAtd.classList.add('flex');
    });
});

// TIPO DE ATENDIMENTO 
botoesTipoAtend.forEach((botao) => {
    botao.addEventListener('click', () => {
        atendimento = botao.dataset.atendimento;
        telaAtend.classList.remove('flex');
        telaTipoAtd.classList.add('flex');
    });
});

// ATENDIMENTO PRIORITARIO OU NORMAL
botaoPriNorm.forEach((botao) => {
    botao.addEventListener('click', () => {
        prioridade = botao.dataset.prioridade; // Obtenha a prioridade do botão clicado

        // Aqui você pode obter os elementos <span> e definir seu conteúdo de texto
        let spans = document.querySelectorAll('.cont-msg span');
        spans[0].textContent = prioridade //=== 'Prioritário' ? 'Prioritário' : 'Normal';  Prioridade
        spans[1].textContent = atendimento || especialidade; // Atendimento ou especialidade

        telaTipoAtd.classList.remove('flex');
        telaConfirm.classList.add('flex');
    });
});

// BOTAO CONFIRMAR 
botaoConfirm.addEventListener('click', ()=>{
    // método `tipoDeAten` do objeto `totem`
    totem.tipoDeAten(especialidade, atendimento, prioridade); 

    // Atualiza a senha
    if (especialidade !== null) {
        if (prioridade === 'Prioritário') {
            localStorage.setItem('senha', totem.senhaPriMed.toString());
            totem.senhaPriMed++;
        } else {
            localStorage.setItem('senha', totem.senhaMed.toString());
            totem.senhaMed++;
        }
    } else if (atendimento !== null) {
        if (prioridade === 'Prioritário') {
            localStorage.setItem('senha', totem.senhaPriAtend.toString());
            totem.senhaPriAtend++;
        } else {
            localStorage.setItem('senha', totem.senhaAtend.toString());
            totem.senhaAtend++;
        }
    }

    let spans = document.querySelectorAll('.senha-msg span');
    spans[0].textContent = prioridade === 'Prioritário' ? 'Prioritário' : 'Normal'; // Prioridade
    spans[1].textContent = atendimento || especialidade; // Atendimento ou especialidade
    spans[2].textContent = localStorage.getItem('senha'); // Número da senha

    telaConfirm.classList.remove('flex');
    telaSenha.classList.add('flex');
});

botaoVoltar.addEventListener('click', voltar)
botaoNovoAtend.addEventListener('click', voltar)
naoConfirm.addEventListener('click', voltar)

function voltar(){
    telaInicial.forEach(telaInicial => {
        telaInicial.classList.remove('hidden');
    });
    telaEspec.classList.remove('flex');
    telaTipoAtd.classList.remove('flex');
    telaConfirm.classList.remove('flex')
    telaSenha.classList.remove('flex')
    botaoVoltar.classList.remove('flex')
}