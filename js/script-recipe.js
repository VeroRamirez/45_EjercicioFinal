$(document).ready(function(){
    console.log("Lista pagina recipe.html");
    $('.js-menu').hide();
    
    $('.js-show-make').click(function(){
        $('.page').addClass('make');
    });
    
    $('.js-show-recipe').click(function(){
        $('.page').removeClass('make');
    });
});

