from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/quiz", methods=["POST"])
def quiz():
    data = request.json
    score = 0

    if data["q1"].lower() == "print":
        score += 1
    if data["q2"] == "#":
        score += 1
    if data["q3"].lower() == "texto":
        score += 1

    return jsonify({"score": score})

if __name__ == "__main__":
    app.run(debug=True)
