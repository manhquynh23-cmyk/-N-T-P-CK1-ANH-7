const quizData = [
    // PART 1: LISTENING 1 - TRADITIONAL VIETNAMESE FOOD
    { p: "PART 1: LISTENING 1", q: "Question 1. Pho is one of the most popular dishes in Viet Nam.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 2. People usually enjoy Pho only for dinner.", options: ["True", "False"], correct: 1 },
    { p: "PART 1: LISTENING 1", q: "Question 3. The broth (nước dùng) for Pho is made by stewing beef or chicken bones.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 4. Rice noodles are the main ingredient of Pho.", options: ["True", "False"], correct: 0 },
    { p: "PART 1: LISTENING 1", q: "Question 5. You cannot find any herbs or lime in a bowl of Pho.", options: ["True", "False"], correct: 1 },

    // PART 2: LISTENING 2 - COMMUNITY SERVICE
    { p: "PART 2: LISTENING 2", q: "Question 6. What did the students do last summer?", options: ["They went on a forest tour.", "They did community service.", "They joined a sports club."], correct: 1 },
    { p: "PART 2: LISTENING 2", q: "Question 7. Who did they help in the project?", options: ["Homeless children", "Elderly people in a nursing home", "Primary students"], correct: 1 },
    { p: "PART 2: LISTENING 2", q: "Question 8. How many books did they collect for the poor children?", options: ["Over 100 books", "Over 200 books", "Over 500 books"], correct: 1 },
    { p: "PART 2: LISTENING 2", q: "Question 9. What did they do to protect the environment?", options: ["Planted flowers and cleaned the local park.", "Recycled plastic bottles at home.", "Cycled to school every day."], correct: 0 },
    { p: "PART 2: LISTENING 2", q: "Question 10. How did the students feel after the project?", options: ["Tired and bored.", "Proud and happy.", "Sad because it ended soon."], correct: 1 },

    // PART 3: LANGUAGE KNOWLEDGE
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 11. My sister loves _______ photos of beautiful landscapes.", options: ["taking", "doing", "playing", "catching"], correct: 0 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 12. We should eat more vegetables because they are _______ for our health.", options: ["bad", "harmful", "good", "quick"], correct: 2 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 13. Water puppetry _______ in the villages of the Red River Delta.", options: ["started", "played", "moved", "went"], correct: 0 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 14. The 'Dan Bau' is a Vietnamese traditional musical _______.", options: ["tool", "equipment", "instrument", "device"], correct: 2 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 15. How _______ calories are there in an apple?", options: ["much", "many", "some", "any"], correct: 1 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 16. I don't have _______ butter left to make the cake.", options: ["some", "a", "an", "any"], correct: 3 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 17. The Temple of Literature _______ by many people every year.", options: ["is visited", "visit", "visits", "visited"], correct: 0 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 18. Last week, we _______ old clothes to help the poor children.", options: ["give", "gave", "will give", "giving"], correct: 1 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 19. My hobby is different _______ yours.", options: ["as", "with", "from", "than"], correct: 2 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 20. 'Would you like some lemonade?' - '__________'", options: ["Yes, please.", "No, I don't.", "Yes, I do.", "It's very expensive."], correct: 0 },
    { p: "PART 3: VOCABULARY & GRAMMAR", q: "Question 21. 'What is your hobby?' - '__________'", options: ["I am a student.", "I like collecting stamps.", "I'm 13 years old.", "I go to school by bus."], correct: 1 },

    // PART 4: READING 1
    { p: "PART 4: READING 1", q: "Question 22. You should eat a (22) _______ of foods like meat, fish...", options: ["variety", "lot", "many", "group"], correct: 0 },
    { p: "PART 4: READING 1", q: "Question 23. (23) _______ enough water is also necessary for your body.", options: ["Drinking", "Drink", "Drank", "Drinks"], correct: 0 },
    { p: "PART 4: READING 1", q: "Question 24. Try to avoid eating too much fast food or (24) _______ drinks.", options: ["soft", "hard", "hot", "small"], correct: 0 },
    { p: "PART 4: READING 1", q: "Question 25. If you eat well and (25) _______ exercise regularly...", options: ["do", "make", "play", "take"], correct: 0 },
    { p: "PART 4: READING 1", q: "Question 26. ...you will (26) _______ fit and strong.", options: ["keep", "will keep", "kept", "keeps"], correct: 1 },

    // PART 5: READING 2 - TEMPLE OF LITERATURE
    { p: "PART 5: READING 2", q: "Question 27. When was the Temple of Literature built?", options: ["In 1070.", "In 1076.", "In 1082.", "In 2025."], correct: 0 },
    { p: "PART 5: READING 2", q: "Question 28. What was Quoc Tu Giam?", options: ["A small school.", "The first university of Viet Nam.", "A modern library.", "A beautiful park."], correct: 1 },
    { p: "PART 5: READING 2", q: "Question 29. How many courtyards does the temple have?", options: ["Three.", "Four.", "Five.", "Six."], correct: 2 },
    { p: "PART 5: READING 2", q: "Question 30. What can we find on the Doctors' stone tablets?", options: ["Kings' names", "History of Ha Noi", "Names of successful students", "Information about trees"], correct: 2 },
    { p: "PART 5: READING 2", q: "Question 31. Why do students come to the temple before exams?", options: ["To take photos.", "To pray for good luck.", "To study history.", "To see the trees."], correct: 1 },

    // PART 6: WRITING
    { p: "PART 6: WRITING", q: "Question 32. My / hobby / is / dolls / collecting / .", options: ["My hobby is collecting dolls.", "My hobby collecting is dolls.", "Collecting dolls is my hobby.", "Both A & C are correct."], correct: 3 },
    { p: "PART 6: WRITING", q: "Question 33. We / morning / exercise / every / day / do / should / .", options: ["We should do morning exercise every day.", "We do morning exercise should every day.", "Every day we do morning exercise should.", "Should we do morning exercise every day."], correct: 0 },
    { p: "PART 6: WRITING", q: "Question 34. is / soup / What / your / favorite / noodle / ?", options: ["What is your favorite noodle soup?", "What noodle soup is your favorite?", "Your favorite noodle soup is what?", "A & B are correct."], correct: 3 },
    { p: "PART 6: WRITING", q: "Question 35. visited / We / orphans / the / last / weekend / .", options: ["We visited the orphans last weekend.", "The orphans visited we last weekend.", "We last weekend visited the orphans.", "We visited orphans the last weekend."], correct: 0 }
];

let currentIndex = 0;
let score = 0;

function loadQuiz() {
    if (currentIndex >= quizData.length) {
        showResults();
        return;
    }
    const currentQuiz = quizData[currentIndex];
    document.getElementById('part-title').innerText = currentQuiz.p;
    document.getElementById('question-text').innerText = currentQuiz.q;
    document.getElementById('current-pos').innerText = currentIndex + 1;
    
    const optionsGrid = document.getElementById('options');
    optionsGrid.innerHTML = '';
    
    currentQuiz.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (idx === currentQuiz.correct) score++;
            currentIndex++;
            loadQuiz();
            document.getElementById('score-correct').innerText = score;
        };
        optionsGrid.appendChild(btn);
    });
}

function showResults() {
    document.getElementById('quiz-section').style.display = 'none';
    document.getElementById('result-screen').style.display = 'block';
    const finalScore = (score / quizData.length * 10).toFixed(1);
    document.getElementById('final-stats').innerHTML = `Đúng: ${score}/35 câu. <br> Điểm số: ${finalScore}/10`;
}

loadQuiz();