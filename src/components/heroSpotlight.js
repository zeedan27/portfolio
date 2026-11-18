/**
 * Spotlight Reveal Physics on a single <canvas class="layer"> inside the 100svh hero section.
 * Composites `/images/front.jpg` (top studio portrait) with `/images/back.jpg` (S-07 Tactical Unit HUD)
 * inside a feathered radial flashlight buffer tracked with smooth exponential interpolation (lerp).
 */
export function initHeroSpotlight(heroConfig = {}) {
  const hero = document.querySelector(".hero--spotlight");
  const canvas = document.getElementById("hero-spotlight-canvas");
  if (!hero || !canvas) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const frontImg = new Image();
  const backImg = new Image();
  frontImg.src = heroConfig.frontImage || "/images/front.jpg";
  backImg.src = heroConfig.backImage || "/images/back.jpg";

  const spotCanvas = document.createElement("canvas");
  const spotCtx = spotCanvas.getContext("2d");

  let targetX = 0.62;
  let targetY = 0.4;
  let currentX = 0.62;
  let currentY = 0.4;
  let hasInteracted = false;
  let rafId = null;

  function computeCoverRect(imgW, imgH, boxW, boxH, posX = 0.68, posY = 0.22) {
    if (!imgW || !imgH || !boxW || !boxH) return { sx: 0, sy: 0, sw: 0, sh: 0 };
    const imgRatio = imgW / imgH;
    const boxRatio = boxW / boxH;
    let drawW;
    let drawH;
    if (boxRatio > imgRatio) {
      drawW = boxW;
      drawH = boxW / imgRatio;
    } else {
      drawH = boxH;
      drawW = boxH * imgRatio;
    }
    const dx = (boxW - drawW) * posX;
    const dy = (boxH - drawH) * posY;
    return { dx, dy, dw: drawW, dh: drawH };
  }

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.round(rect.width * dpr));
    const h = Math.max(1, Math.round(rect.height * dpr));
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
      spotCanvas.width = w;
      spotCanvas.height = h;
    }
    renderFrame();
  }

  function renderFrame() {
    const w = canvas.width;
    const h = canvas.height;
    if (!w || !h) return;

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = "#0a0d14";
    ctx.fillRect(0, 0, w, h);

    const isMobile = window.innerWidth < 1024;
    const posX = isMobile ? 0.56 : 0.68;
    const posY = isMobile ? 0.18 : 0.22;

    if (frontImg.complete && frontImg.naturalWidth > 0) {
      const fr = computeCoverRect(frontImg.naturalWidth, frontImg.naturalHeight, w, h, posX, posY);
      ctx.drawImage(frontImg, fr.dx, fr.dy, fr.dw, fr.dh);
    }

    if (backImg.complete && backImg.naturalWidth > 0 && spotCtx) {
      const br = computeCoverRect(backImg.naturalWidth, backImg.naturalHeight, w, h, posX, posY);
      spotCtx.globalCompositeOperation = "source-over";
      spotCtx.clearRect(0, 0, w, h);
      spotCtx.drawImage(backImg, br.dx, br.dy, br.dw, br.dh);

      const cx = currentX * w;
      const cy = currentY * h;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const radius = (isMobile ? 165 : 275) * dpr;

      const grad = spotCtx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      grad.addColorStop(0, "rgba(0,0,0,1)");
      grad.addColorStop(0.35, "rgba(0,0,0,0.92)");
      grad.addColorStop(0.7, "rgba(0,0,0,0.34)");
      grad.addColorStop(1, "rgba(0,0,0,0)");

      spotCtx.globalCompositeOperation = "destination-in";
      spotCtx.fillStyle = grad;
      spotCtx.fillRect(0, 0, w, h);

      ctx.drawImage(spotCanvas, 0, 0);
    }
  }

  const step = (time) => {
    if (!hasInteracted && !prefersReduced) {
      targetX = 0.62 + Math.sin(time * 0.0011) * 0.075;
      targetY = 0.39 + Math.cos(time * 0.00085) * 0.06;
    }

    currentX += (targetX - currentX) * 0.14;
    currentY += (targetY - currentY) * 0.14;
    renderFrame();

    rafId = window.requestAnimationFrame(step);
  };

  const updatePointer = (clientX, clientY) => {
    const rect = canvas.getBoundingClientRect();
    if (!rect.width || !rect.height) return;
    hasInteracted = true;
    targetX = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    targetY = Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
    if (prefersReduced) {
      currentX = targetX;
      currentY = targetY;
      renderFrame();
    }
  };

  hero.addEventListener("pointermove", (e) => updatePointer(e.clientX, e.clientY), { passive: true });
  hero.addEventListener("pointerleave", () => {
    hasInteracted = false;
    targetX = 0.62;
    targetY = 0.4;
  }, { passive: true });
  hero.addEventListener(
    "touchmove",
    (e) => {
      if (e.touches.length) updatePointer(e.touches[0].clientX, e.touches[0].clientY);
    },
    { passive: true }
  );

  frontImg.addEventListener("load", resize);
  backImg.addEventListener("load", renderFrame);
  window.addEventListener("resize", resize);

  resize();
  if (!prefersReduced) {
    rafId = window.requestAnimationFrame(step);
  }

  return () => {
    if (rafId) window.cancelAnimationFrame(rafId);
    window.removeEventListener("resize", resize);
  };
}
