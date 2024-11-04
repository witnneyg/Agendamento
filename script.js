const agendamento = document.getElementById("agendamento");
const formContainer = document.getElementById("formContainer");

agendamento.addEventListener("change", function () {
  let cursoSelecionado = this.value;

  formContainer.innerHTML = "";

  let iframe = document.createElement("iframe");
  iframe.allowFullscreen = true;

  switch (cursoSelecionado) {
    case "administracao":
      iframe.src = "link_administracao";
      break;
    case "agronomia":
      iframe.src = "link_agronomia";
      break;
    case "direito":
      iframe.src = "link_direito";
      break;
    case "ed_fisica":
      iframe.src = "link_ed_fisica";
      break;
    case "enfermagem":
      iframe.src = "";
      break;
    case "engenharia_civil":
      iframe.src = "link_engenharia_civil";
      break;
    case "fisioterapia":
      iframe.src = "link_fisioterapia";
      break;
    case "gestao_ti":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSc7vrT8v6vjg56dWXxi8S5yPpSRYFKV4JX9ESeTWtcfdGnoUg/viewform?embedded=true";
      break;
    case "letras":
      iframe.src = "link_letras";
      break;
    case "medicina":
      iframe.src = "link_medicina";
      break;
    case "medicina_veterinaria":
      iframe.src = "link_medicina_veterinaria";
      break;
    case "odontologia":
      iframe.src = "link_odontologia";
      break;
    case "pedagogia":
      iframe.src = "link_pedagogia";
      break;
    case "psicologia":
      iframe.src = "link_psicologia";
      break;
    default:
      iframe = null;
  }

  if (iframe) formContainer.appendChild(iframe);
});
