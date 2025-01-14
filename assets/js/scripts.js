let valorHora = 0; // Variável para armazenar o valor da hora calculado

// Função para exibir mensagem de erro no campo correspondente
function exibirErro(campoId, mensagem) {
  const erroDiv = document.getElementById(`erro-${campoId}`);
  if (erroDiv) {
    erroDiv.textContent = mensagem;
    erroDiv.style.display = "block";
  }
}

// Função para esconder mensagem de erro no campo correspondente
function esconderErro(campoId) {
  const erroDiv = document.getElementById(`erro-${campoId}`);
  if (erroDiv) {
    erroDiv.style.display = "none";
  }
}

// Função para calcular o valor da hora
function calcularValorHora() {
  // Obtendo valores dos inputs
  const renda = parseFloat(document.getElementById("renda").value);
  const horasPorDia = parseFloat(document.getElementById("horasPorDia").value);
  const diasPorSemana = parseFloat(
    document.getElementById("diasPorSemana").value
  );
  const ferias = parseFloat(document.getElementById("ferias").value);

  let erro = false;

  // Validando entradas e exibindo mensagens de erro
  if (isNaN(renda) || renda <= 0) {
    exibirErro("renda", "Por favor, insira uma renda mensal válida.");
    erro = true;
  } else {
    esconderErro("renda");
  }

  if (isNaN(horasPorDia) || horasPorDia <= 0) {
    exibirErro("horasPorDia", "Por favor, insira um número válido de horas por dia.");
    erro = true;
  } else {
    esconderErro("horasPorDia");
  }

  if (isNaN(diasPorSemana) || diasPorSemana <= 0) {
    exibirErro("diasPorSemana", "Por favor, insira um número válido de dias por semana.");
    erro = true;
  } else {
    esconderErro("diasPorSemana");
  }

  if (isNaN(ferias) || ferias < 0) {
    exibirErro("ferias", "Por favor, insira um número válido de semanas de férias.");
    erro = true;
  } else {
    esconderErro("ferias");
  }

  // Se houver algum erro, interrompe o cálculo
  if (erro) return;

  // Calculando semanas trabalhadas e total de horas no ano
  const semanasTrabalhadas = 52 - ferias; // Total de semanas - semanas de férias
  const totalHorasAno = horasPorDia * diasPorSemana * semanasTrabalhadas; // Total de horas no ano

  // Calculando a renda anual
  const rendaAnual = renda * 12; // Renda mensal multiplicada por 12 meses

  // Calculando o valor da hora
  valorHora = rendaAnual / totalHorasAno;

  // Formatando o valor da hora para o formato brasileiro
  const valorHoraFormatado = valorHora.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Exibindo o resultado do valor da hora
  document.getElementById("valorHoraFinal").innerText = valorHoraFormatado;
  document.getElementById("resultadoValorHora").innerText = valorHoraFormatado;
}

// Função para calcular o valor do projeto
function calcularValorProjeto() {
  // Obtendo valores dos inputs
  const horasProjeto = parseFloat(
    document.getElementById("horasProjeto").value
  );
  const diasProjeto = parseFloat(document.getElementById("diasProjeto").value);

  let erro = false;

  // Validando entradas e exibindo mensagens de erro
  if (isNaN(horasProjeto) || horasProjeto <= 0) {
    exibirErro("horasProjeto", "Por favor, insira um número válido de horas para o projeto.");
    erro = true;
  } else {
    esconderErro("horasProjeto");
  }

  if (isNaN(diasProjeto) || diasProjeto <= 0) {
    exibirErro("diasProjeto", "Por favor, insira um número válido de dias para o projeto.");
    erro = true;
  } else {
    esconderErro("diasProjeto");
  }

  // Se houver algum erro, interrompe o cálculo
  if (erro) return;

  // Calculando o valor do projeto
  const valorProjeto = valorHora * horasProjeto * diasProjeto;

  // Formatando o valor do projeto para o formato brasileiro
  const valorProjetoFormatado = valorProjeto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  // Exibindo o resultado do valor do projeto
  document.getElementById("valorProjetoFinal").innerText =
    valorProjetoFormatado;
  document.getElementById("resultadoValorProjeto").innerText =
    valorProjetoFormatado;
}
function limparCampos() {
  document.getElementById('renda').value = '';
  document.getElementById('horasPorDia').value = '';
  document.getElementById('diasPorSemana').value = '';
  document.getElementById('ferias').value = '';
  document.getElementById('resultadoValorHora').innerText = 'R$ 0,00';
  document.getElementById('valorHoraFinal').innerText = 'R$ 0,00';
}
