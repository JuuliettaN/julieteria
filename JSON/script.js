fetch("henkilo.json")

    .then (function (response) {
        return response.json();
    })

    .then(function (responseJson){
        kerro(responseJson) ;
    })

.catch(function (error) {
    document.getElementById("vastaus").innerHTML="<p>Tietoa ei pystytä hakemaan</p>";
    })

function kerro(objekti) {}

let tiedot = "<h1>" + objekti.otsikko + "</h1><br>" + + objekti.kuvaus + "<br><br>"

+ "<h3>" + "Opintojakso" + "</h3>" + "Nimi: " + objekti.opintojakso.nimi + "<br>"
+ "Tunnus: " + objekti.opintojakso.tunnus + "<br>" 
+ "Opintopisteet: " + objekti.opintojakso.opintopisteet + "<br>"

tiedot += "<p><h3> Aiheet </h3>"