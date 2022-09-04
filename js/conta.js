// variaveis
let nome = document.getElementById("nomeuser");
let email = document.getElementById("emailuser");
let senha = document.getElementById("senhauser");
let botaologar = document.getElementById("botaologar");
let botaovazar = document.getElementById("botaovazar");

// metodos

const sairDaConta = () => {
  localStorage.removeItem("usuarioMarcao");
};

// eventos

if (window.location.pathname == "/conta/cadastro.html") {
  botaologar.addEventListener("click", () => {
    localStorage.setItem(
      "usuarioMarcao",
      JSON.stringify({
        nome: nome.value,
        email: email.value,
        senha: senha.value,
        acao: "cadastrou",
      })
    );
    window.location.pathname = "/";
  });
} else if (window.location.pathname == "/conta/login.html") {
  botaologar.addEventListener("click", () => {
    localStorage.setItem(
      "usuarioMarcao",
      JSON.stringify({
        nome: nome.value,
        senha: senha.value,
        acao: "login",
      })
    );
    window.location.pathname = "/";
  });
}
// controlar links
let conta1 = document.getElementById("conta1");
let conta2 = document.getElementById("conta2");

if (localStorage.getItem("usuarioMarcao")) {
  console.log("get funcionou");
  conta1.innerHTML = "Minha Conta";
  conta1.removeAttribute("href");
  conta1.setAttribute("href", "/conta/perfil.html");
  conta2.removeAttribute("href");
  conta2.setAttribute("href", "/conta/login.html");
  conta2.innerHTML = "Trocar de Conta";
} else {
  console.log("get nao funcionou");
  conta1.removeAttribute("href");
  conta1.setAttribute("href", "/conta/login.html");
  conta2.removeAttribute("href");
  conta2.setAttribute("href", "/conta/cadastro.html");
  conta1.innerHTML = "Login";
  conta2.innerHTML = "Cadastrar";
}

// sair da conta ou to no perfil
try {
  let usuarioname = document.getElementById("usuarioname");
  let exemplo = JSON.parse(localStorage.getItem("usuarioMarcao"));
  let emailinfo = document.getElementById("emailinfo");
  let senhainfo = document.getElementById("senhainfo");
  usuarioname.innerHTML = exemplo.nome;
  senhainfo.innerHTML = "Senha: " + exemplo.senha;
  if (exemplo.acao == "login") {
    emailinfo.innerHTML = "Email: " + exemplo.nome + "@gmail.com";
  } else {
    emailinfo.innerHTML = "Email: " + exemplo.nome;
  }

  botaovazar.addEventListener("click", () => {
    sairDaConta();
  });
} catch (error) {
  console.log("voce nao ta no perfil", error);
}
