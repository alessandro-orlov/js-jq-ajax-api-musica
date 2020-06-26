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
$(document).ready(function() {

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

      // Seleziono tag select
      var select = $('.genere-musicale');

      // Cambio valore dell'opzione del tag select
      select.change(function() {
        // Seleziono opzione del select
        var selectOption = $(this).val();

          // Cicclo tutti i CD con each
          $('.cd').each(function() {
            // Seleziono OGNI valore del attributo data-genere
            var genereMuscale = $(this).attr('data-genere');
            console.log(genereMuscale)

            // Struttura condizionata
            if ((selectOption === 'default') || (genereMuscale ===  selectOption) ) {
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
function cdTamplate(allCDs) {
    var source = $("#cd-template").html();
    var template = Handlebars.compile(source);

    for (var i = 0; i < allCDs.length; i++) {
      var singoloCD = allCDs[i];
      var html = template(singoloCD);

      $('.cds-container').append(html);

    } // end ciclo for
  } // End function cdTamplate

}); // End document ready
