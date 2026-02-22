    let button = document.getElementById("hamburguer");
    const ul = document.getElementById("ul");

    button.addEventListener("click", function() {
        ul.classList.toggle("ativa");
    });
 
 
    function initEmailJS() {
        emailjs.init("ywx4bRKlYGIatbzUN");
    };

    document.querySelector(".formulario-lista").addEventListener("submit", function(event) {
        event.preventDefault();

        emailjs.send("service_s4gbz5d", "template_1p1nlk9", {
            nome: document.getElementById("nome").value,
            email: document.getElementById("email").value,
            telefone: document.getElementById("telefone").value,
            mensagem: document.getElementById("mensagem").value
        })
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
        }, function(error) {
            alert("Erro ao enviar. Verifique as configurações.");
            console.log(error);
        });
    });