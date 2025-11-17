// ====================================
//  TOGGLE CATEGORY — propre & sans rebond
// ====================================
function toggleCategory(id) {
  const section = document.getElementById(id);
  const card = document.querySelector(`[onclick="toggleCategory('${id}')"]`);

  const isOpening = !section.classList.contains("active");

  // Fermer toutes les autres catégories
  document.querySelectorAll(".partner-content").forEach(item => {
    if (item.id !== id) item.classList.remove("active");
  });

  // Reset des ombres
  document.querySelectorAll(".category-card").forEach(c => {
    c.classList.remove("active");
  });

  // Toggle
  section.classList.toggle("active");
  if (isOpening) card.classList.add("active");

  // Attendre l'ouverture réelle (transition CSS)
  setTimeout(() => {
    if (!isOpening) return;

    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;

    // Position de la CARTE
    const cardTop = card.getBoundingClientRect().top + window.scrollY;

    // Calcul : carte juste sous le header
    const scrollTarget = cardTop - headerHeight - 15;

    // PROTECTION : empêcher de scroller trop haut
    const finalScroll = Math.max(0, scrollTarget);

    // Vérifier si la carte dépasse réellement le header
    if (card.getBoundingClientRect().top < headerHeight + 10) {
      window.scrollTo({
        top: finalScroll,
        behavior: "smooth"
      });
    }
  }, 300);
}



// ====================================
//  MODAL (images partenaires)
// ====================================
function openModal(imageUrl) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");

  modalImg.src = imageUrl;
  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

