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
      question: "01 How many athletes have been sent by India this year at the Olympics?",
      answers: {
        a: "120 athlete contingent",
        b: "127 athlete contingent",
        c: "125 athlete contingent",
        d: "130 athlete contingent"
      },
      correctAnswer: "b"
    },
    {
      question: "02 Who was the flagbearer of Indian Olympic team this year?",
      answers: {
        a: "Mary Kom",
        b: "Manpreet Singh",
        c: "Abhinav Bindra",
        d: "Both a and b"
      },
      correctAnswer: "d"
    },
    {
      question: "03 Who was the Flag bearer for India in the 2012 Olympics?",
      answers: {
        a: "Abhinav Bindra",
        b: "PV Sindhu",
        c: "Sushil Kumar",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "04 In which sport did Bradley Wiggins win 3 medals at a single Olympics?",
      answers: {
        a: "Swimming",
        b: "Cycling",
        c: "Short Put",
        d: "100m race"
      },
      correctAnswer: "b"
    },
    {
      question: "05 Which is the longest race contested at the Olympics ?",
      answers: {
        a: "1000m race",
        b: "10 km race",
        c: "50 km walk race",
        d: "20 km walk race"
      },
      correctAnswer: "c"
    },
    {
      question: "06 When was the first women walk race conducted at the Olympics?",
      answers: {
        a: "1988",
        b: "1992",
        c: "1972",
        d: "1928"
      },
      correctAnswer: "b"
    },
    {
      question: "07 How many types of races are there at the Olympics?",
      answers: {
        a: "2",
        b: "4",
        c: "5",
        d: "7"
      },
      correctAnswer: "b"
    },
    {
      question: "08 What do the five rings on the Olympic symbol represent?",
      answers: {
        a: "the Five Oceans",
        b: "the Five Continents",
        c: "the Five Planets",
        d: "five Greek Gods"
      },
      correctAnswer: "b"
    },
    {
      question: "09 The five rings of the Olympic symbol are in five different colours. Red, Green, Yellow, Blue and _____ ?",
      answers: {
        a: "Indigo",
        b: "Violet",
        c: "Orange",
        d: "Black"
      },
      correctAnswer: "d"
    },
    {
      question: "10 Olympic games were held in ancient greece in the honour of Greek God ________ ?",
      answers: {
        a: "Zeus",
        b: "Uranus",
        c: "Apollo",
        d: "Jupiter"
      },
      correctAnswer: "a"
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
