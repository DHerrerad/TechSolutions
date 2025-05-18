document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.nav-links a');
  
    links.forEach(link => {
      link.addEventListener('mouseover', () => {
        link.style.textShadow = '0 0 10px #FFD700';
      });
  
      link.addEventListener('mouseout', () => {
        link.style.textShadow = 'none';
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

  document.addEventListener("DOMContentLoaded", () => {
    const textoElemento = document.getElementById("texto");
    const texto = "Soluciones tecnológicas a tu medida para impulsar tu negocio";
    let i = 0;
    let borrando = false;
  
    function escribir() {
      if (!borrando) {
        textoElemento.textContent = texto.substring(0, i);
        i++;
        if (i > texto.length) {
          borrando = true;
          setTimeout(escribir, 1500);
          return;
        }
      } else {
        i--;
        textoElemento.textContent = texto.substring(0, i);
        if (i === 0) {
          borrando = false;
        }
      }
      setTimeout(escribir, borrando ? 50 : 100);
    }
  
    escribir();
  });
  