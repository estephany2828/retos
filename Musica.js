var artistas = [];

function get(url){
    return new Promise(function(resolve,reject){
        $.ajax({
            type: "GET",
            url: url,
            dataType: "json",
            
        })
        .done(function(data){
            resolve(data)
        })
        .fail(function(err){
            reject(err)
        });
    })
}

function cardartistas(artistas){
    var contenedor = $('#tracksmusica');
    var trackmus = artistas;
  

contenedor.empty();
$.each(trackmus, function (index, item) { 
    var aux= `"<div class='row'><div class='card' style='width': 18rem;>
    <img class='card-img-top' src='.../100px180/' alt='Card image cap'>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div></div>"`; 
    contenedor.append(aux);
     
});
}

get('http://ws.audioscrobbler.com/2.0/?method=geo.gettoptracks&country=spain&api_key=d5b5be6843bcccdc67b939f08a9b21fa&format=json')
.then(function(daticos){
    console.log(daticos.tracks.track)
    artistas=daticos.tracks.track;
    cardartistas(artistas)
    // var dibujar=""

    // artistas.forEach(element => {
    //     dibujar="<div class='row'><div class='card' style='width': 18rem;>"+
    //     "<img class='card-img-top' src='.../100px180/' alt='Card image cap'>"+
    //     <div class="card-body">
    //       <h5 class="card-title">Card title</h5>
    //       <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    //       <a href="#" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>"
        
    });
