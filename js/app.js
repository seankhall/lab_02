'use strict';


$(document).ready(function() {
    $.get('data/page-1.json')
    .then( hornImg => {
        hornImg.forEach( data => { 
            let createImg = $("<img></img>");
            createImg.attr('src', `${data.image_url}`);
            createImg.attr('value', `${data.keyword}`);
            $('#photo-template').append(createImg);
            let createOpt = $("<option></option>");
            createOpt.attr('value', `${data.keyword}`);
            createOpt.text(`${data.keyword}`);
            $('select').append(createOpt);         
        });
        console.log(hornImg);
        console.log(createOpt);
    })
});

$('select').on('change', function() {
    let selectedValue = $(this).val();
    $('img').hide();
    $(`img[value=${selectedValue}]`).show();
    console.log(selectedValue);
});