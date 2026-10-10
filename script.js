const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;

        const answers = {
            q1: "A",
            q2: "A",
            q3: "B",
            q4: "D",
            q5: "B"
        };

        let score = 0;

        for (let question in answers) {
            const selectedAnswer = document.querySelector(
                'input[name="' + question + '"]:checked'
            );

            if (selectedAnswer && selectedAnswer.value === answers[question]) {
                score++;
            }
        }

        window.location.href = "results.html?name=" + encodeURIComponent(name) + "&score=" + score;
    });
}

const resultName = document.getElementById("resultName");

if (resultName) {
    const details = window.location.search.substring(1).split("&");
    let name = "";
    let score = 0;

    for (let i = 0; i < details.length; i++) {
        const part = details[i].split("=");

        if (part[0] === "name") {
            name = decodeURIComponent(part[1].replace(/\+/g, " "));
        }

        if (part[0] === "score") {
            score = Number(part[1]);
        }
    }

    resultName.textContent = "Well done, " + name + "!";

    document.getElementById("score").textContent =
        "Your score is " + score + " out of 5.";

    let feedback;

    if (score === 5) {
        feedback = "Excellent! You got every question correct!";
    } else if (score >= 3) {
        feedback = "Good job! Keep practising to improve your score.";
    } else {
        feedback = "Keep studying and try again. You can improve!";
    }

    document.getElementById("feedback").textContent = feedback;
}