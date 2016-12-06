

$(document).ready(function(){
    console.log("Lista pagina recipe.html");
    $('.js-menu').hide();
    
    $('.js-show-make').click(function(){
        $('.page').addClass('make');
        $(this).addClass('active');
        $('.js-show-recipe').removeClass('active');
    });
    
    $('.js-show-recipe').click(function(){
        $('.page').removeClass('make');
        $(this).addClass('active');
        $('.js-show-make').removeClass('active');
    });
    $('.js-back').click(function(){
        window.location = 'index.html';      
    });
});