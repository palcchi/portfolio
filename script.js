const tiltElements = document.querySelectorAll("[data-tilt]");

tiltElements.forEach((element) => {
  element.addEventListener("mousemove", (event) => {
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * -8;
    const rotateY = ((x / rect.width) - 0.5) * 8;

    element.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
  });

  element.addEventListener("mouseleave", () => {
    element.style.transform = "";
  });
});
