function criarQuizzes() {
    //ao clicar no botão, esconder a tela inicial
    const esconderPrincipal = document.querySelector('.criacaoQuizz');
    esconderPrincipal.classList.add('escondido');
    //mostrar a tela de criação de quizz
    const aparecerCriacaoQuizz = document.querySelector('.criarPerguntasIniciais');
    aparecerCriacaoQuizz.classList.remove('escondido')
}