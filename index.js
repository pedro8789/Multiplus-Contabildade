

function sendEMail(){
    var params= {
    Nome: document.getElementById("Nome").value,
    Email: document.getElementById("email").value,
    Telefone: document.getElementById("Telefone").value,
    Whatsapp: document.getElementById("Whatsapp").value,
    Endereço: document.getElementById("Endereço").value,
    mensagem: document.getElementById("mensagem").value,
    }
    
        const ServiceId = "service_14xu7zd";
        const templateId = "template_84zxbl9";

        emailjs
        .send(ServiceId,templateId,params)
        .then((res) => {
        document.getElementById("Nome").value = "",
        document.getElementById("email").value = "",
        document.getElementById("Telefone").value = "",
        document.getElementById("Whatsapp").value = "",
        document.getElementById("Endereço").value = "",
        document.getElementById("mensagem").value = "",
        alert("formulário preenchido com sucesso"),
        console.log(res)
                    })
        .catch((err) => console.log(err));
}
