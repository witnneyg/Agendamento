const agendamento = document.getElementById("agendamento");
const formContainer = document.getElementById("formContainer");

agendamento.addEventListener("change", function () {
  let cursoSelecionado = this.value;

  formContainer.innerHTML = "";

  let iframe = document.createElement("iframe");
  let calendarFrame = document.createElement("iframe");
  const calendarLink = document.createElement("a");
  const calendarContainer = document.createElement("div");

  calendarContainer.style.display = "flex";
  calendarContainer.style.flexDirection = "column";
  calendarContainer.style.gap = "0px";
  calendarContainer.style.alignItems = "center";
  calendarContainer.style.width = "100%";
  calendarContainer.style.marginBottom = "8rem";

  calendarLink.style.fontSize = "1rem";
  calendarLink.target = "_blank";

  iframe.allowFullscreen = true;

  switch (cursoSelecionado) {
    case "administracao":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfZ-EafjDkfrXU7nxOlb6pSHcXgGEDqimYBwcRJ6cJfzgvGYQ/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_899178fb61ee3e449bbe2e1dce3a39b8bf916c7b6ceb9fb0d755f5282ba360f4%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y184OTkxNzhmYjYxZWUzZTQ0OWJiZTJlMWRjZTNhMzliOGJmOTE2YzdiNmNlYjlmYjBkNzU1ZjUyODJiYTM2MGY0QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Administração";
      break;
    case "agronomia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSehIx0Brhnl6ety_vduNu2HAY6__HzV471mDuHaRfWYQVp3sw/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_2b7796de30e9eefdbcf2bc46948fb6e564e3e174f4e1cccd2015cbd1c016c17a%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y18yYjc3OTZkZTMwZTllZWZkYmNmMmJjNDY5NDhmYjZlNTY0ZTNlMTc0ZjRlMWNjY2QyMDE1Y2JkMWMwMTZjMTdhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Agronomia";
      break;
    case "ciencia_contabeis":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSctzsG_JC7LYloo9ApUlxFUgbTV5iqk5sXAZv-Ie3v-EVtjyw/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_08ffaa1b8d281dccbdeb1dc49522fc425c35d1c1622ee91f1c6ac12ca80e3137%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y18wOGZmYWExYjhkMjgxZGNjYmRlYjFkYzQ5NTIyZmM0MjVjMzVkMWMxNjIyZWU5MWYxYzZhYzEyY2E4MGUzMTM3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Ciências contábeis";
      break;
    case "direito":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSd8HzWzMF1TdxbwTAkFAtTzRIMqESd10iwovNMZQt6NrGnajA/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_93e84f49fcf0ea4fa0a31862c9e3d9705ddbdfa6db0c8378fb0d088f6a60adca%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y185M2U4NGY0OWZjZjBlYTRmYTBhMzE4NjJjOWUzZDk3MDVkZGJkZmE2ZGIwYzgzNzhmYjBkMDg4ZjZhNjBhZGNhQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Direito";
      break;
    case "ed_fisica":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfps67xcaALNwoOnXHmRu28CO30uPyrg40VI6QXJO613DIe4g/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_7878a8a1dad96ad964da37f34b826d995f2d6fa494ef8e45f925139f978fd465%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y183ODc4YThhMWRhZDk2YWQ5NjRkYTM3ZjM0YjgyNmQ5OTVmMmQ2ZmE0OTRlZjhlNDVmOTI1MTM5Zjk3OGZkNDY1QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Educação Fisica";
      break;
    case "enfermagem":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSdBzuLlGMHbXjtLq-7ndA-FNd8G1K-8c3kDCF6w0RiTssGEww/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_14e0d2b93b483c42f82f6c737096ad4add669e5f495270898654ef197bfdbcab%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y18xNGUwZDJiOTNiNDgzYzQyZjgyZjZjNzM3MDk2YWQ0YWRkNjY5ZTVmNDk1MjcwODk4NjU0ZWYxOTdiZmRiY2FiQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Enfermagem";
      break;
    case "engenharia_civil":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLScpPGb7Kry8sAAc26V8vSnObpU6mBLH3JW9yMx7_iv9_r8YRw/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_fdff762d1cf826fb87c0482ebba50f2c22d3d8110618df9d138772c51e7c57cf%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y19mZGZmNzYyZDFjZjgyNmZiODdjMDQ4MmViYmE1MGYyYzIyZDNkODExMDYxOGRmOWQxMzg3NzJjNTFlN2M1N2NmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Engenharia Civil";
      break;
    case "fisioterapia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSfzMEX1b5ShPVGnZjnJGuQgNbRg9C0EXQmr1fe1wMSCnH5v1A/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_b73bee46dd99f14d1e7a25dbdbbc2e6f4f57893a7678e2242f867c4ed09590d7%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y19iNzNiZWU0NmRkOTlmMTRkMWU3YTI1ZGJkYmJjMmU2ZjRmNTc4OTNhNzY3OGUyMjQyZjg2N2M0ZWQwOTU5MGQ3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Fisioterapia";
      break;
    case "gestao_ti":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSdFtUr5OAhVhfEXqPPitAKgvr3_ZzdfjMgEgu2Wja2RZXyEXg/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_4babce7714a53aa5e4c419de26352a49fd266621c3e1286af2600b0871df317d%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y180YmFiY2U3NzE0YTUzYWE1ZTRjNDE5ZGUyNjM1MmE0OWZkMjY2NjIxYzNlMTI4NmFmMjYwMGIwODcxZGYzMTdkQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML =
        "Acessar o Google Agenda de Gestão da Tecnologia da Informação";
      break;
    case "letras":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSdcydJjumCRbQZ-a72utTUBDPRgtvqbAFGEth_LhNNL9ANfbg/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_ba7da85a5f5ff749fcba2281281b15f019ff21c22bdbfe8de86ef4068c0bffa7%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y19iYTdkYTg1YTVmNWZmNzQ5ZmNiYTIyODEyODFiMTVmMDE5ZmYyMWMyMmJkYmZlOGRlODZlZjQwNjhjMGJmZmE3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Letras";
      break;
    case "medicina":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLScGadbgDPS3rkvYr0ftzake1n8QDPwp8Pa1KxFvcwRcRwE7UA/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_f685b060102dccaba54b60c28d9bceb8c9dc022c8048043579fae36a130bdbb7%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y19mNjg1YjA2MDEwMmRjY2FiYTU0YjYwYzI4ZDliY2ViOGM5ZGMwMjJjODA0ODA0MzU3OWZhZTM2YTEzMGJkYmI3QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Medicina";
      break;
    case "medicina_veterinaria":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSd4-RHM2UPqLilgbcbO2YdUluvEPNftd8d2UKJORgZc5CA8_g/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_6d06b861cd507f9b4baadd5fc2229fd36b5b6a8b0443baf3479be41f19fb8259%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y182ZDA2Yjg2MWNkNTA3ZjliNGJhYWRkNWZjMjIyOWZkMzZiNWI2YThiMDQ0M2JhZjM0NzliZTQxZjE5ZmI4MjU5QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML =
        "Acessar o Google Agenda de Medicina Veterinária";
      break;
    case "odontologia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSffODXC_Jr4B5nQzWXY3Wu_dsAEJk-KCM8mb2BCQX3w8cun6w/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_74614b5d1345d8813af6776904309136ee05a199430839d2eb009c3746370f2f%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y183NDYxNGI1ZDEzNDVkODgxM2FmNjc3NjkwNDMwOTEzNmVlMDVhMTk5NDMwODM5ZDJlYjAwOWMzNzQ2MzcwZjJmQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Odontologia";
      break;
    case "pedagogia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSftoOdZAHtAb8tFbBMqqO7BQl5M_0nrusZbWiqCVgbg854eJg/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_e98c568f4e8f800c198a9332ba086689cf494b789c0929bf8a52217294f224a6%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y19lOThjNTY4ZjRlOGY4MDBjMTk4YTkzMzJiYTA4NjY4OWNmNDk0Yjc4OWMwOTI5YmY4YTUyMjE3Mjk0ZjIyNGE2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Pedagogia";
      break;
    case "psicologia":
      iframe.src =
        "https://docs.google.com/forms/d/e/1FAIpQLSeNJ84bviYGUKiIPG7cXoewfelaXut896ymR-U77WMm3o8_bQ/viewform?embedded=true";
      calendarFrame.src =
        "https://calendar.google.com/calendar/embed?src=c_110ce141b01af24debdbc21935b07b0f9635c7c209bfe7ca1a371dfb0d0e9950%40group.calendar.google.com&ctz=America%2FSao_Paulo";
      calendarLink.href =
        "https://calendar.google.com/calendar/u/0?cid=Y18xMTBjZTE0MWIwMWFmMjRkZWJkYmMyMTkzNWIwN2IwZjk2MzVjN2MyMDliZmU3Y2ExYTM3MWRmYjBkMGU5OTUwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20";
      calendarLink.innerHTML = "Acessar o Google Agenda de Psicologia";
      break;
    default:
      iframe = null;
  }

  if (iframe) formContainer.appendChild(iframe);
  calendarContainer.appendChild(calendarFrame);
  calendarContainer.appendChild(calendarLink);
  formContainer.appendChild(calendarContainer);
});
