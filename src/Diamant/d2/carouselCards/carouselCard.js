import React, { useEffect } from "react";
import "./carouselCard.css";

const ScrollableCard = () => {
  useEffect(() => {
    const carousel = document.getElementById("memory-carousel");
    const cards = document.querySelectorAll(".memory-card");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0;
    let startX;
    let isDragging = false;
    let theta = 0;
    let radius = window.innerWidth <= 768 ? 250 : 400;
    const totalCards = cards.length;

    const arrangeCards = () => {
      const angle = 360 / totalCards;
      cards.forEach((card, index) => {
        const cardAngle = angle * index;
        card.style.transform = `rotateY(${cardAngle}deg) translateZ(${radius}px)`;
        card.dataset.index = index;
      });
    };

    const rotateCarousel = () => {
      carousel.style.transform = `rotateY(${theta}deg)`;
      currentIndex = Math.round(Math.abs(theta / (360 / totalCards)) % totalCards);
      if (currentIndex >= totalCards) currentIndex = 0;
    };

    const nextCard = () => {
      theta -= 360 / totalCards;
      rotateCarousel();
    };

    const prevCard = () => {
      theta += 360 / totalCards;
      rotateCarousel();
    };

    const flipCard = (e) => {
      const card = e.currentTarget;
      const cardIndex = parseInt(card.dataset.index);
      if (cardIndex === currentIndex) {
        card.classList.toggle("flipped");
      }
    };

    const dragStart = (e) => {
      e.preventDefault();
      isDragging = true;
      startX = e.pageX || e.touches[0].pageX;
    };

    const drag = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const currentX = e.pageX || (e.touches ? e.touches[0].pageX : startX);
      const diffX = currentX - startX;
      const sensitivity = 0.5;
      const newTheta = theta + diffX * sensitivity;
      carousel.style.transform = `rotateY(${newTheta}deg)`;
    };

    const dragEnd = (e) => {
      if (!isDragging) return;
      isDragging = false;
      const currentX = e.pageX || (e.changedTouches ? e.changedTouches[0].pageX : startX);
      const diffX = currentX - startX;
      if (Math.abs(diffX) > 20) {
        diffX > 0 ? prevCard() : nextCard();
      } else {
        const anglePerCard = 360 / totalCards;
        const snapAngle = Math.round(theta / anglePerCard) * anglePerCard;
        theta = snapAngle;
        rotateCarousel();
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        nextCard();
      } else if (e.key === "ArrowRight") {
        prevCard();
      } else if (e.key === "Enter" || e.key === " ") {
        const currentCard = document.querySelector(`.memory-card[data-index="${currentIndex}"]`);
        if (currentCard) currentCard.classList.toggle("flipped");
      }
    };

    const init = () => {
      arrangeCards();
      prevBtn.addEventListener("click", prevCard);
      nextBtn.addEventListener("click", nextCard);
      cards.forEach((card) => card.addEventListener("click", flipCard));
      carousel.addEventListener("mousedown", dragStart);
      carousel.addEventListener("touchstart", dragStart, { passive: true });
      document.addEventListener("mousemove", drag);
      document.addEventListener("touchmove", drag, { passive: false });
      document.addEventListener("mouseup", dragEnd);
      document.addEventListener("touchend", dragEnd);
      document.addEventListener("keydown", handleKeyDown);
      window.addEventListener("resize", () => {
        radius = window.innerWidth <= 768 ? 250 : 400;
        arrangeCards();
        rotateCarousel();
      });
    };

    init();
  }, []);

  const sampleCards = [
  {
    language: "AMBIANCE",
    title: "Atmosphère festive et immersive",
    preview: "Plongez dans une ambiance électrisante où chaque nuit devient une célébration.",
    details: "",
    location: "homepage: accueil",
    time: "18:00:00"
  },
  {
    language: "MUSIQUE & DJ",
    title: "Sonorités qui font vibrer",
    preview: "Nos DJ résidents et invités créent des sets envoûtants pour une expérience sonore inoubliable.",
    details: "",
    location: "section: événements",
    time: "20:00:00"
  },
  {
    language: "COCKTAILS",
    title: "Créations originales et raffinées",
    preview: "Savourez des cocktails signatures préparés avec passion par nos mixologues experts.",
    details: "",
    location: "section: menu",
    time: "21:00:00"
  },
  {
    language: "ÉVÉNEMENTS",
    title: "Soirées à thème et animations",
    preview: "Chaque semaine, découvrez des soirées uniques : karaoké, live music, DJ sets et plus encore.",
    details: "",
    location: "section: agenda",
    time: "22:00:00"
  },
  {
    language: "SERVICE PREMIUM",
    title: "Accueil chaleureux et attentionné",
    preview: "Notre équipe veille à ce que chaque visite soit mémorable, avec un service irréprochable.",
    details: "",
    location: "section: à propos",
    time: "23:00:00"
  },
  {
    language: "SÉCURITÉ & CONFORT",
    title: "Un espace sûr pour s’amuser",
    preview: "Profitez de vos soirées en toute tranquillité grâce à nos dispositifs de sécurité renforcés.",
    details: "",
    location: "footer: mentions",
    time: "00:30:00"
  }
];


  return (
    <div className="cosmos-background">
      <div className="stars-container"></div>
      <div className="container-fluid h-100 d-flex flex-column">
        <main className="">
          <div className="carousel-container">
            <div className="carousel" id="memory-carousel">
              {sampleCards.map((card, i) => (
                <div className="memory-card" data-memory-id={i + 1} key={i}>
                  <div className="card-inner">
                    <div className="card-front">
                      <div className="card-content">
                        <div className="memory-date">{card.language}</div>
                        <h3>{card.title}</h3>
                        {/* <div className="memory-image">
                          
                          <div className="glitch-effect"></div>
                        </div> */}
                        <p className="memory-preview">{card.preview}</p>
                        <div className="card-glow"></div>
                      </div>
                    </div>
                    <div className="card-back">
                        
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="carousel-controls">
            <button id="prev-btn" className="control-btn">
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button id="next-btn" className="control-btn">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ScrollableCard;
