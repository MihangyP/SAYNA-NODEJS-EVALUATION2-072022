// éléments pour collecter les informations
const myForm = document.getElementById('myForm');

// déclenche l'évènement du submit des informations
myForm.addEventListener('submit', function(e) {
    e.preventDefault();
        if(!$('#fname').val() || !$("#lname").val() || !$("#avis").val() || !$("#Note").val() || !$("#formation").val())
        {
            alert("veuillez completer tous les")
        }else{
            // crée une instance de XMLHttpRequest() dans l'objet xhr
    const xhr = new XMLHttpRequest();
    let form_data = new FormData(myForm);

    xhr.open('POST', 'http://localhost:3000/api/sql', true);
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            return new Error('Connection established between client and server...');
        }
        else {
            return new Error('Error connection...');
        }
    };

    console.log(convToJson(form_data));
    xhr.send(convToJson(form_data)); // envoie les données
    $("#myForm").trigger('reset');
        }    
    
});

// function pour convertir données objet en format JSON 
function convToJson(_form_data) {
    let _obj = {};
    for (const item of _form_data.keys()) {
        _obj[item] = _form_data.get(item);
    }
    return JSON.stringify(_obj, null, 2);
}
