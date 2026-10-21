
const recuerdos = [
    {
        imagen: "img/foto1.jpeg",
        titulo: "El inicio de todo",
        sentimiento: "Aunque no tenemos foto de aquel primer momento que te vi, viendo F1  distraida y alegre, en mi corazon guardo nuestra primera cita",
        versiculo: '"Siempre doy gracias a Dios cada vez que vienes a mi mente y a mi corazón."',
        cita: "Filipenses 1:3"
    },
    {
        imagen: "img/foto2.jpeg",
        titulo: "Un regalo del cielo",
        sentimiento: "Compartir por primera vez tu fecha mas especial fue la mejor experiencia de mi vida, y me hizo darme cuenta que eres un regalo de Dios para mi vida",
        versiculo: '"Todo regalo bueno y perfecto viene de lo alto, directamente de parte de Dios."',
        cita: "Santiago 1:17"
    },
    {
        imagen: "img/foto3.jpeg",
        titulo: "El tiempo perfecto",
        sentimiento: "Compartir contigo el tiempo y la vida me ha hecho darme cuenta que Dios tiene un plan perfecto para nosotros, y que todo llega en el momento exacto",
        versiculo: '"Dios hace que todas las cosas sean hermosas en el momento exacto."',
        cita: "Eclesiastés 3:11"
    },
    {
        imagen: "img/foto4.jpeg",
        titulo: "La dulzura de hablar contigo",
        sentimiento: "escuchar tu voz y tus palabras me llenan de alegria y me hacen sentir que todo es posible a tu lado",
        versiculo: '"Las palabras amables son dulces como la miel: alegran el corazón y dan vida al alma."',
        cita: "Proverbios 16:24"
    },
    {
        imagen: "img/foto5.jpeg",
        titulo: "Cada pieza tiene su valor",
        sentimiento: "En cada momento que compartimos, cada detalle y cada gesto, me doy cuenta de que eres la pieza que completa mi vida y que juntos formamos un lego perfecto",
        versiculo: '"Cautivaste mi corazón con una sola de tus miradas."',
        cita: "Cantares 4:9"
    },
    {
        imagen: "img/foto6.jpeg",
        titulo: "Única para mí",
        sentimiento: "Cada vez que te miro, me doy cuenta de que eres única y especial, y que no hay nadie más en el mundo que pueda ocupar tu lugar en mi corazón",
        versiculo: '"Eres totalmente hermosa, amada mía; no hay ningún defecto en ti."',
        cita: "Cantares 4:7"
    },
    {
        imagen: "img/foto7.jpeg",
        titulo: "La felicidad de estar a tu lado",
        sentimiento: "Cada momento que paso contigo me hace sentir una felicidad inmensa, y me doy cuenta de que estar a tu lado es lo que más deseo en la vida",
        versiculo: '"En el verdadero amor no existe el temor, sino paz y confianza plena."',
        cita: "1 Juan 4:18"
    },
    {
        imagen: "img/foto8.jpeg",
        titulo: "Caminando en la misma dirección",
        sentimiento: "Sentir como Dios nos ha guiado a caminar juntos y a compartir la vida me hace sentir que estamos destinados a estar juntos y a construir un futuro lleno de amor y felicidad",
        versiculo: '"A donde tú vayas, yo iré; y donde tú pases el tiempo, ahí quiero estar contigo."',
        cita: "Rut 1:16"
    },
    {
        imagen: "img/foto9.jpeg",
        titulo: "Cuidándonos el uno al otro",
        sentimiento: "Cada gesto de cuidado y atención compartidos me hace sentir que estamos construyendo un amor sólido y verdadero, basado en la ternura, el respeto y el amor genuino",
        versiculo: '"Que todo lo que hagamos sea siempre con ternura, respeto y verdadero amor."',
        cita: "1 Corintios 16:14"
    },
    {
        imagen: "img/foto10.jpeg",
        titulo: "Un sentimiento que no se apaga",
        sentimiento: "Cada vez que pienso en ti, siento que mi amor por ti crece y se fortalece, y me doy cuenta de que este sentimiento es eterno y no se apagará nunca",
        versiculo: '"Ni las aguas más profundas podrán apagar el amor, ni los ríos podrán arrastrarlo."',
        cita: "Cantares 8:7"
    },
    {
        imagen: "img/foto11.jpeg",
        titulo: "Lo que siento hoy por ti",
        sentimiento: "Sentir que en cada momento tengo tu compañia, tu amor y tu apoyo me hace darme cuenta de que lo que siento por ti es un amor verdadero, profundo y duradero",
        versiculo: '"El amor es paciente y bondadoso; siempre cuida, siempre confía, siempre espera y permanece."',
        cita: "1 Corintios 13:4-7"
    }
];

let indiceActual = 0;

// Elementos DOM
const pantallaInicio = document.getElementById("pantalla-inicio");
const pantallaGaleria = document.getElementById("pantalla-galeria");
const pantallaPropuesta = document.getElementById("pantalla-propuesta");
const pantallaCelebracion = document.getElementById("pantalla-celebracion");
const contenedorPrincipal = document.querySelector(".contenedor-principal");

const contadorFotos = document.getElementById("contador-fotos");
const imagenRecuerdo = document.getElementById("imagen-recuerdo");
const tituloRecuerdo = document.getElementById("titulo-recuerdo");
const descripcionRecuerdo = document.getElementById("descripcion-recuerdo");
const textoVersiculo = document.getElementById("texto-versiculo");
const citaVersiculo = document.getElementById("cita-versiculo");

const btnComenzar = document.getElementById("btn-comenzar");
const btnAnterior = document.getElementById("btn-anterior");
const btnSiguiente = document.getElementById("btn-siguiente");
const btnSi = document.getElementById("btn-si");
const btnNo = document.getElementById("btn-no");

// Audio
const musica = document.getElementById("musica-fondo");
const btnAudio = document.getElementById("btn-audio");

// Canvas para Estrellas
const canvas = document.getElementById("canvas-estrellas");
const ctx = canvas.getContext("2d");

/* =========================================================================
   2. SIMULADOR DE SALTO ESPACIAL (HIPERESPACIO 2D)
   ========================================================================= */
let estrellas = [];
let velocidadEstrellas = 0.5; // Velocidad normal (vuelo espacial de fondo)
let enSalto = false; // Estado de transición rápida

function ajustarCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
ajustarCanvas();
window.addEventListener("resize", ajustarCanvas);

// Crear cada estrella
class Estrella {
    constructor() {
        this.reset();
        this.z = Math.random() * canvas.width; // Profundidad inicial
    }

    reset() {
        this.x = (Math.random() - 0.5) * canvas.width * 2;
        this.y = (Math.random() - 0.5) * canvas.height * 2;
        this.z = canvas.width;
        this.size = Math.random() * 1.5 + 0.5;
    }

    update() {
        this.z -= velocidadEstrellas;
        if (this.z <= 0) {
            this.reset();
        }
    }

    draw() {
        // Mapear perspectiva 3D a pantalla 2D
        const px = (this.x / this.z) * canvas.width + canvas.width / 2;
        const py = (this.y / this.z) * canvas.height + canvas.height / 2;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
            const r = (1 - this.z / canvas.width) * this.size * 2;
            ctx.beginPath();
            
            // Si hay hipervelocidad, dibujamos estelas (líneas), si no, puntos
            if (enSalto) {
                // Generar estela
                const tailX = (this.x / (this.z + velocidadEstrellas * 3)) * canvas.width + canvas.width / 2;
                const tailY = (this.y / (this.z + velocidadEstrellas * 3)) * canvas.height + canvas.height / 2;
                ctx.moveTo(px, py);
                ctx.lineTo(tailX, tailY);
                ctx.strokeStyle = `rgba(255, 220, 240, ${1 - this.z / canvas.width})`;
                ctx.lineWidth = r * 0.7;
                ctx.stroke();
            } else {
                ctx.arc(px, py, r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${1 - this.z / canvas.width})`;
                ctx.fill();
            }
        }
    }
}

// Inicializar 150 estrellas
for (let i = 0; i < 150; i++) {
    estrellas.push(new Estrella());
}

// Bucle de renderizado
function animar() {
    ctx.fillStyle = "rgba(11, 11, 30, 0.4)"; // Sutil rastro para fluidez
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    estrellas.forEach(estrella => {
        estrella.update();
        estrella.draw();
    });

    requestAnimationFrame(animar);
}
animar();

/* =========================================================================
   3. ACTIVACIÓN DEL "SALTO ESPACIAL" (TRANSICIÓN DE ALTO IMPACTO)
   ========================================================================= */
function iniciarSaltoEspacial(alTerminar) {
    enSalto = true;
    
    // El destello blanco rápido tapa suavemente la carga de imagen
    const overlay = document.getElementById("pantalla-salto");
    overlay.classList.add("destello-hiperespacio");

    // Efecto de deformación/viaje en la tarjeta
    contenedorPrincipal.classList.add("hiper-viaje");

    // Aceleración masiva de partículas
    const acelerar = setInterval(() => {
        if (velocidadEstrellas < 60) velocidadEstrellas += 2;
    }, 20);

    setTimeout(() => {
        clearInterval(acelerar);
        
        // Ejecutar los cambios de datos en el momento álgido del salto
        alTerminar();

        // Desaceleración
        const frenar = setInterval(() => {
            if (velocidadEstrellas > 0.5) {
                velocidadEstrellas -= 2.5;
            } else {
                velocidadEstrellas = 0.5;
                enSalto = false;
                clearInterval(frenar);
            }
        }, 20);

        // Remover clases de animación
        setTimeout(() => {
            overlay.classList.remove("destello-hiperespacio");
            contenedorPrincipal.classList.remove("hiper-viaje");
        }, 400);

    }, 800); // Duración de la transición interestelar
}

/* =========================================================================
   4. LOGICA DE NAVEGACIÓN Y CARGA
   ========================================================================= */
function mostrarPantalla(pantallaAMostrar) {
    pantallaInicio.classList.remove("activa");
    pantallaGaleria.classList.remove("activa");
    pantallaPropuesta.classList.remove("activa");
    pantallaCelebracion.classList.remove("activa");
    pantallaAMostrar.classList.add("activa");
}

function cargarRecuerdo() {
    const recuerdo = recuerdos[indiceActual];
    contadorFotos.textContent = `Momento ${indiceActual + 1} de ${recuerdos.length}`;
    imagenRecuerdo.src = recuerdo.imagen;
    tituloRecuerdo.textContent = recuerdo.titulo;
    descripcionRecuerdo.textContent = recuerdo.sentimiento;
    textoVersiculo.textContent = recuerdo.versiculo;
    citaVersiculo.textContent = recuerdo.cita;

    btnAnterior.style.visibility = (indiceActual === 0) ? "hidden" : "visible";
    btnSiguiente.textContent = (indiceActual === recuerdos.length - 1) ? "Tengo una pregunta... 💫" : "Siguiente ➡";
}

/* =========================================================================
   5. EVENTOS Y CONTROL DE MÚSICA
   ========================================================================= */
function encenderMusica() {
    musica.volume = 0.6;
    musica.play().then(() => {
        btnAudio.classList.remove("hidden");
    }).catch(e => {
        console.log("El navegador bloqueó la reproducción automática hasta que el usuario interactúe.");
    });
}

// El clic del primer botón activa audio e hiperespacio al tiempo
btnComenzar.addEventListener("click", () => {
    encenderMusica();
    indiceActual = 0;
    
    iniciarSaltoEspacial(() => {
        cargarRecuerdo();
        mostrarPantalla(pantallaGaleria);
    });
});

btnSiguiente.addEventListener("click", () => {
    if (indiceActual < recuerdos.length - 1) {
        indiceActual++;
        iniciarSaltoEspacial(() => {
            cargarRecuerdo();
        });
    } else {
        iniciarSaltoEspacial(() => {
            mostrarPantalla(pantallaPropuesta);
        });
    }
});

btnAnterior.addEventListener("click", () => {
    if (indiceActual > 0) {
        indiceActual--;
        iniciarSaltoEspacial(() => {
            cargarRecuerdo();
        });
    }
});

// Control manual de música
btnAudio.addEventListener("click", () => {
    if (musica.paused) {
        musica.play();
        btnAudio.textContent = "🎵 Sonando";
    } else {
        musica.pause();
        btnAudio.textContent = "🔇 Mutear";
    }
});

/* =========================================================================
   6. RESPUESTA Y CELEBRACIÓN
   ========================================================================= */
btnSi.addEventListener("click", () => {
    iniciarSaltoEspacial(() => {
        mostrarPantalla(pantallaCelebracion);
        // Desatar estrellas a máxima velocidad de celebración
        velocidadEstrellas = 3; 
        celebracionEspecial();
    });
});

function celebracionEspecial() {
    setInterval(() => {
        // Enviar destellos y estrellas continuas
        estrellas.push(new Estrella());
        if(estrellas.length > 250) estrellas.shift();
    }, 100);
}

/* =========================================================================
   MODO DIFÍCIL EXTREMO PARA EL BOTÓN "NO"
   ========================================================================= */
let intentosNo = 0;
let escalaBotonSi = 1;

const frasesTraviesas = [
    "¿Segura? 🤨",
    "¡Muy lenta! 😜",
    "Por aquí no es 🤭",
    "¡Intenta de nuevo! ⚡",
    "Ese botón está dañado 🙈",
    "El 'SÍ' se ve más bonito 👉💖",
    "¡Imposible atraparme! 🚀"
];

function moverBotonNo(evento) {
    // Evita que en celulares se alcance a hacer clic al tocarlo
    if (evento && evento.type === "touchstart") {
        evento.preventDefault();
    }

    intentosNo++;

    // 1. Calculamos una distancia lejana garantizada
    const direccionX = Math.random() < 0.5 ? -1 : 1;
    const direccionY = Math.random() < 0.5 ? -1 : 1;
    
    const saltoX = (Math.random() * 110 + 70) * direccionX; 
    const saltoY = (Math.random() * 90 + 50) * direccionY;

    // 2. Lo movemos de inmediato
    btnNo.style.transform = `translate(${saltoX}px, ${saltoY}px)`;

    // 3. Cambiamos el texto del botón 'No'
    const indiceFrase = intentosNo % frasesTraviesas.length;
    btnNo.textContent = frasesTraviesas[indiceFrase];

    // 4. Hacemos que el botón del "¡SÍ!" crezca un poquito en cada intento
    if (escalaBotonSi < 1.5) {
        escalaBotonSi += 0.06;
        btnSi.style.transform = `scale(${escalaBotonSi})`;
    }
}

// Eventos para que se escape siempre
btnNo.addEventListener("mouseover", moverBotonNo);
btnNo.addEventListener("mousemove", moverBotonNo);
btnNo.addEventListener("touchstart", moverBotonNo, { passive: false });
btnNo.addEventListener("click", (e) => {
    e.preventDefault();
    moverBotonNo();
});