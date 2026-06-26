
// ------------------ DATOS ------------------
let nivel = 0;
let xp = 0;

const niveles = [
    {
        pregunta: "¿Qué función muestra texto en Python?",
        respuesta: "print"
    },
    {
        pregunta: "¿Qué símbolo se usa para comentarios?",
        respuesta: "#"
    },
    {
        pregunta: "\"hola\" es texto o número?",
        respuesta: "texto"
    }
];

// ------------------ LOCAL STORAGE ------------------
function cargar() {
    let data = localStorage.getItem("progreso");
    if (data) {
        let obj = JSON.parse(data);
        nivel = obj.nivel;
        xp = obj.xp;
    }
}

function guardar() {
    localStorage.setItem("progreso", JSON.stringify({
        nivel,
        xp
    }));
}

// ------------------ MENU ------------------
function irJuego() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("editor").classList.add("oculto");
    document.getElementById("juego").classList.remove("oculto");

    cargarNivel();
}

function irEditor() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("juego").classList.add("oculto");
    document.getElementById("editor").classList.remove("oculto");
}

function volverMenu() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("juego").classList.add("oculto");
    document.getElementById("editor").classList.add("oculto");

    guardar();
}

// ------------------ JUEGO ------------------
function cargarNivel() {
    if (nivel >= niveles.length) {
        document.getElementById("pregunta").innerText = "🔥 Has terminado todos los niveles";
        return;
    }

    document.getElementById("nivelTitulo").innerText = "Nivel " + (nivel + 1);
    document.getElementById("pregunta").innerText = niveles[nivel].pregunta;
    document.getElementById("feedback").innerText = "";
    document.getElementById("xp").innerText = "XP: " + xp;
}

function comprobar() {
    let res = document.getElementById("respuesta").value.toLowerCase();

    if (res === niveles[nivel].respuesta) {
        xp += 10;
        nivel++;
        document.getElementById("feedback").innerText = "✔ Correcto!";
    } else {
        document.getElementById("feedback").innerText = "❌ Incorrecto";
    }

    guardar();
    cargarNivel();
}

// ------------------ MINI PYTHON SIMULADO ------------------
function ejecutar() {
    let code = document.getElementById("code").value;
    let out = "";

    let lines = code.split("\n");

    for (let l of lines) {
        l = l.trim();

        if (l.startsWith("print(")) {
            out += l.replace("print(", "").replace(")", "") + "\n";
        }

        if (l.includes("=") && !l.startsWith("print")) {
            out += "variable guardada\n";
        }
    }

    document.getElementById("output").innerText = out || "Sin salida";
}

// iniciar
cargar();
