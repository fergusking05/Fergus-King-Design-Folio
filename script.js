const projects = document.querySelectorAll(".project");

window.addEventListener("scroll", () => {
  const triggerBottom = window.innerHeight * 0.85;

  projects.forEach((project) => {
    const projectTop = project.getBoundingClientRect().top;

    if (projectTop < triggerBottom) {
      project.classList.add("show");
    }
  });
});

const cards = document.querySelectorAll(".image-strip div");

cards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    card.style.transform = `
      rotateY(${x / 25}deg)
      rotateX(${y / 25}deg)
      scale(1.03)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = `
      rotateY(0deg)
      rotateX(0deg)
      scale(1)
    `;
  });
});