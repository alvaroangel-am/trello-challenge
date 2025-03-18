// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
 
// Declarar un array para almacenar los nombres de los amigos
let amigos = ["Jared", "Omar", "David", "Nimbe", "Fanny", "Alex"];

// Función para agregar amigos a la lista
function agregarAmigo() {
  // Capturar el valor del campo de entrada
  const input = document.querySelector('#amigo');
  const nombre = input.value.trim(); // Eliminar espacios en blanco

  // Validar la entrada
  if (nombre === '') {
    alert('Por favor, inserte un nombre.');
    return;
  }

  // Agregar el nombre al array
  amigos.push(nombre);

  // Actualizar la lista en el DOM
  actualizarLista();

  // Limpiar el campo de entrada
  input.value = '';
  input.focus();
}

// Función para actualizar la lista de amigos en el DOM
function actualizarLista() {
  const lista = document.querySelector('#listaAmigos');

  // Limpiar la lista existente
  lista.innerHTML = '';

  // Iterar sobre el array de amigos y crear elementos <li>
  for (let amigo of amigos) {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  }
}

// Función para realizar el sorteo
function sortearAmigo() {
  // Validar que haya amigos disponibles
  if (amigos.length === 0) {
    alert('No hay nombres en la lista para realizar el sorteo.');
    return;
  }

  // Generar un índice aleatorio
  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indiceAleatorio];

  // Mostrar el resultado en la página
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;
}

// Actualizar la lista inicial con los nombres predeterminados
actualizarLista();
