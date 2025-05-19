// Efecto hover en links de nav
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

// Menu desplegable (movil)
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }
});

// Efecto type writer en Hero
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

  if (textoElemento) {
    escribir();
  }
});

// Carrusel de proyectos destacados
const proyectos = [
  {
    img: "Imagenes/Img1.png",
    titulo: "Aplicación de Gestión Hospitalaria🏥",
    desc: "Sistema completo para agendar citas, registrar pacientes y generar reportes."
  },
  {
    img: "Imagenes/Img2.png",
    titulo: "Red Empresarial📈",
    desc: "Instalación de red estructurada para 50 usuarios con seguridad y rendimiento."
  },
  {
    img: "Imagenes/Img3.png",
    titulo: "Sistema de Inventario🖥️",
    desc: "Plataforma web para controlar productos, entradas y salidas en tiempo real."
  }
];

let idx = 0;
const img = document.getElementById('proyecto-img');
const titulo = document.getElementById('proyecto-titulo');
const desc = document.getElementById('proyecto-desc');
const prev = document.getElementById('prev-proyecto');
const next = document.getElementById('next-proyecto');

/**
 * Muestra el proyecto actual en el carrusel.
 * @param {number} i - Índice del proyecto a mostrar.
 */
function mostrarProyecto(i) {
  if (img && titulo && desc) {
    img.src = proyectos[i].img;
    img.alt = proyectos[i].titulo;
    titulo.textContent = proyectos[i].titulo;
    desc.textContent = proyectos[i].desc;
  }
}

// Inicia el primer proyecto
if (img && titulo && desc) {
  mostrarProyecto(idx);

  // Carrusel cada 4 seg
  setInterval(() => {
    idx = (idx + 1) % proyectos.length;
    mostrarProyecto(idx);
  }, 4000);
}

// botones next/prev
if (prev && next) {
  prev.onclick = () => {
    idx = (idx - 1 + proyectos.length) % proyectos.length;
    mostrarProyecto(idx);
  };
  next.onclick = () => {
    idx = (idx + 1) % proyectos.length;
    mostrarProyecto(idx);
  };
}