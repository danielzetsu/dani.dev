document.getElementById('openModalBtn').onclick = function () {
  document.getElementById('modal').style.display = 'block';
};
document.getElementById('closeModalBtn').onclick = function () {
  document.getElementById('modal').style.display = 'none';
};
window.onclick = function (e) {
  if (e.target == document.getElementById('modal')) {
    document.getElementById('modal').style.display = 'none';
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // Botón de scroll
  const scrollToTopButton = document.getElementById('scrollToTop');
  
  // Mostrar/ocultar el botón basado en el scroll
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          scrollToTopButton.classList.add('visible');
      } else {
          scrollToTopButton.classList.remove('visible');
      }
  });
  
  // Scroll suave al hacer clic en el botón
  scrollToTopButton.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });

  // Scroll suave para los enlaces de navegación
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              const targetPosition = targetElement.offsetTop - 20;
              window.scrollTo({
                  top: targetPosition,
                  behavior: 'smooth'
              });
          }
      });
  });
});