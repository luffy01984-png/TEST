// ====================================
//  DATA.CATEGORIES — Liste de toutes les catégories et partenaires
// ====================================
const categories = [
  {
    id: "resto",
    name: "RESTAURANTS",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Restaurant.webp",
    partners: [
      { name: "AllPizza&Pasta Buffet", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/allpizzabuffet.webp" },
      { name: "Food Truck Fermier", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/food%20truck%20fermier.webp" },
      { name: "Le Loft", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/LeLoft.webp" },
      { name: "Paella de Valencia", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/La-Paella.webp" },
      { name: "Pasta&Pizza", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Pasta%26Pizza.webp" },
      { name: "Rod's", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Rods.webp" },
      { name: "WokAna", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/WokAna.webp" }
    ]
  },
  {
    id: "gout",
    name: "ARTISANS DU GOÛT",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=800",
    partners: [
      { name: "Biocoop", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/biocoop.webp" },
      { name: "Boucherie André", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/boucherie_andré.webp" },
      { name: "Cerdon AOC Gabin Grobon", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Cerdon.webp" },
      { name: "Grain d'pain", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/grain%20dpain.webp" },
      { name: "Janny fruits", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/janny%20fruits.webp" },
      { name: "La Cézée", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/la_cezee.webp" },
      { name: "Les Pépites Bressanes", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Les_pepites_bressanes_new.webp" },
      { name: "LouPan", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/lou%20pan.webp" },
      { name: "Monts et Terroir", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Monts%20et%20Terroir.webp" },
      { name: "Papilles Ain Solites", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Papilles_Ain_solites.webp" }
    ]
  },
  {
    id: "travaux",
    name: "MAISON / TRAVAUX",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/maison_travaux.jpg",
    partners: [
      { name: "Arbres & CO", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Arbres_Co.webp" },
      { name: "A.F Energies", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/AfrEnergie.webp" },
      { name: "Chaleur et bois", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/chaleur%20et%20bois.webp" },
      { name: "Conforama", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Conforama.webp" },
      { name: "Cuisinella", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Cuisinella.webp" },
      { name: "DSCV Frelons", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/DSCV.webp" },
      { name: "Ecocuisine", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/ecocuisine.webp" },
      { name: "Habitat Confort", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/habitat%20confort.webp" },
      { name: "Les Coques de Bresse", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Les%20coqs%20de%20Bresse.webp" },
      { name: "MirePoix", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/MirePoix.webp" },
      { name: "Parisot Motoculture", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/michel%20parisot.webp" },
      { name: "Schmidt", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/schmidt.webp" },
      { name: "Sikkens Solutions", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/sikkens.webp" }
    ]
  },
  {
    id: "auto",
    name: "AUTOMOBILE",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/futuristic-black-glowing-car-desktop-wallpaper-preview.jpg",
    partners: [
      { name: "0€ PareBrise", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/images/0%E2%82%AC_PareBrise.webp" },
      { name: "123 Parebrise", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/123%20parebrise.webp" },
      { name: "APC", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/apc.webp" },
      { name: "Auto Securitas", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/auto%20securitas.webp" },
      { name: "Autosur", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Autosur_new.webp" },
      { name: "CtEasy.com", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/CtEasy.com.webp" },
      { name: "Renault", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/renault.webp" },
      { name: "RJ Auto Services", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/RJAuto.webp" },
      { name: "Speedy", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/speedy.webp" },
      { name: "Vulco", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Vulco.webp" }
    ]
  },
  {
    id: "vetement-lingerie",
    name: "PRÊT-À-PORTER",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Pretaporter.webp",
    partners: [
      { name: "Dessous_Dessus", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Dessous_dessus.webp" },
      { name: "Gambetta", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Gambetta.webp" }
    ]
  },
  {
    id: "beaute-bienetre",
    name: "BEAUTÉ / BIEN-ÊTRE",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/Beaut%C3%A9-bien.webp",
    partners: [
      { name: "15th Avenue Coiffure", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/15ThAvenue.webp" },
      { name: "Galerie102", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Gallerie%20102.webp" },
      { name: "Le Salon des Hommes", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/LeSalondeshommes.webp" },
      { name: "Renaissance Coiffure", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Renaissance.webp" }
    ]
  },
  {
    id: "culture",
    name: "CULTURE / LOISIRS",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/LogoCulture.webp",
    partners: [
      { name: "Déclic Ludik", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/declic-ludik.webp" },
      { name: "Librairie du Théâtre", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Librairie_papeterie.webp" },
      { name: "Montbarbon", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/montbarbon.webp" }
    ]
  },
  {
    id: "quotidien-content",
    name: "QUOTIDIEN",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/services.png",
    partners: [
      { name: "A Fleur de pot", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/a%20fleur%20de%20pot.webp" },
      { name: "Ca Crée Ca Cause", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Ca-cree-.webp" },
      { name: "Cigusto", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/cigusto.webp" },
      { name: "Concept_Optique", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/ConceptOptique.webp" },
      { name: "La Rek1que", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/la%20rek1ke.webp" },
      { name: "Shiva", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Shivaa.webp" }
    ]
  },
  {
    id: "enfants-content",
    name: "AUTOUR DE L'ENFANT",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/enfants.webp",
    partners: [
      { name: "Autour de Bébé", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/autour%20de%20bebe.webp" },
      { name: "KingJouet", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/KingJouet.webp" }
    ]
  },
  {
    id: "animal-content",
    name: "ANIMAUX",
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800",
    partners: [
      { name: "Espace Passion Animalerie", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/espace_passon_new.webp" },
      { name: "Food Animo", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/food%20animo.webp" }
    ]
  },
  {
    id: "event-content",
    name: "FINANCEMENT",
    image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/financement.webp",
    partners: [
      { name: "Himosty", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/hymosti.webp" },
      { name: "La centrale du Financement", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/La_centrale_de_finacement.webp" },
      { name: "MeilleurTaux", image: "https://raw.githubusercontent.com/luffy01984-png/Renault-trucks-CE/main/assets/assets/Meilleur-taux.webp" }
    ]
  }
];

// ====================================
//  UTILITAIRES — Toggle & Modal (inchangés)
// ====================================
function toggleCategory(id) {
  const section = document.getElementById(id);
  const card = document.querySelector(`[onclick="toggleCategory('${id}')"]`);

  const isOpening = !section.classList.contains("active");

  document.querySelectorAll(".partner-content").forEach(item => {
    if (item.id !== id) item.classList.remove("active");
  });
  document.querySelectorAll(".category-card").forEach(c => {
    c.classList.remove("active");
  });

  section.classList.toggle("active");
  if (isOpening) card.classList.add("active");

  setTimeout(() => {
    if (!isOpening) return;
    const header = document.querySelector("header");
    const headerHeight = header ? header.offsetHeight : 0;
    const cardTop = card.getBoundingClientRect().top + window.scrollY;
    const scrollTarget = cardTop - headerHeight - 15;
    const finalScroll = Math.max(0, scrollTarget);
    if (card.getBoundingClientRect().top < headerHeight + 10) {
      window.scrollTo({ top: finalScroll, behavior: "smooth" });
    }
  }, 300);
}

function openModal(imageUrl) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  modalImg.src = imageUrl;
  modal.classList.add("open");
}

function closeModal() {
  document.getElementById("modal").classList.remove("open");
}

