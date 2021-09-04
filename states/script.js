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
      question: "01 What is the Capital of West Bengal?",
      answers: {
        a: "Calicut",
        b: "Durgapur",
        c: "Kharagpur",
        d: "Kolkata"
      },
      correctAnswer: "d"
    },
    {
      question: "02 What is the Capital of Tripura?",
      answers: {
        a: "Udaipur",
        b: "Agartala",
        c: "Aizawal",
        d: "Kanchanpur"
      },
      correctAnswer: "b"
    },
    {
      question: "03 What is the Capital of Rajasthan?",
      answers: {
        a: "Udaipur",
        b: "Ajmer",
        c: "Jodhpur",
        d: "Jaipur"
      },
      correctAnswer: "d"
    },
    {
      question: "04 What is the Capital of Sikkim?",
      answers: {
        a: "Imphal",
        b: "Gangtok",
        c: "Shimla",
        d: "Aizawl"
      },
      correctAnswer: "b"
    },
    {
      question: "05 What is the Capital of Arunanchal Pradesh?",
      answers: {
        a: "Hyderabad",
        b: "Gandhinagar",
        c: "Itanagar",
        d: "Chandigarh"
      },
      correctAnswer: "c"
    },
    {
      question: "06 What is the Capital of Maharashtra?",
      answers: {
        a: "Mumbai",
        b: "Bhopal",
        c: "Bihar",
        d: "Bangalore"
      },
      correctAnswer: "a"
    },
    {
      question: "07 What is the Capital of Mizoram?",
      answers: {
        a: "Jaipur",
        b: "Gangtok",
        c: "Aizawl",
        d: "Khawzawl"
      },
      correctAnswer: "c"
    },
    {
      question: "08 What is the Capital of Chattisgarh?",
      answers: {
        a: "Bilaspur",
        b: "Raipur",
        c: "Korba",
        d: "Jagdalpur"
      },
      correctAnswer: "b"
    },
    {
      question: "09 What is the Capital of Telangana?",
      answers: {
        a: "Nizamabad",
        b: "Mahbubnagar",
        c: "Nalgonda",
        d: "Hyderabad"
      },
      correctAnswer: "d"
    },
    {
      question: "10 What is the Capital of Assam?",
      answers: {
        a: "Tezpur",
        b: "Agartala",
        c: "Dispur",
        d: "Bhutan"
      },
      correctAnswer: "c"
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
