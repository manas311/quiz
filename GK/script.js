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
      question: "01 Who among the following became the first Indian woman to reach the summit of Mount Everest?",
      answers: {
        a: "Tenzing Norgay",
        b: "Sunita Williams",
        c: "Bachendri Pal",
        d: "None of the above"
      },
      correctAnswer: "c"
    },
    {
      question: "02 Who was the first Indian to lead a successful expedition that climbed Mount Everest?",
      answers: {
        a: "Arjun Kumar Thapa",
        b: "Avtar Singh Cheema",
        c: "Tenzing Norgay",
        d: "Bachendri Pal"
      },
      correctAnswer: "b"
    },
    {
      question: "03 Who among the following the youngest Indian female to climb Mount Everest?",
      answers: {
        a: "Malavath Purna",
        b: "Dicky Dolma",
        c: "Sonam Gyatso",
        d: "Bachendri Pal"
      },
      correctAnswer: "a"
    },
    {
      question: "04 Who among the following women to became the first woman to fly to space?",
      answers: {
        a: "Cosmonaut Valentina Tereshkova",
        b: "Sunita Williams",
        c: "Bachendri Pal",
        d: "None of the above"
      },
      correctAnswer: "a"
    },
    {
      question: "05 Who among the following became the first woman to be conferred a Doctorate of Science by an Indian University?",
      answers: {
        a: "Asima Chaterjee",
        b: "Nargis Dutta",
        c: "Fatima Yunus",
        d: "Mother Teresa"
      },
      correctAnswer: "a"
    },
    {
      question: "06 Who was the first indian woman to win a Nobel Peace Prize?",
      answers: {
        a: "Mother Teresa",
        b: "Indira Gandhi",
        c: "Margret Thatcher",
        d: "Pratibha Devi Singh Patil"
      },
      correctAnswer: "a"
    },
    {
      question: "07 Who among the following conferred Bharat Ratna Award?",
      answers: {
        a: "Kalpana Chawla",
        b: "Indira Gandhi",
        c: "Kiran Bedi",
        d: "M. Fathima Beevi"
      },
      correctAnswer: "b"
    },
    {
      question: "08 Which of the following personality to became the first woman IAS officer of India?",
      answers: {
        a: "Durgesh Nandani",
        b: "Harita Kaur Deol",
        c: "Anna Malhotra",
        d: "Kiran Bedi"
      },
      correctAnswer: "c"
    },
    {
      question: "09 Who among the following was the first woman to appointed as the United Nations Civil Police adviser?",
      answers: {
        a: "Durgesh Nandani",
        b: "Harita Kaur Deol",
        c: "Anna Malhotra",
        d: "Kiran Bedi"
      },
      correctAnswer: "d"
    },
    {
      question: "10 Who became the first female judge of Supreme Court of India?",
      answers: {
        a: "Kamala Sohonie",
        b: "Michèle Audin",
        c: "Sophie Bryant",
        d: "M. Fathima Beevi"
      },
      correctAnswer: "d"
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
