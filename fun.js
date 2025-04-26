document.addEventListener("DOMContentLoaded", () => {
    const bubbleContainer = document.querySelector(".bubble-container");
    const numberOfBubbles = 20;
    const colors = ["#ff9ad5", "#ffb3d9", "#ff80b3", "#ff66cc"];
    const texts = [
      "✨ I use body glitter as highlighter",
      " Im learning Korean for skincare",
      "📝 To-do lists romanticized",
      "🌙 Most Creative at 2am",
      "📱 Boba content creator",
      "🎨 Web + Graphic Designer",
      "💻 Built my own portfolio",
        "🌸 Cute is my aesthetic",
        "💖 I love pastel colors",
        "🌼 My favorite color is purple",
        "🌷 I love to paint",
    ];
  
    for (let i = 0; i < numberOfBubbles; i++) {
      const bubble = document.createElement("div");
      bubble.classList.add("bubble");
  
      const size = Math.random() * 100 + 120;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
  
      bubble.style.left = `${Math.random() * 150}vw`;
      bubble.style.top = `${Math.random() * 100}vh`;
  
      const duration = (Math.random() * 10 + 10).toFixed(1);
      const delay = (Math.random() * 5).toFixed(1);
      const direction = Math.random() > 0.5 ? "alternate-reverse" : "alternate";
  
      bubble.style.animation = `float-diagonal ${duration}s linear ${delay}s infinite ${direction}`;
  
      bubble.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      bubble.textContent = texts[Math.floor(Math.random() * texts.length)];
  
      bubbleContainer.appendChild(bubble);
    }
  });