//Function Declaration
function checkAnswer() {
    //Identify the Correct Answer
    let correctAnswer = "4";

    // Retrieve the User’s Answer
    document.querySelector('input[name="quiz"]:checked');
    let userAnswer = "4"
    // Compare the User’s Answer with the Correct Answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Step 5: Add Event Listener to the Submit Button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
