function enviar() {
    fetch("/quiz", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            q1: document.getElementById("q1").value,
            q2: document.getElementById("q2").value,
            q3: document.getElementById("q3").value
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("resultado").innerText =
        "Puntuación: " + data.score + "/3";
    });
}
