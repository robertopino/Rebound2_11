function obtenerFraseDivertida(){
fetch("https://geek-jokes.sameerkumar.website/api?format=json")
  .then(response => response.json())
  .then(data => {
    // Obtener la frase divertida del objeto de respuesta
    var fraseDivertida = data.joke;

    // Mostrar la frase en pantalla
    var fraseDivertidaElement= document.getElementById("fraseDivertida");
    fraseDivertidaElement.textContent = fraseDivertida;

    // Mostrar la frase en la consola
    console.log(fraseDivertida);
  })
  .catch(error => console.log(error));
}