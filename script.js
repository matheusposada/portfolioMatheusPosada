// =========================
// ANIMAÇÃO FADE-SLIDE AO ROLAR
// =========================
document.addEventListener("DOMContentLoaded", function () {
  const elementos = document.querySelectorAll("section, .cards .card, .sobre-card, .cards-inicio .card");

  function checkPosition() {
    const triggerBottom = window.innerHeight * 0.85;
    elementos.forEach(el => {
      const elTop = el.getBoundingClientRect().top;
      if (elTop < triggerBottom) {
        el.classList.add("show");
      }
    });
  }

  elementos.forEach(el => el.classList.add("fade-slide"));
  window.addEventListener("scroll", checkPosition);
  checkPosition();
});

// =========================
// SCROLL SUAVE PARA SESSÕES
// =========================
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// =========================
// SCROLL SUAVE MENU LATERAL
// =========================
const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1); // tira o #
    const targetEl = document.getElementById(targetId);
    if(targetEl) {
      targetEl.scrollIntoView({behavior: 'smooth'});
    }
  });
});
// =========================
// BOTÃO VOLTAR AO TOPO
// =========================
const btnTop = document.getElementById("scroll-top");
btnTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// =========================
// BOTÃO IR PARA PRÓXIMA SEÇÃO
// =========================
const btnNext = document.getElementById("scroll-next");
const sections = document.querySelectorAll("section");

function updateScrollNextVisibility() {
  const scrollPos = window.scrollY + window.innerHeight / 2;
  const lastSection = sections[sections.length - 1];

  if (scrollPos >= lastSection.offsetTop) {
    btnNext.style.display = "none";
  } else {
    btnNext.style.display = "block";
  }
}

btnNext.addEventListener("click", () => {
  const scrollPos = window.scrollY;
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].offsetTop > scrollPos + 10) {
      sections[i].scrollIntoView({ behavior: "smooth" });
      break;
    }
  }
});

// Atualiza visibilidade dos botões
// Atualiza visibilidade dos botões
function updateScrollButtonsVisibility() {
  const scrollPos = window.scrollY;
  const firstSection = document.getElementById("home"); // referência ao header
  const lastSection = sections[sections.length - 1];

  // Voltar ao topo: aparece só depois do topo da página inicial
  btnTop.style.display = (scrollPos > firstSection.offsetTop + 10) ? "block" : "none";

  // Próxima seção: desaparece na última seção
  btnNext.style.display = (scrollPos + 10 >= lastSection.offsetTop) ? "none" : "block";
}

// Atualiza a visibilidade ao rolar ou redimensionar
window.addEventListener("scroll", updateScrollButtonsVisibility);
window.addEventListener("resize", updateScrollButtonsVisibility);
updateScrollButtonsVisibility(); // chama no carregamento
// =========================
// CARD DE EMAIL
// =========================
function toggleEmail() {
  const emailText = document.getElementById("email-text");
  if (emailText.style.display === "block") {
    emailText.style.display = "none";
  } else {
    emailText.style.display = "block";
  }
}

