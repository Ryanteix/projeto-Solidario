document.addEventListener("DOMContentLoaded", () => {
  // Atualiza o ano do rodapé automaticamente.
  document.querySelectorAll("[data-current-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Menu de navegação acessível em telas pequenas.
  const menuToggle = document.querySelector(".menu-toggle");
  const mainNav = document.querySelector(".main-nav");
  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isOpen));
      mainNav.classList.toggle("is-open", !isOpen);
    });
    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.focus();
      }
    });
  }

  // Filtro de projetos por categoria.
  const filterButtons = document.querySelectorAll("[data-filter]");
  const projectCards = document.querySelectorAll(".filterable-card");
  const emptyMessage = document.querySelector("#filter-empty");
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.dataset.filter;
      let visibleCount = 0;
      filterButtons.forEach((item) => {
        const selected = item === button;
        item.classList.toggle("is-selected", selected);
        item.setAttribute("aria-pressed", String(selected));
      });
      projectCards.forEach((card) => {
        const visible = category === "todos" || card.dataset.category === category;
        card.hidden = !visible;
        if (visible) visibleCount += 1;
      });
      if (emptyMessage) emptyMessage.hidden = visibleCount !== 0;
    });
  });

  // Máscaras de CPF, telefone e CEP: permitem digitar apenas números.
  const digitsOnly = (value) => value.replace(/\D/g, "");
  const cpfInput = document.querySelector("#cpf");
  if (cpfInput) {
    cpfInput.addEventListener("input", () => {
      let value = digitsOnly(cpfInput.value).slice(0, 11);
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d)/, "$1.$2");
      value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      cpfInput.value = value;
    });
  }

  const phoneInput = document.querySelector("#telefone");
  if (phoneInput) {
    phoneInput.addEventListener("input", () => {
      let value = digitsOnly(phoneInput.value).slice(0, 11);
      if (value.length > 10) {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, "($1) $2-$3");
      } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
      } else if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
      } else if (value.length > 0) {
        value = value.replace(/^(\d*)/, "($1");
      }
      phoneInput.value = value;
    });
  }

  const cepInput = document.querySelector("#cep");
  if (cepInput) {
    cepInput.addEventListener("input", () => {
      let value = digitsOnly(cepInput.value).slice(0, 8);
      if (value.length > 5) value = value.replace(/^(\d{5})(\d{1,3})$/, "$1-$2");
      cepInput.value = value;
    });
  }

  // Preenche o tipo de participação a partir de links como cadastro.html?perfil=voluntario.
  const profileSelect = document.querySelector("#perfil");
  if (profileSelect) {
    const requestedProfile = new URLSearchParams(window.location.search).get("perfil");
    const validProfiles = ["voluntario", "doador", "parceiro", "informacoes"];
    if (requestedProfile && validProfiles.includes(requestedProfile)) {
      profileSelect.value = requestedProfile;
    }
  }

  // Define a data máxima de nascimento como hoje.
  const birthDate = document.querySelector("#nascimento");
  if (birthDate) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000)
      .toISOString()
      .slice(0, 10);
    birthDate.max = localDate;
  }

  // Validação demonstrativa: não transmite nem salva os dados.
  const form = document.querySelector("#cadastro-form");
  const feedback = document.querySelector("#form-feedback");
  if (form && feedback) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      feedback.hidden = false;
      feedback.textContent = "Validação concluída! Esta é uma demonstração acadêmica: os dados não foram enviados nem armazenados. Para receber cadastros reais, conecte o formulário a um backend seguro.";
      feedback.focus();
      feedback.setAttribute("tabindex", "-1");
    });
  }
});
