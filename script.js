// Espera o conteúdo da página carregar completamente antes de executar o script.
// É uma boa prática para evitar erros de JavaScript tentando acessar elementos
// que ainda não existem na página.
document.addEventListener('DOMContentLoaded', () => {

    const btnLimpar = document.getElementById("btnLimpar")
    const blocoDeNotas = document.getElementById('blocoDeNotas');
    const notaSalva = localStorage.getItem('minhaNota');

    if (notaSalva) {
        blocoDeNotas.value = notaSalva;
    }

    blocoDeNotas.addEventListener('input', () => {
        localStorage.setItem('minhaNota', blocoDeNotas.value);
        console.log("Nota salva no localStorage!"); // Uma mensagem no console para fins de depuração.
    });

    btnLimpar.addEventListener("click", () => {
        blocoDeNotas.value = ""
        localStorage.removeItem("minhaNota")
        console.log("Notas limpas")
    })

});