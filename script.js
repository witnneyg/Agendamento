const agendamento = document.getElementById("agendamento");
const formContainer = document.getElementById("formContainer");

agendamento.addEventListener("change", function () {
  let cursoSelecionado = this.value;

  formContainer.innerHTML = "";

  let iframe = document.createElement("iframe");
  let calendarFrame = document.createElement("iframe");

  iframe.allowFullscreen = true;

  switch (cursoSelecionado) {
    case "administracao":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfZ-EafjDkfrXU7nxOlb6pSHcXgGEDqimYBwcRJ6cJfzgvGYQ/viewform?embedded=true";
      break;
    case "agronomia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSehIx0Brhnl6ety_vduNu2HAY6__HzV471mDuHaRfWYQVp3sw/viewform?embedded=true";
      break;
    case "ciencia_contabeis":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSctzsG_JC7LYloo9ApUlxFUgbTV5iqk5sXAZv-Ie3v-EVtjyw/viewform?embedded=true";
      break;
    case "direito":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSd8HzWzMF1TdxbwTAkFAtTzRIMqESd10iwovNMZQt6NrGnajA/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_710de18573fe946dde33582ec808df8b523511cbb705b6e051f90c494dd219b0%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      break;
    case "ed_fisica":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfps67xcaALNwoOnXHmRu28CO30uPyrg40VI6QXJO613DIe4g/viewform?embedded=true";
      break;
    case "enfermagem":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSdBzuLlGMHbXjtLq-7ndA-FNd8G1K-8c3kDCF6w0RiTssGEww/viewform?embedded=true";
      break;
    case "engenharia_civil":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLScpPGb7Kry8sAAc26V8vSnObpU6mBLH3JW9yMx7_iv9_r8YRw/viewform?embedded=true";
      break;
    case "fisioterapia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfzMEX1b5ShPVGnZjnJGuQgNbRg9C0EXQmr1fe1wMSCnH5v1A/viewform?embedded=true";
      break;
    case "gestao_ti":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSc7vrT8v6vjg56dWXxi8S5yPpSRYFKV4JX9ESeTWtcfdGnoUg/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_4babce7714a53aa5e4c419de26352a49fd266621c3e1286af2600b0871df317d%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      break;
    case "letras":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSdcydJjumCRbQZ-a72utTUBDPRgtvqbAFGEth_LhNNL9ANfbg/viewform?embedded=true";
      break;
    case "medicina":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLScGadbgDPS3rkvYr0ftzake1n8QDPwp8Pa1KxFvcwRcRwE7UA/viewform?embedded=true";
      break;
    case "medicina_veterinaria":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSd4-RHM2UPqLilgbcbO2YdUluvEPNftd8d2UKJORgZc5CA8_g/viewform?embedded=true";
      break;
    case "odontologia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSffODXC_Jr4B5nQzWXY3Wu_dsAEJk-KCM8mb2BCQX3w8cun6w/viewform?embedded=true";
      break;
    case "pedagogia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSftoOdZAHtAb8tFbBMqqO7BQl5M_0nrusZbWiqCVgbg854eJg/viewform?embedded=true";
      break;
    case "psicologia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSeNJ84bviYGUKiIPG7cXoewfelaXut896ymR-U77WMm3o8_bQ/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_110ce141b01af24debdbc21935b07b0f9635c7c209bfe7ca1a371dfb0d0e9950%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      break;
    default:
      iframe = null;
  }

  if (iframe) formContainer.appendChild(iframe);

  if (calendarFrame) formContainer.appendChild(calendarFrame);
});
