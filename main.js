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

function mostrarProyecto(i) {
  img.src = proyectos[i].img;
  img.alt = proyectos[i].titulo;
  titulo.textContent = proyectos[i].titulo;
  desc.textContent = proyectos[i].desc;
}

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