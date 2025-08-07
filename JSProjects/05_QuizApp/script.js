document.addEventListener('DOMContentLoaded',()=>{

   const startBtn = document.getElementById("start-btn");
   const nextBtn = document.getElementById("next-btn");
   const restartBtn = document.getElementById("restart-btn");
   const questionContainer = document.getElementById("question-container");
   const questionText = document.getElementById("question-text");
   const choicesList = document.getElementById("choices-list");
   const resultContainer = document.getElementById("result-container");
   const scoreDisplay = document.getElementById("score");
   
   
      const questions = [
      {
        question: "What does HTML stand for?",
        choices: [
          "Hyper Trainer Marking Language",
          "Hyper Text Markup Language",
          "Hyper Text Marketing Language",
          "Hyper Text Main Language",
        ],
        ans: "Hyper Text Markup Language",
      },
      {
        question: "Which company developed JavaScript?",
        choices: ["Microsoft", "Mozilla", "Netscape", "Google"],
        ans: "Netscape",
      },
      {
        question: "Which CSS property controls the text size?",
        choices: ["font-style", "text-size", "font-size", "text-style"],
        ans: "font-size",
      },
    ];

    let currentQuestionIndex = 0;
    let score =0;

    startBtn.addEventListener('click', startQuiz)
    nextBtn.addEventListener('click', ()=>{
      currentQuestionIndex++;
      if(currentQuestionIndex<questions.length){
        showQuestion();
      } else{
        showResult();
      }
    })

    restartBtn.addEventListener('click',()=>{
      currentQuestionIndex=0;
      score =0;
      resultContainer.classList.add('hidden');
      startQuiz();
    })


    function startQuiz(){
      startBtn.classList.add('hidden');
      resultContainer.classList.add('hidden')
      questionContainer.classList.remove('hidden');
      showQuestion();
    }

    function showQuestion(){
      nextBtn.classList.add('hidden');
      questionText.textContent = questions[currentQuestionIndex].question;
      choicesList.innerHTML= "" //clear previous choices
      questions[currentQuestionIndex].choices.forEach(choice => {
        const li = document.createElement('li');
        li.textContent=choice;
        li.addEventListener('click', ()=>selectAnswer(choice))
        choicesList.appendChild(li)
      })
    }

    function selectAnswer(choice){
      const correctAnswer = questions[currentQuestionIndex].ans;
      if(choice === correctAnswer){
        score++;
      }
      nextBtn.classList.remove('hidden');
    }

    function showResult(){
      questionContainer.classList.add('hidden');
      resultContainer.classList.remove('hidden');
      scoreDisplay.textContent = `
      ${score} out of ${questions.length}
      `;
    }

    

})