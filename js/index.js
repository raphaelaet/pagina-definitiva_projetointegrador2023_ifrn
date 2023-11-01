
// Função para avançar os dois carrosséis simultaneamente
function avancarCarrosseis() {
  $('#carousel1, #carousel2').carousel('next');
}

// Função para retroceder os dois carrosséis simultaneamente
function retrocederCarrosseis() {
  $('#carousel1, #carousel2').carousel('prev');
}

// Intercepta o evento de clique no botão de avançar
$('#carousel1 .carousel-control-next').on('click', avancarCarrosseis);

// Intercepta o evento de clique no botão de retroceder
$('#carousel1 .carousel-control-prev').on('click', retrocederCarrosseis);