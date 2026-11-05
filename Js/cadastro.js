const formCadastro = document.getElementById("loginform");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erroCadastro = document.getElementById("error");

formCadastro.addEventListener("submit", async function (event) {
  event.preventDefault();

  const nome = nomeInput.value.trim();
  const email = emailInput.value.trim().toLowerCase();
  const senha = senhaInput.value.trim();

  if (!nome || !email || !senha) {
    erroCadastro.textContent = "Preencha todos os campos.";
    return;
  }

  const resposta = await fetch("/api/cadastro.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, email, senha })
  });

  const dados = await resposta.json();

  if (dados.erro) {
    erroCadastro.textContent = dados.erro;
    return;
  }

  window.location.href = "index.html";
});
