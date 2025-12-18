const BASE_URL = "./assets/";
const ASSETS_URL = BASE_URL + "assets/";

const categoriesData = [
    {
        id: "resto-content",
        title: "RESTAURANTS",
        image: BASE_URL + "Restaurant.webp",
        subcategories: [
            {
                title: "Partenaires Restaurants",
                partners: [
                    { name: "1001 Pizzas", img: ASSETS_URL + "1001new.webp" },
                    { name: "AllPizza&Pasta Buffet", img: ASSETS_URL + "buffetpizza.webp" },
                    { name: "Au Bureau", img: ASSETS_URL + "AuBureau.webp" },
                    { name: "BollyFood", img: ASSETS_URL + "bollyfoodnew.webp" },
                    { name: "COCO Bresil", img: ASSETS_URL + "CoCoBresil.webp" },
                    { name: "Le Loft", img: ASSETS_URL + "LeLoft.webp" },
                    { name: "Le Marrakech", img: ASSETS_URL + "Lemarrakech1.webp" },
                    { name: "Leon", img: ASSETS_URL + "Leon.webp" },
                    { name: "Maison B", img: ASSETS_URL + "MaisonB.webp" },
                    { name: "Pasta&Pizza", img: ASSETS_URL + "Pasta%26Pizza.webp" },
                    { name: "Rod's", img: ASSETS_URL + "Roadscofeenew.webp" },
                    { name: "WokAna", img: ASSETS_URL + "wokananew.webp" }
                ]
            },
            {
                title: "Le Beau Marché",
                partners: [
                    { name: "23ème Avenue", img: ASSETS_URL + "23avenue.webp" },
                    { name: "Bande de Maquereaux", img: ASSETS_URL + "bandemaquereau.webp" },
                    { name: "Butch", img: ASSETS_URL + "butch.webp" },
                    { name: "Naan Gang", img: ASSETS_URL + "NaanGang.webp" },
                    { name: "Le Lodge", img: ASSETS_URL + "lelodge.webp" },
                    { name: "Le Napol'in", img: ASSETS_URL + "napolin.webp" },
                    { name: "Ryoko", img: ASSETS_URL + "ryoko.webp" },
                    { name: "The Roster", img: ASSETS_URL + "roster.webp" }
                ]
            }
        ]
    },
    {
        id: "gout-content",
        title: "ARTISANS DU GOÛT",
        image: BASE_URL + "terroir.png",
        subcategories: [
            {
                title: "Boulangerie & Pâtisserie",
                partners: [
                    { name: "Grain d'pain", img: ASSETS_URL + "Graindpainnew.webp" },
                    { name: "La Mie Caline", img: ASSETS_URL + "lamiecaline.webp" },
                    { name: "LouPan", img: ASSETS_URL + "Loupannew.webp" }
                ]
            },
            {
                title: "Boucherie & Traiteur",
                partners: [
                    { name: "Boucherie André", img: ASSETS_URL + "boucherie_andré.webp" },
                    { name: "Les Pépites Bressanes", img: ASSETS_URL + "Les_pepites_bressanes_new.webp" },
                    { name: "Mouret Traiteur", img: ASSETS_URL + "Mouret.webp" },
                    { name: "Paella de Valencia", img: ASSETS_URL + "La-Paella.webp" }
                ]
            },
            {
                title: "Épicerie & Terroir",
                partners: [
                    { name: "Biocoop", img: ASSETS_URL + "biocoopnew.webp" },
                    { name: "Café Allombert", img: BASE_URL + "CafeAllombert.webp" },
                    { name: "Day by Day", img: ASSETS_URL + "daybydaynew.webp" },
                    { name: "Janny fruits", img: ASSETS_URL + "jannyfruitnew.webp" },
                    { name: "Monts et Terroir", img: ASSETS_URL + "Monts%20et%20Terroir.webp" },
                    { name: "Papilles Ain Solites", img: ASSETS_URL + "Papilles_Ain_solites.webp" }
                ]
            }
        ]
    },
    {
        id: "cat-maison",
        title: "🏠 MAISON & TRAVAUX",
        image: BASE_URL + "maison_travaux.jpg",
        subcategories: [
            {
                title: "Achat & Financement",
                partners: [
                    { name: "Himosty", img: ASSETS_URL + "hymnosti.webp" },
                    { name: "La centrale du Financement", img: ASSETS_URL + "lacentralefinancenew.webp" },
                    { name: "MeilleurTaux", img: ASSETS_URL + "Meilleur-taux.webp" }
                ]
            },
            {
                title: "Equipement & Renovation",
                partners: [
                    { name: "A.F Energies", img: ASSETS_URL + "AfrEnergie.webp" },
                    { name: "Carrelage BRESSAN", img: ASSETS_URL + "CarrelageBressan.webp" },
                    { name: "Castorama", img: ASSETS_URL + "Castoramanew.webp" },
                    { name: "Chaleur et bois", img: ASSETS_URL + "chaleuretblisnew.webp" },
                    { name: "Habitat Confort", img: ASSETS_URL + "habitat%20confort.webp" },
                    { name: "Home Elec", img: ASSETS_URL + "Homeelec.webp" },
                    { name: "Pia Gazil", img: ASSETS_URL + "PiaGazil.webp" },
                    { name: "Sikkens Solutions", img: ASSETS_URL + "sikkens.webp" }
                ]
            },
            {
                title: "Cuisine/Electromenager",
                partners: [
                    { name: "Castorama", img: ASSETS_URL + "Castoramanew.webp" },
                    { name: "Conforama", img: ASSETS_URL + "Conforamanew.webp" },
                    { name: "Cuisinella", img: ASSETS_URL + "Cuisinella.webp" },
                    { name: "Ecocuisine", img: ASSETS_URL + "ecocuisine.webp" },
                    { name: "ID Plan", img: ASSETS_URL + "Idplan.webp" },
                    { name: "Mirepoix", img: ASSETS_URL + "MirePoix.webp" },
                    { name: "Schmidt", img: ASSETS_URL + "schmidt.webp" }
                ]
            },
            {
                title: "🌻 Jardin & Extérieur",
                partners: [
                    { name: "Arbres & CO", img: ASSETS_URL + "Arbres_Co.webp" },
                    { name: "DSCV Frelons", img: ASSETS_URL + "dscvnew.webp" },
                    { name: "Fred Multi Services", img: ASSETS_URL + "FredMultiServices.webp" },
                    { name: "GammVert", img: ASSETS_URL + "gammvert.webp" },
                    { name: "IrriPiscine", img: ASSETS_URL + "Irripiscine.webp" },
                    { name: "Les Coques de Bresse", img: ASSETS_URL + "Les%20coqs%20de%20Bresse.webp" },
                    { name: "Parisot Motoculture", img: ASSETS_URL + "michel%20parisot.webp" }
                ]
            }
        ]
    },
    {
        id: "auto-content",
        title: "AUTOMOBILE",
        image: BASE_URL + "futuristic-black-glowing-car-desktop-wallpaper-preview.jpg",
        partners: [
            { name: "0€ PareBrise", img: ASSETS_URL + "images/0%E2%82%AC_PareBrise.webp" },
            { name: "123 Parebrise", img: ASSETS_URL + "123%20parebrise.webp" },
            { name: "APC", img: ASSETS_URL + "apcnew.webp" },
            { name: "Autosur", img: ASSETS_URL + "Autosur_new.webp" },
            { name: "CtEasy.com", img: ASSETS_URL + "CtEasy.com.webp" },
            { name: "Renault", img: ASSETS_URL + "renault.webp" },
            { name: "RJ Auto Services", img: ASSETS_URL + "rjautonew.webp" },
            { name: "Speedy", img: ASSETS_URL + "Speedynew.webp" },
            { name: "Vulco", img: ASSETS_URL + "Vulco.webp" }
        ]
    },
    {
        id: "vetement-lingerie",
        title: "PRÊT-À-PORTER",
        image: BASE_URL + "Pretaporter.webp",
        partners: [
            { name: "Bello", img: ASSETS_URL + "Bello.webp" },
            { name: "Dessous_Dessus", img: ASSETS_URL + "Dessous_dessus.webp" },
            { name: "Gambetta", img: ASSETS_URL + "Gambetta.webp" },
            { name: "Liu.Jo", img: ASSETS_URL + "liujo.webp" }
        ]
    },
    {
        id: "beaute-bienetre",
        title: "BEAUTÉ / BIEN-ÊTRE",
        image: BASE_URL + "Beaut%C3%A9-bien.webp",
        partners: [
            { name: "6eme Sens", img: ASSETS_URL + "6emesens.webp" },
            { name: "15th Avenue Coiffure", img: ASSETS_URL + "15thAvenuenew.webp" },
            { name: "Elodie Institut", img: ASSETS_URL + "elodieinstitut.webp" },
            { name: "Glow Ritual", img: ASSETS_URL + "GlowRitual.webp" },
            { name: "Le Salon des Hommes", img: ASSETS_URL + "LeSalondeshommes.webp" },
            { name: "N.Bat's", img: ASSETS_URL + "coiffure102.webp" },
            { name: "Renaissance Coiffure", img: ASSETS_URL + "Renaissance.webp" },
            { name: "Tatouage Yoachim", img: ASSETS_URL + "tatouage%20102.webp" }
        ]
    },
    {
        id: "sante-content",
        title: "SANTÉ",
        image: BASE_URL + "santecategorie.webp",
        partners: [
            { name: "Concept_Optique", img: ASSETS_URL + "ConceptOptique.webp" },
            { name: "Optique 2000", img: ASSETS_URL + "Optique2000.webp" },
            { name: "Optical Center", img: ASSETS_URL + "opticalcenter.webp" },
            { name: "Optique LAFAYETTE", img: ASSETS_URL + "Optiquelafayette.webp" }
        ]
    },
    {
        id: "culture",
        title: "CULTURE / LOISIRS",
        image: BASE_URL + "LogoCulture.webp",
        partners: [
            { name: "Bowling Bresse Loisirs", img: ASSETS_URL + "bowling.webp" },
            { name: "Déclic Ludik", img: ASSETS_URL + "declic-ludik.webp" },
            { name: "Défi01", img: ASSETS_URL + "Defi01.webp" },
            { name: "La Tannerie", img: ASSETS_URL + "LaTannerie.webp" },
            { name: "Librairie du Théâtre", img: ASSETS_URL + "Librairie_papeterie.webp" },
            { name: "Montbarbon", img: ASSETS_URL + "Montbarbonnew.webp" }
        ]
    },
    {
        id: "quotidien-content",
        title: "QUOTIDIEN",
        image: BASE_URL + "services.png",
        partners: [
            { name: "A Fleur de pot", img: ASSETS_URL + "a%20fleur%20de%20pot.webp" },
            { name: "Ainter'Job", img: ASSETS_URL + "Ainterjob.webp" },
            { name: "Ca Crée Ca Cause", img: ASSETS_URL + "Ca-cree-.webp" },
            { name: "Hygiène Discount", img: ASSETS_URL + "hygienediscount.webp" },
            { name: "La Maison du Savon", img: ASSETS_URL + "Savon.webp" },
            { name: "La Rek1que", img: ASSETS_URL + "la%20rek1ke.webp" },
            { name: "Le Roi du Matelas", img: ASSETS_URL + "leroidumatelas.webp" },
            { name: "Photographe", img: ASSETS_URL + "photographe102.webp" },
            { name: "Mirepoix", img: ASSETS_URL + "MirePoix.webp" },
            { name: "Shiva", img: ASSETS_URL + "Shivaa.webp" }
        ]
    },
    {
        id: "enfants-content",
        title: "AUTOUR DE L'ENFANT",
        image: BASE_URL + "enfants.webp",
        partners: [
            { name: "King Jouet", img: ASSETS_URL + "kingjouet.webp" },
            { name: "LudiLucky", img: ASSETS_URL + "ludylucky.webp" }
        ]
    },
    {
        id: "animal-content",
        title: "ANIMAUX",
        image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800",
        partners: [
            { name: "Espace Passion Animalerie", img: ASSETS_URL + "espace_passon_new.webp" },
            { name: "Food Animo", img: ASSETS_URL + "foodanimonew.webp" }
        ]
    },
    {
        id: "travel-content",
        title: "HOTELS / VOYAGES",
        image: BASE_URL + "Vacances-productivite.jpg",
        partners: [
            { name: "Azureva", img: ASSETS_URL + "Azureva.webp" },
            { name: "Greet Hotels", img: ASSETS_URL + "Greethotel.webp" },
            { name: "Le Griffon d'Or", img: ASSETS_URL + "Le-griffon.webp" },
            { name: "Selectour", img: ASSETS_URL + "selectour.webp" }
        ]
    }
];

function renderCategories() {
    const container = document.getElementById('categories-grid');
    if (!container) return;

    container.innerHTML = categoriesData.map(category => {
        // Generate inner content based on whether it has subcategories or direct partners
        let contentHtml = '';

        if (category.subcategories) {
            // Complex category with accordions
            contentHtml = `
        <div id="${category.id}" class="partner-content bg-white border border-gray-200 rounded-xl p-4 shadow-lg list-layout bg-gray-50">
          ${category.subcategories.map(sub => `
            <button class="accordion-btn">
              <span class="font-semibold">${sub.title}</span>
              <span class="arrow">▶</span>
            </button>
            <div class="accordion-content">
              <div class="partner-grid">
                ${sub.partners.map(p => `
                  <div class="partner-link" onclick="openModal('${p.img}')">${p.name}</div>
                `).join('')}
              </div>
            </div>
          `).join('')}
        </div>
      `;
        } else {
            // Simple category
            contentHtml = `
        <div id="${category.id}" class="partner-content bg-white border border-gray-200 rounded-xl p-4 shadow-lg">
           <div class="${category.partners.length > 0 ? '' : 'partner-grid'}"> <!-- Adjust grid class if needed, usually simple lists use block or grid? The original used direct divs which are block, but CSS target partner-grid inside partner-content? 
           Wait, looking at original CSS: .partner-content.active becomes grid. 
           But for simple categories, the original HTML just had <div class="partner-link">...</div> directly inside #id. 
           So no valid partner-grid wrapper was there for simple categories? 
           Let's check "auto-content". Yes, direct children. 
           And the CSS: .partner-content.active { display: grid; ... }
           So for simple categories, the partner-content itself becomes the grid.
           -->
            ${category.partners.map(p => `
              <div class="partner-link" onclick="openModal('${p.img}')">${p.name}</div>
            `).join('')}
          </div>
        </div>
      `;
        }

        return `
      <div class="col-span-1">
        <div class="category-card relative group cursor-pointer transform hover:scale-[1.02] transition duration-300 shadow-lg rounded-2xl overflow-hidden"
             onclick="toggleCategory('${category.id}')">
          <img src="${category.image}" alt="${category.title}" class="w-full h-36 md:h-44 lg:h-56 object-cover rounded-2xl">
          <div class="absolute inset-0 bg-gray-900 bg-opacity-50 rounded-2xl flex items-center justify-center text-white text-xl font-bold">
            ${category.title}
          </div>
        </div>
        ${contentHtml}
      </div>
    `;
    }).join('');
}

// Call render on load
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();

    // Re-attach listeners for accordions since we generated new HTML
    // We need to wait for render to finish (it's synchronous so it's fine)
    // But wait, the original code had the accordion listener inside the main script. 
    // We should move that logic into a function we can call, or duplicate it here.
    // The original script runs at the end of body. If we include this script at end of body, it runs.
    // BUT the original script attaches listeners with `document.querySelectorAll(".accordion-btn")`.
    // Since we are replacing HTML, those listeners won't attach to our new elements if the original script runs BEFORE we generate HTML.
    // We should probably remove the accordion logic from index.html and put it here or a separate main.js.
    // For now, I will include a function to attach accordion listeners and call it after render.

    attachAccordionListeners();
    initBadges();
});

function initBadges() {
    document.querySelectorAll('[onclick^="toggleCategory"]').forEach(trigger => {
        const idMatch = trigger.getAttribute('onclick').match(/'(.+?)'/);
        if (!idMatch) return;

        const contentId = idMatch[1];
        const content = document.getElementById(contentId);
        if (!content) return;

        const count = content.querySelectorAll('.partner-link').length;
        let headerDiv = trigger;

        if (count > 0) {
            let existingBadge = headerDiv.querySelector('.badge-compteur');
            if (existingBadge) existingBadge.remove();

            let badge = document.createElement('div');
            badge.className = "absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow z-10 badge-compteur";
            headerDiv.appendChild(badge);
            badge.textContent = count + " Partenaire" + (count > 1 ? "s" : "");
        }
    });
}


function attachAccordionListeners() {
    document.querySelectorAll(".accordion-btn").forEach(btn => {
        // Clone of the original logic
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            const isCurrentlyOpen = content.classList.contains("open");

            // 1. EXCLUSIVITY
            document.querySelectorAll(".accordion-btn").forEach(otherBtn => {
                const otherContent = otherBtn.nextElementSibling;
                if (otherBtn !== btn && otherContent.classList.contains("open")) {
                    otherContent.style.maxHeight = null;
                    otherContent.classList.remove("open");
                    otherBtn.classList.remove("active");
                    const otherArrow = otherBtn.querySelector(".arrow");
                    if (otherArrow) otherArrow.classList.remove("rotate");
                }
            });

            // 2. TOGGLE
            const arrow = btn.querySelector(".arrow");
            if (isCurrentlyOpen) {
                content.style.maxHeight = null;
                content.classList.remove("open");
                if (arrow) arrow.classList.remove("rotate");
                btn.classList.remove("active");
            } else {
                content.classList.add("open");
                if (arrow) arrow.classList.add("rotate");
                btn.classList.add("active");
                requestAnimationFrame(() => { content.style.maxHeight = content.scrollHeight + "px"; });
            }

            // 3. SCROLL
            if (!isCurrentlyOpen) {
                setTimeout(() => {
                    const header = document.querySelector('header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const btnTop = btn.getBoundingClientRect().top + window.scrollY;
                    const scrollTarget = btnTop - headerHeight - 10;
                    window.scrollTo({ top: Math.max(0, scrollTarget), behavior: 'smooth' });
                }, 450);
            }
        });
    });
}
