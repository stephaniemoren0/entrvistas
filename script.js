
  var posicionActual = 0; // Inicialmente, se muestra la primera pregunta
  var contenedorPregunta = document.getElementById("pregunta-actual");
  var contenedorRespuestas = document.getElementById("respuestas-actuales");
  var contenedor = document.getElementById("mi-contenedor");
  var showAnswer = document.createElement("p");
  contenedor.appendChild(showAnswer);
  contenedorPregunta.classList.add("contenedorOculto");
  contenedorRespuestas.classList.add("contenedorOculto");
  var contenedorMostrar = document.querySelectorAll(".contenedorOculto");
  var ocultarSiguiente = document.getElementById("siguiente");
  var puntos = 0;

  var preguntas = [  {    pregunta: "¿Qué es Node.js?",    respuestas: ["Un lenguaje de programación", "Un framework para aplicaciones web", "Un entorno de tiempo de ejecución para JavaScript", "Un servidor web"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué comando se utiliza para instalar Node.js?",
    respuestas: ["npm install node", "npm install -g node", "sudo apt-get install nodejs", "Todos los anteriores"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Cuál es el archivo de configuración predeterminado en Node.js?",
    respuestas: ["package.json", "index.html", "server.js", "app.js"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Cuál es la función de 'require()' en Node.js?",
    respuestas: ["Importar módulos y paquetes en una aplicación Node.js.", "Crear un servidor web en Node.js.", "Ejecutar un archivo JavaScript en Node.js.", "Ninguna de las anteriores."],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es NPM en Node.js?",
    respuestas: ["Un lenguaje de programación", "Un framework para aplicaciones web", "Un administrador de paquetes", "Un servidor web"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué comando se utiliza para instalar un paquete con NPM?",
    respuestas: ["npm add package", "npm install package", "npm get package", "Todos los anteriores"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué comando se utiliza para iniciar una aplicación Node.js?",
    respuestas: ["node start", "node app", "node run", "Todos los anteriores"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué es Express.js en Node.js?",
    respuestas: ["Un lenguaje de programación", "Un framework para aplicaciones web", "Un servidor web", "Un administrador de paquetes"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Cuál es el comando para instalar Express.js con NPM?",
    respuestas: ["npm add express", "npm install express", "npm get express", "Todos los anteriores"],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué es middleware en Express.js?",
    respuestas: ["Un archivo JavaScript que se ejecuta en el servidor", "Un archivo HTML que se envía al navegador", "Una función que se ejecuta antes de que se maneje una solicitud", "Una base de datos"],
    respuestaCorrecta: 2
  },
  {
    pregunta: "¿Qué comando se utiliza para crear un nuevo proyecto de Node.js con Express.js?",
    respuestas: ["express myapp", "node myapp", "npm create-express myapp", "Todos los anteriores"],
    respuestaCorrecta: 0
  },
  {
    pregunta: "¿Qué es Socket.io en Node.js?",
    respuestas: ["Un lenguaje de programación", "Un framework para aplicaciones web", "Un servidor web", "Una biblioteca para comunicación en tiempo real"],
    respuestaCorrecta: 3
  },
  {    pregunta: "¿Qué es Node.js?",    respuestas: ["Un lenguaje de programación", "Un entorno de ejecución de JavaScript", "Un servidor web", "Una base de datos"],
  respuestaCorrecta: 1
},
{
  pregunta: "¿Qué módulo de Node.js se utiliza para leer y escribir archivos?",
  respuestas: ["http", "fs", "path", "os"],
  respuestaCorrecta: 1
},
{
  pregunta: "¿Qué módulo de Node.js se utiliza para crear un servidor web?",
  respuestas: ["http", "fs", "path", "os"],
  respuestaCorrecta: 0
},
{
  pregunta: "¿Qué comando se utiliza para instalar un paquete de Node.js?",
  respuestas: ["npm install", "node install", "npm create", "node create"],
  respuestaCorrecta: 0
},
{
  pregunta: "¿Qué es NPM?",
  respuestas: ["Un lenguaje de programación", "Un entorno de ejecución de JavaScript", "Un servidor web", "Un gestor de paquetes"],
  respuestaCorrecta: 3
},
{
  pregunta: "¿Qué módulo de Node.js se utiliza para manejar rutas de archivos y directorios?",
  respuestas: ["http", "fs", "path", "os"],
  respuestaCorrecta: 2
},
{
  pregunta: "¿Cuál es el método de Node.js utilizado para detener la ejecución de un bucle infinito?",
  respuestas: ["clearInterval", "clearTimeout", "setInterval", "setTimeout"],
  respuestaCorrecta: 0
},
{
  pregunta: "¿Qué es un middleware en Node.js?",
  respuestas: ["Una base de datos", "Un lenguaje de programación", "Una función que se ejecuta antes o después de una solicitud HTTP", "Una herramienta para depurar código"],
  respuestaCorrecta: 2
},
{
  pregunta: "¿Cuál es el módulo de Node.js utilizado para manejar errores en la aplicación?",
  respuestas: ["http", "fs", "path", "process"],
  respuestaCorrecta: 3
},
{
  pregunta: "¿Qué módulo de Node.js se utiliza para trabajar con base de datos?",
  respuestas: ["http", "fs", "path", "mongodb"],
  respuestaCorrecta: 3
},
{
  pregunta: "¿Qué comando se utiliza para iniciar una aplicación de Node.js?",
  respuestas: ["npm start", "node run", "npm run", "node start"],
  respuestaCorrecta: 0
},
{
  pregunta: "¿Cuál es el módulo de Node.js utilizado para crear una conexión con un servidor HTTP?",
  respuestas: ["http", "fs", "path", "os"],
  respuestaCorrecta: 0
},
{
  pregunta: "¿Qué módulo de Node.js se utiliza para crear un cliente HTTP?",
  respuestas: ["http", "fs", "path", "os"],
  respuestaCorrecta: 0
}, ]


  function mostrarPregunta() {    
    var preguntaActual = preguntas[posicionActual];
    contenedorPregunta.innerHTML = preguntaActual.pregunta;
    contenedorRespuestas.innerHTML = "";

    for (var i = 0; i < preguntaActual.respuestas.length; i++) {
      var respuesta = preguntaActual.respuestas[i];
      var boton = document.createElement("button");
      boton.classList.add("respuestas");
      boton.innerHTML = respuesta;
      boton.value = i;
      boton.addEventListener("click", function() {
        contenedorMostrar[0].style.visibility = "hidden";
        contenedorMostrar[1].style.visibility = "hidden";
        showAnswer.style.visibility = "visible";
        var respuestaSeleccionada = this.value;
        if (respuestaSeleccionada == preguntaActual.respuestaCorrecta) {
          showAnswer.textContent = "¡Respuesta correcta!";
          puntos++;
        } else {
          showAnswer.textContent = "¡Respuesta incorrecta!";
        }
      });
      contenedorRespuestas.appendChild(boton);
    }
  }
  
  // Al cargar la página, se muestra la primera pregunta
  mostrarPregunta();
  
  // Al hacer clic en el botón, se avanza a la siguiente pregunta
  var boton = document.getElementById("siguiente");
  boton.addEventListener("click", function() {
    showAnswer.style.visibility="hidden";
    contenedorMostrar[0].style.visibility = "visible";
    contenedorMostrar[1].style.visibility = "visible";
    posicionActual++;
    if (posicionActual === preguntas.length) {
      contenedorMostrar[0].style.visibility = "hidden";
      contenedorMostrar[1].style.visibility = "hidden";
      ocultarSiguiente.style.visibility = "hidden";
      showAnswer.style.visibility="visible";
      showAnswer.textContent = "tu puntuacion es: " + puntos;
    }
    if (preguntas.length > posicionActual){
      mostrarPregunta();
    }
    
  });
  

