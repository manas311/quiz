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
      question: "01 Which Bollywood actor was recently named in the WEF’s Young Global Leaders (YGLs) list?",
      answers: {
        a: "Priyanka Chopra",
        b: "Deepika Padukone",
        c: "Vidya Balan",
        d: "Nawazuddin Siddique"
      },
      correctAnswer: "b"
    },
    {
      question: "02 Which Bollywood personality has launched an online platform called ‘Pravasi Rojgar’ to help migrants find job opportunities?",
      answers: {
        a: "Nana Patekar",
        b: "Nawazuddin Siddique",
        c: "Sonu Sood",
        d: "Amitabh Bacchan"
      },
      correctAnswer: "c"
    },
    {
      question: "03 What is the name of the National-award winning Bollywood choreographer, who recently passed away?",
      answers: {
        a: "Saroj Khan",
        b: "Protik Prakash",
        c: "Tridib Ghosh",
        d: "Geetha Nagabhushan"
      },
      correctAnswer: "a"
    },
    {
      question: "04 Which Bollywood personality was named by NITI Aayog to promote the Women Entrepreneurship platform (WEP)?",
      answers: {
        a: "Salman Khan",
        b: "Akshay Kumar",
        c: "Sushant Singh Rajput",
        d: "Vidya Balan"
      },
      correctAnswer: "c"
    },
    {
      question: "05 The Versatile Bollywood actor Irrfan Khan, who recently passed away, had won National award for which movie?",
      answers: {
        a: "Lunch Box",
        b: "Paan Singh Tomar",
        c: "Life of PI",
        d: "Haidar"
      },
      correctAnswer: "b"
    },
    {
      question: "06 Which Bollywood celebrity has been appointed as the first ever brand ambassador of IDFC FIRST Bank?",
      answers: {
        a: "Banveer Singh",
        b: "Amitabh Bachchan",
        c: "Shah Rukh Khan",
        d: "Salman Khan"
      },
      correctAnswer: "b"
    },
    {
      question: "07 As of 2020, which is the only Bollywood movie to win 13 Filmfare Awards?",
      answers: {
        a: "Uri: The Surgical Strike",
        b: "Article 15",
        c: "Saand ki Aankh",
        d: "Gully Boy"
      },
      correctAnswer: "d"
    },
    {
      question: "08 National Anti-Doping Agency (NADA) has selected which Bollywood actor as its brand ambassador?",
      answers: {
        a: "Akshay Kumar",
        b: "Salman Khan",
        c: "Suniel Shetty",
        d: "Imran Hasmi"
      },
      correctAnswer: "c"
    },
    {
      question: "09 Which movie has become the first Bollywood film to go plastic-free?",
      answers: {
        a: "War",
        b: "Dream Girl",
        c: "Mission Mangal",
        d: "Coolie No. 1"
      },
      correctAnswer: "d"
    },
    {
      question: "10 Which Bollywood actor to be felicitated with ‘Excellence in Cinema’ award by Victorian Government?",
      answers: {
        a: "Priyanka Chopra",
        b: "Shekhar Kapoor",
        c: "Shahrukh Khan",
        d: "Deepika Padukone"
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
