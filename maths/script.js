(function() {
  function buildQuiz() {
    const output = [];
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    quizContainer.innerHTML = output.join('');
  }

  function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;
        answerContainers[questionNumber].style.color = '#368B85';
      } else {
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if (currentSlide === 0) {
      previousButton.style.display = 'none';
    } else {
      previousButton.style.display = 'inline-block';
    }
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    } else {
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [{
      question: "01 Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?",
      answers: {
        a: "7",
        b: "10",
        c: "12",
        d: "13"
      },
      correctAnswer: "b"
    },
    {
      question: "02 Look at this series: 36, 34, 30, 28, 24, ... What number should come next?",
      answers: {
        a: "20",
        b: "22",
        c: "23",
        d: "26"
      },
      correctAnswer: "b"
    },
    {
      question: "03 Look at this series: 58, 52, 46, 40, 34, ... What number should come next?",
      answers: {
        a: "26",
        b: "28",
        c: "30",
        d: "32"
      },
      correctAnswer: "b"
    },
    {
      question: "04 Look at this series: 2, 6, 18, 54, ... What number should come next?",
      answers: {
        a: "108",
        b: "148",
        c: "162",
        d: "216"
      },
      correctAnswer: "c"
    },
    {
      question: "05 Look at this series: 8, 6, 9, 23, 87 , ... What number should come next?",
      answers: {
        a: "128",
        b: "226",
        c: "324",
        d: "429"
      },
      correctAnswer: "d"
    },
    {
      question: "06 Look at this series: F2, __, D8, C16, B32, ... What number should fill the blank?",
      answers: {
        a: "A16",
        b: "G4",
        c: "E4",
        d: "E3"
      },
      correctAnswer: "c"
    },
    {
      question: "07 Look at this series: 664, 332, 340, 170, ____, 89, ... What number should fill the blank?",
      answers: {
        a: "85",
        b: "97",
        c: "109",
        d: "178"
      },
      correctAnswer: "d"
    },
    {
      question: "08 Look at this series: 70, 71, 76, __, 81, 86, 70, 91, ... What number should fill the blank?",
      answers: {
        a: "70",
        b: "71",
        c: "80",
        d: "96"
      },
      correctAnswer: "a"
    },
    {
      question: "09 Look at this series: 8, 43, 11, 41, __, 39, 17, ... What number should fill in the blank?",
      answers: {
        a: "8",
        b: "14",
        c: "43",
        d: "44"
      },
      correctAnswer: "b"
    },
    {
      question: "10 Look at this series: 83, 73, 93, 63, __, 93, 43, ... What number should fill the blank?",
      answers: {
        a: "33",
        b: "53",
        c: "73",
        d: "93"
      },
      correctAnswer: "b"
    }
  ];

  buildQuiz();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  showSlide(currentSlide);
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
