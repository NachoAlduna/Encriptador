// Arrays para encriptación y desencriptación
// 'letras' contiene las vocales que serán reemplazadas
const letras = ["e", "i", "a", "o", "u"];
// 'codigos' contiene las palabras que reemplazarán a las vocales
const codigos = ["enter", "imes", "ai", "ober", "ufat"];

// Función para encriptar el texto
function encriptar(texto) {
  let resultado = "";
  // Recorremos cada letra del texto de entrada
  for (let i = 0; i < texto.length; i++) {
    let letraEncriptada = false;
    // Verificamos si la letra actual está en el array 'letras'
    for (let j = 0; j < letras.length; j++) {
      if (texto[i] === letras[j]) {
        // Si la letra coincide, añadimos el código correspondiente al resultado
        resultado += codigos[j];
        letraEncriptada = true;
        break; // Salimos del bucle interno ya que encontramos una coincidencia
      }
    }
    // Si la letra no fue encriptada, la añadimos tal cual al resultado
    if (!letraEncriptada) {
      resultado += texto[i];
    }
  }
  return resultado;
}

// Función para desencriptar el texto
function desencriptar(texto) {
  // Recorremos cada par de letra/código
  for (let i = 0; i < codigos.length; i++) {
    // Reemplazamos todas las ocurrencias del código por su letra correspondiente
    // split() divide el string en un array, join() vuelve a unirlo en un string
    texto = texto.split(codigos[i]).join(letras[i]);
  }
  return texto;
}

// Función principal para procesar el texto (encriptar o desencriptar)
function procesarTexto(accion) {
  // Obtenemos el texto de entrada y lo convertimos a minúsculas
  const inputTexto = document.getElementById("input-texto").value.toLowerCase();
  const resultContainer = document.getElementById("result-container");

  // Verificamos si el texto de entrada está vacío
  if (inputTexto === "") {
    mostrarMensajeInicial();
  } else {
    let resultado = "";
    // Determinamos si debemos encriptar o desencriptar
    if (accion === "encrypt") {
      resultado = encriptar(inputTexto);
    } else {
      resultado = desencriptar(inputTexto);
    }
    // Mostramos el resultado en el contenedor
    resultContainer.innerHTML = `
            <textarea readonly>${resultado}</textarea>
            <button class="boton__copiar" onclick="copiarAlPortapapeles()">Copiar</button>
        `;
  }
}

// Función para mostrar el mensaje inicial cuando no hay texto
function mostrarMensajeInicial() {
  document.getElementById("result-container").innerHTML = `
        <div class="no-result">
            <img src="assets/img/Muneco.png" alt="No message found">
            <h2>Ningún mensaje fue encontrado</h2>
            <p>Ingrese el texto que desees encriptar o desencriptar.</p>
        </div>
    `;
}

// Función para copiar el resultado al portapapeles
function copiarAlPortapapeles() {
  const resultText = document.querySelector("#result-container textarea");
  resultText.select();
  document.execCommand("copy");
}

// Inicialización: muestra el mensaje inicial cuando se carga la página
window.onload = mostrarMensajeInicial;
