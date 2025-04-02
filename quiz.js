document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let score = 0;
    
    let antworten = {
        q1: "b", q2: "b", q3: "b", q4: "a",
        q5: "b", q6: "b", q7: "b", q8: "b",
        q9: "b", q10: "a", q11: "b", q12: "a",
        q13: "b", q14: "b"
    };

    Object.keys(antworten).forEach(function(frage) {
        let ausgewaehlt = document.querySelector(`input[name="${frage}"]:checked`);
        if (ausgewaehlt && ausgewaehlt.value === antworten[frage]) {
            score++;
        }
    });

    let ergebnisText = `Du hast ${score} von 14 Fragen richtig beantwortet.`;
    document.getElementById("quizErgebnis").innerText = ergebnisText;
});
