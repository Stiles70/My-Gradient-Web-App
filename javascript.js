var score = document.getElementById("inp")


function checkvalue() {
    if (score.value != "") {
        if (score.value >= 0 && score.value < 40) {
            answer.style.color = "red"
            answer.innerHTML = "F - You Failed 🤢"
        } else if (score.value >= 40 && score.value < 45) {
            answer.style.color = "crismon"
            answer.innerHTML = "E - You Passed 😢 "
        } else if (score.value >= 45 && score.value < 50) {
            answer.style.color = "brown"
            answer.innerHTML = "D - Average 😒 "
        } else if (score.value >= 50 && score.value < 60) {
            answer.style.color = "yellow"
            answer.innerHTML = " C- Credit 😎 "
        } else if (score.value >= 60 && score.value < 70) {
            answer.style.color = "blue"
            answer.innerHTML = "B - Good 😊 "
        } else if (score.value >= 70 && score.value <= 100) {
            answer.style.color = "green"
            answer.innerHTML = "A - Excellent 😍 "
        } else if (score.value > 100) {
            answer.style.color = "red"
            answer.innerHTML = "Invalid"
        }
    }
}