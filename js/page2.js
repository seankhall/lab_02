var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);


$(document).ready(function () {
  $.get('data/page-2.json')
    .then(hornImg => {
      hornImg.forEach(data => {
        $('#photo-template2').append(`<div value="${data.keyword}"><h2>${data.title}</h2><img src="${data.image_url}"><p>${data.description}</p></div>`);
        let createOpt = $('<option></option>');
        createOpt.attr('value', `${data.keyword}`);
        createOpt.text(`${data.keyword}`);
        $('select').append(createOpt);
      });
      //   console.log(hornImg);
      //   console.log(createOpt);
    })

  $('select').on('change', function () {
    let selectedValue = $(this).val();
    $('div').hide();
    $(`div[value=${selectedValue}]`).show();
    console.log(selectedValue);
  });
});
