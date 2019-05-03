// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para fazer uma requisição assíncrona e:
//  - Pegar a lista de filmes (AJAX) e preencher no HTML
//  - Quando um filme for clicado, exibir sua introdução

// we've not seen anything yet
let lastSeen = window.localStorage.getItem('lastSeen');
document.getElementById('text').innerHTML = lastSeen ;

$.ajax({
  url: 'https://swapi.co/api/films/',
  method: 'GET',
  success: function(result) {
    // console.dir(result)
    for(m of sort_array(result.results)){
      // $('#movies ul').after('<li>' + 'Episode ' + m.episode_id + JSON.stringify(m['title']) + '</li>');
      $("ul").append('<li>'+ 'Episode ' + m.episode_id + '</li>') ;
      $("li:last").attr('url', m.url );
    }
  }
});

$("#movies ul").on('click', 'li', function(e) {
  let url = $(e.target).attr('url');
  $.ajax({
      url: url,         
      method: 'GET',      
      success: function(result) {
        // console.log(result.title)   
        document.getElementById("text").innerHTML = "Episode " + result.episode_id + "<br/>" + result.title + "</br></br>" + result.opening_crawl; 
      }
  }).done(function(){
    window.localStorage.setItem('lastSeen', document.getElementById("text").innerHTML);
  });
});

function sort_array(arr){
  return arr.sort((a, b) => (a.episode_id > b.episode_id) ? 1 : -1)
};

