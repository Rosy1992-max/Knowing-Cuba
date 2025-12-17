// Simple lightbox for any image with class "lightbox-trigger"
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (!lightbox || !lightboxImg || !lightboxClose) return;

  document.querySelectorAll(".lightbox-trigger").forEach((img) => {
    img.addEventListener("click", () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt || "";
      lightbox.classList.add("active");
    });
  });

  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      lightbox.classList.remove("active");
    }
  });
});


// ===== TRAVEL TIPS MODAL LOGIC =====

// Referencias al modal
const tipModal = document.getElementById("tip-modal");
const tipModalContent = document.getElementById("tip-modal-content");
const tipModalClose = document.querySelector(".tip-modal-close");
const tipModalBackdrop = document.querySelector(".tip-modal-backdrop");

// Contenido detallado para cada tip
const tipDetails = {
  currency: {
    title: "More about currency in Cuba",
    text: `
      Cuba’s currency situation can change, so it’s always smart to double-check
      before you travel. Bring a mix of cash in small bills and be prepared for
      limited card use, especially outside major tourist areas.
      <br><br>
      Keep some emergency cash separate from your wallet and avoid relying only
      on ATMs, as they may not always work or may charge higher fees.
    `
  },
  weather: {
    title: "More about weather & best time to visit",
    text: `
      From November to April, temperatures are warm but comfortable and rainfall
      is usually lower — ideal for most travelers.
      <br><br>
      From May to October, expect hotter, more humid days and more frequent rain.
      September and October are also part of the Atlantic hurricane season, so
      flexible plans and travel insurance are a good idea.
    `
  },
  taxis: {
    title: "More about taxis & classic cars",
    text: `
      Classic cars can be hired as private taxis or for scenic rides. Prices are
      negotiable, so don’t be afraid to ask and compare.
      <br><br>
      When possible, agree on the total price before the ride and confirm if it
      includes all passengers. If the taxi has a meter, you can ask the driver
      to use it, but many rides are still based on a set fare.
    `
  },
  buses: {
    title: "More about buses & long-distance travel",
    text: `
      Tourist buses such as Viazul connect many major destinations and are
      popular with visitors. They can book up in high season.
      <br><br>
      Arrive early at the station, keep your ticket handy, and build some extra
      time into your schedule in case of delays or changes.
    `
  },
  local: {
    title: "More about local transport",
    text: `
      Shared taxis, moto-taxis, bicycle taxis, and local buses are part of
      everyday life in Cuba and offer a more authentic experience.
      <br><br>
      These options are usually cheaper but may be crowded or less predictable.
      If you try them, bring patience, curiosity, and small change for fares.
    `
  },

  // 🔽 Tus nuevos tips de seguridad
  "safety-basic": {
    title: "More about basic safety",
    text: `
      Cuba is generally safe for travelers, especially in popular areas, but
      petty theft can still happen. Keep valuables out of sight, avoid leaving
      bags unattended, and use a hotel safe whenever possible.
      <br><br>
      Make photocopies or digital photos of your passport and important
      documents. Carry only what you need for the day and leave the rest secured.
    `
  },

  "safety-respect": {
    title: "More about respectful behavior",
    text: `
      A simple “buenos días” or “gracias” can open many doors. Cubans are
      friendly and often curious about visitors, but it’s important to respect
      personal space and privacy.
      <br><br>
      When taking photos of people, street musicians, or private homes, ask for
      permission when possible. If someone is performing or posing, offering a
      small tip is a kind gesture.
    `
  },

  "safety-rhythm": {
    title: "More about local rhythm",
    text: `
      Life in Cuba often follows a slower, more relaxed rhythm. Schedules can
      change and things may not run exactly on time.
      <br><br>
      Adopting a flexible, patient mindset will make your trip smoother and more
      enjoyable. Use unexpected pauses as chances to observe daily life, talk to
      locals, or simply enjoy the atmosphere.
    `
  }
}; // 👈 importante este punto y coma


// Abrir modal al hacer clic en cualquier .tip-btn
document.querySelectorAll(".tip-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const key = btn.dataset.tip;        // data-tip="currency", etc.
    const detail = tipDetails[key];

    if (detail && tipModal && tipModalContent) {
      tipModalContent.innerHTML = `
        <h2 id="tip-modal-title">${detail.title}</h2>
        <p>${detail.text}</p>
      `;
      tipModal.classList.add("active");
      tipModal.setAttribute("aria-hidden", "false");
    }
  });
});


// Cerrar modal
function closeTipModal() {
  if (!tipModal) return;
  tipModal.classList.remove("active");
  tipModal.setAttribute("aria-hidden", "true");
}

if (tipModalClose) {
  tipModalClose.addEventListener("click", closeTipModal);
}

if (tipModalBackdrop) {
  tipModalBackdrop.addEventListener("click", closeTipModal);
}

// Cerrar con Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && tipModal && tipModal.classList.contains("active")) {
    closeTipModal();
  }
});

// ===== END TRAVEL TIPS MODAL LOGIC =====
