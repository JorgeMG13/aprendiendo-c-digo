function enviar() {
    let score = 0;

    if (document.getElementById("q1").value.toLowerCase() === "print") score++;
    if (document.getElementById("q2").value === "#") score++;
    if (document.getElementById("q3").value.toLowerCase() === "texto") score++;

    document.getElementById("resultado").innerText =
        "Puntuación: " + score + "/3";
}
