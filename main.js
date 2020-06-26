$(document).ready(function() {
/*
Attraverso una chiamata ajax all’Api di boolean avremo a
disposizione una decina di dischi musicali.
Servendoci di handlebars stampiamo tutto a schermo.
In questo momento non è importante la parte grafica.

Bonus: Creare una select con i seguenti generi: pop, rock,
metal e jazz. In base a cosa scegliamo nella select vedremo i
corrispondenti cd.ù

Chiamata:
https://flynn.boolean.careers/exercises/api/array/music
*/


// Chiamata API ajax
$.ajax(
  {
    url: "https://flynn.boolean.careers/exercises/api/array/music",
    method: "GET",
    success: function(data) {

      var arrayCD = data.response;
      // console.log(arrayCD)
      cdTamplate(arrayCD);


      // =======================================================
      // ======================= BONUS =========================



      $('.genere-musicale').change(function() {

        var selectValue = $(this).val();

          $('.cd').each(function() {
          var genereMuscale = $(this).attr('data-genere')

          if ((selectValue === 'default') || (genereMuscale ===  selectValue) ) {
            $(this).show();
          } else {
            $(this).hide();
          }
        });

      });

    },
    error: function() {
      alert('errore: risorsa non trovata')
    }
  }
);


// Funzione stampo tamplate con handlebars
function cdTamplate(cdsArray) {
    var source = $("#cd-template").html();
    var template = Handlebars.compile(source);
    // console.log(template)

    for (var i = 0; i < cdsArray.length; i++) {

      var context = cdsArray[i];

      var html = template(context);
      // console.log(html)

      $('.cds-container').append(html);

    } // end ciclo for
  } // End function cdTamplate

}); // End document ready
