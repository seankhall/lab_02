'use strict';

$(document).ready(function() {
    $.get('data/page-1.json')
    .then( hornImg => {
        hornImg.forEach( data => { 
            let createImg = $("<img></img>");
            createImg.attr('src', `${data.image_url}`);
            $('#photo-template').append(createImg);            
        });
        console.log(hornImg);
    });
});
