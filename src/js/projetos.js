document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btn-mostrar-mais');
  const projetosOcultos = document.getElementById('container-projetos-ocultos');

  if (btn && projetosOcultos) {
    btn.addEventListener('click', function () {
      const aberto = projetosOcultos.style.display === 'contents';
      projetosOcultos.style.display = aberto ? 'none' : 'contents';
      btn.textContent = aberto ? 'Mostrar Mais' : 'Mostrar Menos';
    });
  }
});
