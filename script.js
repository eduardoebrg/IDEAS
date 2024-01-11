
document.getElementById("home-button").addEventListener("click", function() {
  // O conteúdo das instruções deve ser escondido se estiver visível
  document.getElementById("instructions-content").style.display = "none";
  document.getElementById('terms-content').style.display = 'none';
  document.getElementById('about-content').style.display = 'none';
  document.getElementById("submit-demand-content").style.display = "none";
    // Mostra o conteúdo principal
  document.getElementById("main-content").style.display = "block";
});


document.getElementById("instructions-button").addEventListener("click", function() {
  // Esconde o conteúdo principal e mostra as instruções
  document.getElementById("main-content").style.display = "none";
  document.getElementById("submit-demand-content").style.display = "none";
  document.getElementById('terms-content').style.display = 'none';
  document.getElementById('about-content').style.display = 'none';
  document.getElementById("instructions-content").style.display = "block";
});


document.getElementById("submit-demand-button").addEventListener("click", function(event) {
  event.preventDefault(); // Previne que o link abra uma nova página
  document.getElementById("main-content").style.display = "none";
  document.getElementById("instructions-content").style.display = "none";
  document.getElementById('terms-content').style.display = 'none';
  document.getElementById('about-content').style.display = 'none';
  document.getElementById("submit-demand-content").style.display = "block";
  // Esconde outros conteúdos, se necessário
});


document.getElementById('terms-button').addEventListener('click', function() {
  // Esconde todos os outros conteúdos
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('instructions-content').style.display = 'none';
  document.getElementById('submit-demand-content').style.display = 'none';
  document.getElementById('about-content').style.display = 'none';

  // Mostra os Termos de Uso
  document.getElementById('terms-content').style.display = 'block';
});

document.getElementById('about-button').addEventListener('click', function() {
  // Esconde todos os outros conteúdos
  document.getElementById('main-content').style.display = 'none';
  document.getElementById('instructions-content').style.display = 'none';
  document.getElementById('submit-demand-content').style.display = 'none';
  document.getElementById('terms-content').style.display = 'none';

  // Mostra os Termos de Uso
  document.getElementById('about-content').style.display = 'block';
});
