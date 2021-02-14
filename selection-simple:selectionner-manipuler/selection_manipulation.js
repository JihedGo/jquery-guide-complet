// on attendant le chargement des elements(ou la page)
$(document).ready(function(){
    // pour séléctionner un élément $('element')
    // .css('property', 'valeur') pour change style 
    $('#paragraphe').css('color','red');
    // .text() pour change le texte
    $('#paragraphe').text("JQuery est une bibliothéque Javascript!");
    // écouter un événement
    $('#paragraphe').on('click', function(){
        // l'element courant this
        $(this).css('font-size','50px').css('color','lightblue');
    });

    // séléctionner et intéragir sur plusieurs éléments
    $('.article').each(function(){
        // .each() pour chaque élément de la classe article
        $(this).on('click', function(){
            $(this).css('color', 'gray');
            console.log($(this).css('color')) // pour connaitre le valeur de la property color
        })
    });

    $('#button').on('click', function(){
        $('.article').width(400); // changer le largeur en 400px
        // chainage
        $('.article').css('color','orange').css('background','yellow');
    });

    // bonne pratique : stocker les élémemnts dans des variables
    var p = $('#paragraphe');
    var button = $('button');
    button.on('click', function(){
        $(this).css('color', 'blue');
    });
    console.log(p);
    // selectionner multi elements
    $('p, span, div').css('color','brown');

    $('p').css('color','green');
    // Elements parent > enfant (parent())
    $('p').parent('#parent').css('background-color','pink');
    // children()
    console.log($('#parent').children());
});