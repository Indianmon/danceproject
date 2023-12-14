var currentQuestion = 1;
var totalQuestions = 4;

function startQuiz() {
    showQuestion(currentQuestion);
}

function showQuestion(questionNumber) {
    var questions = document.querySelectorAll('.question');
    questions.forEach(function (question) {
        question.style.display = 'none';
    });

    var currentQuestionElement = document.getElementById('question' + questionNumber);
    if (currentQuestionElement) {
        currentQuestionElement.style.display = 'block';
    }
}

function nextQuestion() {
    if (currentQuestion < totalQuestions) {
        currentQuestion++;
        showQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function submitQuiz() {
    var correctAnswers = 0;

    // Check answer for Question 1
    var answer1 = document.querySelector('input[name="answer1"]:checked');
    if (answer1 && answer1.value === document.getElementById('question1').dataset.correctAnswer) {
        correctAnswers++;
    }

    // Check answer for Question 2
    var answer2 = document.querySelector('input[name="answer2"]:checked');
    if (answer2 && answer2.value === document.getElementById('question2').dataset.correctAnswer) {
        correctAnswers++;
    }

    // Check answer for Question 3
    var answer3 = document.querySelector('input[name="answer3"]:checked');
    if (answer3 && answer3.value === document.getElementById('question3').dataset.correctAnswer) {
        correctAnswers++;
    }

    // Check answer for Question 4
    var answer4 = document.querySelector('input[name="answer4"]:checked');
    if (answer4 && answer4.value === document.getElementById('question4').dataset.correctAnswer) {
        correctAnswers++;
    }

    // Display the result
    var quizResult = document.getElementById('quizResult');
    quizResult.textContent = 'You got ' + correctAnswers + ' out of ' + totalQuestions + ' questions correct!';

    var badgeContainer = document.getElementById('badge-container');
    var badgeText = '';

    if (correctAnswers === totalQuestions) {
        badgeText = 'Platinum Badge';
    } else if (correctAnswers >= totalQuestions / 3) {
        badgeText = 'Gold Badge';
    } else if (correctAnswers >= totalQuestions / 2) {
        badgeText = 'Silver Badge';
    } else if (correctAnswers >= totalQuestions / 1) {
        badgeText = 'Bronze Badge';
    } else {
        badgeText = 'Try again to earn a badge';
    }

    // Display the badge
    badgeContainer.textContent = 'Your Badge: ' + badgeText;
}
