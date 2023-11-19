
//variavel validação
const campoLogin = document.querySelector("#Login");
const campoSenha = document.querySelector("#Senha");
const buttonEnviar = document.querySelector("button");

//criando um elemento p 
const pMensagem = document.createElement("p");

function clearForm(){
    campoLogin.valeu = "";
    campoSenha.valeu = "";
}
//função da validação 
buttonEnviar.addEventListener("click",function(event){
    event.preventDefault();
    if(campoLogin.value === '') {
        
        pMensagem.textContent = "Insira seu Login";
        campoLogin.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","erro");
        
        return false;
    }
    if(campoSenha.value === '') {
        
        pMensagem.textContent = "Insira sua senha ";
        campoSenha.insertAdjacentElement("afterend",pMensagem)
        pMensagem.setAttribute("class","erro");
        
        return false;
    }
   
   

});

