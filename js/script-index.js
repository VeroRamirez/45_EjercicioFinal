$(document).ready( function(){
    $('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    printNews();
});

function printNews(){
    $('.callout-news p').text("NUEVAS RECETAS");
}

/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
    //Con javaScript
    /*recipesArray.forEach(function(item,index){
        if(item.hasOwnProperty('highlighted') && item['highlighted']){
            renderRecipe(item);
        }
    });*/
    
    $.each( recipesArray, function( key, value ) {
        if(value.highlighted==true){
            renderRecipe(value);
        }
    });
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderPet(pet) {
    console.log('Pintando una mascota: ',pet);
    
    var li = $('<li></li>');
    li.addClass('card');
    
    var img = $('<img/>');
    img.attr('src',pet.mainPicture);
    
    var pName = $('<p></p>');
    pName.text(pet.name);
    
    var pAge = $('<p></p>');
    pAge.text(pet.age.number);
    
    var spanAge = $('<span></span>');
    spanAge.text(pet.age.type);
    
    li.append(spanAge);
    li.append(img);
    li.append(pName);
    li.append(pAge);
    console.log(li);
    //pintarlos en la pantalla
    $('#petLi').append(li);
}


function renderRecipe(recipe) {

    var item = $("<a class='item-recipe' href='#'></a>");
    var attribution = $("<span class='attribution'></span>");
    var title = $("<span class='title-recipe'></span>");
    title.text(recipe.title);
    var metadata = $("<span class='metadata-recipe'></span>");
    var author = $("<span class='author-recipe'></span></span>");
    author.text(recipe.source.name);
    var bookmarks = $("<span class='bookmarks-recipe'></span>");
    var icon = $("<span class='icon-bookmark'></span> ");
    var img= $("<img/>");
    img.attr('src',recipe.source.url);
    console.log(recipe);
   
    item.append(attribution);
    attribution.append(title);
    attribution.append(metadata);
    metadata.append(author);
    metadata.append(bookmarks);
    bookmarks.append(icon);
    item.append(img);
    
    
    $('.list-recipes').append(item);

    
   /* <a class='item-recipe' href='#'>
  <span class='attribution'>
    <span class='title-recipe'> TITULO DE LA RECETA (ATRIBUTO "title" ) </span>
    <span class='metadata-recipe'>
      <span class='author-recipe'> NOMBRE DEL AUTO DE LA RECETA (ATRIBUTO "source.name") </span>
      <span class='bookmarks-recipe'>
        <span class='icon-bookmark'></span> 
      </span>
    </span>
  </span>

  <img src="URL DE LA IMAGEN" />
</a>*/
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


