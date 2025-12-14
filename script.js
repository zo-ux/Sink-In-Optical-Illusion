const boxes = document.querySelectorAll(".box");

document.addEventListener("mousemove", e => {
  boxes.forEach(box => {
    const r = box.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;

    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.sqrt(dx * dx + dy * dy);

    const pull = Math.max(0, 300 - dist) / 300;

    box.style.transform = `
      translate(${dx * pull * 0.15}px, ${dy * pull * 0.15}px)
      scale(${1 - pull * 0.35})
      translateZ(${-pull * 120}px)
    `;
  });
});

