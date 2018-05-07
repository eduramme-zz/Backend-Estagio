// top 5

// quando a página carregar executar essa função
window.onload = function() {

    // denominando uma nova requisição http
    var xhttp = new XMLHttpRequest();

    // Pegando o arquivo json
    xhttp.open('GET', '/urls', true);

    xhttp.onreadystatechange = function() {

        // Se os dados estiverem preparados e o server também executar...
        if (this.readyState == 4 && this.status == 200) {

            // transformando o arquivo json num array
            var lista = JSON.parse(xhttp.response);
            lista = lista.top_5;
            console.log(lista);


            // cortando os primeiros elementos da lista
            var sliced = lista.slice(0, 5);

            var sumHits = 0
            for(i=0; i<lista.length; i++){
              sumHits += lista[i].hits

            }

            hitsNumber.innerHTML = sumHits;


            // colocando no contexto para a apresentação com handlebars
            var context = {top_5: sliced };

            // versão já compilada do html para os handlebars
            var template = Handlebars.templates['links'];

            // Metendo no template nas informações
            var templateData = template(context);
            console.log(context);

            // colocando as infos na div do handlebars
            document.getElementById('contentDiv').innerHTML += templateData;
        }
    };

    // mandando pro server
    xhttp.send();
};


// input transitions

// botão encurtar
buttonSubmit.addEventListener('click', function(){


  if (textInput.value !== ''){
    buttonSubmit.classList.add('fade');
    textInput.classList.add('fade');

    if(buttonSubmit.value === 'COPIAR'){
      copiaIsso();
    }

    setTimeout(function(){
        if(buttonSubmit.value !== 'COPIAR'){

          varUrl = textInput.value;
          textInput.value = "localhost:3000/" + hashCode(textInput.value);

          var http = new XMLHttpRequest();

              var newUrl = "localhost:3000/" + hashCode(textInput.value);
              http.open('POST', '/users/user/urls', true);
              http.setRequestHeader("Content-Type", "application/json");
              console.log(varUrl);
              http.send(JSON.stringify({url: varUrl}));

        buttonSubmit.value = 'COPIAR';
        console.log(buttonSubmit.value);
      }
        textInput.classList.add('white');
        textInput.classList.remove('fade');
        buttonSubmit.classList.remove('fade');
        buttonReset.classList.remove('hidden', 'resetA');
    }, 300);
  }
});

// botão reset
buttonReset.addEventListener('click', function(){
  textInput.classList.remove('white');
  buttonReset.classList.add('hidden', 'resetA');
  textInput.value = '';
  buttonSubmit.value = 'ENCURTAR';
  textInput.focus();
});

// copia
function copiaIsso() {
  var copia = document.querySelector('#textInput');
  copia.focus();
  copia.select();
  document.execCommand('copy');
};
