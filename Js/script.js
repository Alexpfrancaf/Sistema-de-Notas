const formLogin = document.getElementById("loginform");
const emailInput = document.getElementById("email");
const senhaInput = document.getElementById("senha");
const erroLogin = document.getElementById("error");

formLogin.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim().toLowerCase();
  const senha = senhaInput.value.trim();

  if (!email || !senha) {
    erroLogin.textContent = "Preencha todos os campos.";
    return;
  }

  const resposta = await fetch("/api/login.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha })
  });

  const dados = await resposta.json();

  if (dados.erro) {
    erroLogin.textContent = dados.erro;
    return;
  }

  window.location.href = "notas.html";
});
