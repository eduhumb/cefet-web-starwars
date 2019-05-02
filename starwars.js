// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

if (typeof $ !== 'undefined') {

  // pega o elemento que contém a lista de filmes
  let $introTextEl = $('nav #movies');

  $.ajax({
    url: 'https://swapi.co/api/films/',
    method: 'GET',
    success: function(result) {
      console.dir(result)
      for(m of result.results.sort().reverse()){
        $('#movies ul').after('<li>' + JSON.stringify(m['title']) + '</li>');
      }
    }
  });

}
