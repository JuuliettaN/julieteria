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
