$(document).ready( function(){
    $('.js-back').hide();
	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
    printNews();
    renderActivities(activities);
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
    img.attr('src',"img/recipes/320x350/"+recipe.name+".jpg");
    console.log(recipe);
   
    item.append(attribution);
    attribution.append(title);
    attribution.append(metadata);
    metadata.append(author);
    metadata.append(bookmarks);
    bookmarks.append(icon);
    item.append(img);
    
    
    $('.list-recipes').append(item);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
      /*
    Crea una validación, si el arreglo activitiesArray contiene mas de 0 objetos, entonces oculta el DIV 
    con clase wrapper-message.
    */
    if(activitiesArray.length>0){
        $('wrapper-message').hide();
    }
    $.each(activitiesArray, function(index, value){
        renderActivity(value);
    });
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


