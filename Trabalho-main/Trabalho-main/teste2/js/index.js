// Função para alternar entre os formulários
function alternarFormulario(formAtivo, formInativo) {
    formAtivo.classList.add("active");  // Exibe o formulário ativo
    formInativo.classList.remove("active");  // Oculta o formulário inativo
}

// Função para validar o email
function validarEmail(email) {
    const padraoEmail = /^[\w\.-]+@[\w\.-]+\.\w+$/;
    return padraoEmail.test(email);
}

// Função para validar o formulário de "Sign In"
function validarSignIn() {
    const email = document.querySelector("#signInForm input[type='text']").value.trim();
    const senha = document.querySelector("#signInForm input[type='password']").value.trim();

    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    alert("Login realizado com sucesso!");
    return true;
}

// Função para validar o formulário de "Sign Up" (incluindo Confirmar Senha)
function validarSignUp() {
    const email = document.querySelector("#signUpForm input[type='text']").value.trim();
    const senha = document.querySelector("#signUpForm input[type='password']").value.trim();
    const confirmarSenha = document.querySelector("#signUpForm input[type='password']:nth-of-type(2)").value.trim(); // Captura a "Confirmar Senha"
    const termos = document.querySelector("#signUpForm input[type='checkbox']").checked;

    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return false;
    }

    if (senha.length < 6) {
        alert("A senha deve ter pelo menos 6 caracteres.");
        return false;
    }

    // Verifica se as senhas coincidem
    if (senha != confirmarSenha) {
        alert("As senhas não coincidem.");
        return false;
    }

    if (!termos) {
        alert("Você deve aceitar os Termos para continuar.");
        return false;
    }
    if (senha==confirmarSenha){
    alert("Cadastro realizado com sucesso!");
    return true;
    }
}

// Seleciona os botões e formulários
const btnSignIn = document.getElementById("btnSignIn");
const btnSignUp = document.getElementById("btnSignUp");
const formSignIn = document.getElementById("signInForm");
const formSignUp = document.getElementById("signUpForm");

// Alternar entre os formulários Sign In e Sign Up
btnSignIn.addEventListener("click", function() {
    alternarFormulario(formSignIn, formSignUp);  // Alterna os formulários sem validação ao alternar
});

btnSignUp.addEventListener("click", function() {
    alternarFormulario(formSignUp, formSignIn);  // Alterna os formulários sem validação ao alternar
});

// Validação ao submeter o formulário de Sign In
document.querySelector("#signInForm button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();  // Impede o envio do formulário padrão

    if (validarSignIn()) {
        // Lógica para enviar os dados de login
        console.log("Login efetuado com sucesso!");
    }
});

// Validação ao submeter o formulário de Sign Up (incluindo a verificação da confirmação de senha)
document.querySelector("#signUpForm button[type='submit']").addEventListener("click", function(event) {
    event.preventDefault();  // Impede o envio do formulário padrão

    if (validarSignUp()) {
        // Lógica para enviar os dados de cadastro
        console.log("Cadastro efetuado com sucesso!");
        // Redirecionamento após cadastro bem-sucedido
        window.location.href = "home.html";  // Substitua "home.html" pelo nome da página de destino
    }
});
