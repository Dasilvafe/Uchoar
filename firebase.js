// Configuração do Firebase
var firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_MESSAGING_SENDER_ID",
    appId: "SEU_APP_ID"
};
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

// Função para enviar o formulário
document.getElementById('orcamento-form').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var cidade = document.getElementById('cidade').value;
    var telefone = document.getElementById('telefone').value;
    var tipoInstalacao = document.getElementById('tipo-instalacao').value;

    db.collection("orcamentos").add({
        nome: nome,
        cidade: cidade,
        telefone: telefone,
        tipoInstalacao: tipoInstalacao
    })
    .then(function() {
        alert("Orçamento enviado com sucesso!");
        document.getElementById('orcamento-form').reset();
    })
    .catch(function(error) {
        console.error("Erro ao enviar orçamento: ", error);
    });
});
