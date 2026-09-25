/* ==========================================
   EXAMPRO
   ONLINE EXAMINATION SCRIPT
========================================== */


/* ==========================================
   QUESTIONS
========================================== */

// ==========================================
// SELECTED EXAM
// ==========================================




const selectedExam =
    Number(localStorage.getItem("selectedExam")) || 1;

const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser") || "null"
    );


// ==========================================
// CHECK LOGIN
// ==========================================

if (!currentUser) {

    window.location.replace("index.html");

    throw new Error("User is not logged in.");

}

    // ==========================================
// SET EXAM TITLE
// ==========================================

const examTitleElement =
    document.getElementById("examTitle");

if (selectedExam === 1) {

    examTitleElement.textContent =
        "Computer Fundamentals";

}
else if (selectedExam === 2) {

    examTitleElement.textContent =
        "MS Excel";

}
else if (selectedExam === 3) {

    examTitleElement.textContent =
        "General Knowledge";

}

    console.log("Selected Exam:", selectedExam);

const computerQuestions = [

    {
        question: "What is a computer?",
        options: [
            "An electronic device that processes data",
            "A type of television",
            "A programming language",
            "A mobile application"
        ],
        answer: 0
    },

    {
        question: "Which device is used to enter data into a computer?",
        options: [
            "Monitor",
            "Keyboard",
            "Speaker",
            "Printer"
        ],
        answer: 1
    },

    {
        question: "Which of the following is an output device?",
        options: [
            "Keyboard",
            "Mouse",
            "Monitor",
            "Scanner"
        ],
        answer: 2
    },

    {
        question: "What does CPU stand for?",
        options: [
            "Central Processing Unit",
            "Computer Personal Unit",
            "Central Program Utility",
            "Computer Processing User"
        ],
        answer: 0
    },

    {
        question: "Which one is an operating system?",
        options: [
            "Windows",
            "Google",
            "Keyboard",
            "Printer"
        ],
        answer: 0
    },

    {
        question: "Which key is commonly used to delete characters?",
        options: [
            "Shift",
            "Ctrl",
            "Backspace",
            "Alt"
        ],
        answer: 2
    },

    {
        question: "What is the full form of RAM?",
        options: [
            "Read Access Memory",
            "Random Access Memory",
            "Run Access Memory",
            "Rapid Application Memory"
        ],
        answer: 1
    },

    {
        question: "Which of these is a storage device?",
        options: [
            "Hard Disk",
            "Keyboard",
            "Mouse",
            "Monitor"
        ],
        answer: 0
    },

    {
        question: "Which software is used to browse the internet?",
        options: [
            "Web Browser",
            "Calculator",
            "Paint",
            "Notepad"
        ],
        answer: 0
    },

    {
        question: "Which number system is used by computers?",
        options: [
            "Decimal",
            "Binary",
            "Roman",
            "Octal only"
        ],
        answer: 1
    },

    {
    question: "Which device is used to point and select items on a computer screen?",
    options: [
        "Mouse",
        "Printer",
        "Speaker",
        "Scanner"
    ],
    answer: 0
},

{
    question: "Which part of a computer displays information visually?",
    options: [
        "Keyboard",
        "Monitor",
        "CPU",
        "Mouse"
    ],
    answer: 1
},

{
    question: "Which memory is temporary and loses data when power is turned off?",
    options: [
        "ROM",
        "RAM",
        "Hard Disk",
        "SSD"
    ],
    answer: 1
},

{
    question: "What does ROM stand for?",
    options: [
        "Read Only Memory",
        "Random Only Memory",
        "Read Open Memory",
        "Run Only Memory"
    ],
    answer: 0
},

{
    question: "Which device is commonly used to print documents?",
    options: [
        "Scanner",
        "Monitor",
        "Printer",
        "Keyboard"
    ],
    answer: 2
},

{
    question: "Which of the following is an input device?",
    options: [
        "Monitor",
        "Printer",
        "Keyboard",
        "Speaker"
    ],
    answer: 2
},

{
    question: "What is the brain of the computer commonly called?",
    options: [
        "Monitor",
        "CPU",
        "Keyboard",
        "Printer"
    ],
    answer: 1
},

{
    question: "Which software is used to create and edit text documents?",
    options: [
        "Microsoft Word",
        "Calculator",
        "Paint",
        "Media Player"
    ],
    answer: 0
},

{
    question: "Which key is commonly used to move to the next line in a document?",
    options: [
        "Enter",
        "Shift",
        "Ctrl",
        "Esc"
    ],
    answer: 0
},

{
    question: "Which of the following is used to store files permanently?",
    options: [
        "RAM",
        "Hard Disk",
        "Cache",
        "Register"
    ],
    answer: 1
}

];


const excelQuestions = [

    {
        question: "What is Microsoft Excel mainly used for?",
        options: [
            "Creating and managing spreadsheets",
            "Editing videos",
            "Browsing websites",
            "Playing music"
        ],
        answer: 0
    },

    {
        question: "What is a cell in Excel?",
        options: [
            "A worksheet",
            "The intersection of a row and column",
            "A formula",
            "A chart"
        ],
        answer: 1
    },

    {
        question: "Which symbol is used to start a formula in Excel?",
        options: [
            "#",
            "@",
            "=",
            "$"
        ],
        answer: 2
    },

    {
        question: "Which function is used to add numbers in Excel?",
        options: [
            "COUNT",
            "SUM",
            "TEXT",
            "MAXIMUM"
        ],
        answer: 1
    },

    {
        question: "What is the default file extension of a modern Excel workbook?",
        options: [
            ".docx",
            ".pptx",
            ".xlsx",
            ".txt"
        ],
        answer: 2
    },

    {
        question: "Which function finds the largest value?",
        options: [
            "MIN",
            "MAX",
            "SUM",
            "COUNT"
        ],
        answer: 1
    },

    {
        question: "Which function counts cells containing numbers?",
        options: [
            "COUNT",
            "SUM",
            "AVERAGE",
            "MAX"
        ],
        answer: 0
    },

    {
        question: "What is a row identified by in Excel?",
        options: [
            "Letters",
            "Numbers",
            "Symbols",
            "Colors"
        ],
        answer: 1
    },

    {
        question: "What is a column identified by in Excel?",
        options: [
            "Numbers",
            "Letters",
            "Colors",
            "Symbols"
        ],
        answer: 1
    },

    {
        question: "Which feature can arrange data from A to Z?",
        options: [
            "Sort",
            "Print",
            "Merge",
            "Format Painter"
        ],
        answer: 0
    },

    {
    question: "Which shortcut is used to copy selected cells in Excel?",
    options: [
        "Ctrl + C",
        "Ctrl + V",
        "Ctrl + X",
        "Ctrl + Z"
    ],
    answer: 0
},

{
    question: "Which shortcut is used to paste copied data?",
    options: [
        "Ctrl + P",
        "Ctrl + V",
        "Ctrl + S",
        "Ctrl + A"
    ],
    answer: 1
},

{
    question: "Which shortcut is used to save an Excel workbook?",
    options: [
        "Ctrl + S",
        "Ctrl + C",
        "Ctrl + F",
        "Ctrl + N"
    ],
    answer: 0
},

{
    question: "Which function calculates the average of numbers?",
    options: [
        "SUM",
        "COUNT",
        "AVERAGE",
        "MAX"
    ],
    answer: 2
},

{
    question: "Which function finds the smallest value?",
    options: [
        "MIN",
        "MAX",
        "SUM",
        "COUNT"
    ],
    answer: 0
},

{
    question: "What is the intersection of a row and column called?",
    options: [
        "Table",
        "Cell",
        "Sheet",
        "Range"
    ],
    answer: 1
},

{
    question: "Which symbol is used for an absolute cell reference?",
    options: [
        "#",
        "$",
        "@",
        "%"
    ],
    answer: 1
},

{
    question: "Which Excel feature is used to create graphical representations of data?",
    options: [
        "Charts",
        "Sort",
        "Filter",
        "Comments"
    ],
    answer: 0
},

{
    question: "Which option is used to display only rows that meet specific conditions?",
    options: [
        "Filter",
        "Merge",
        "Print",
        "Wrap Text"
    ],
    answer: 0
},

{
    question: "Which command combines multiple cells into one cell?",
    options: [
        "Merge & Center",
        "Sort",
        "Filter",
        "Freeze Panes"
    ],
    answer: 0
},

{
    question: "What is an Excel file containing worksheets called?",
    options: [
        "Workbook",
        "Document",
        "Database",
        "Presentation"
    ],
    answer: 0
},

{
    question: "Which shortcut selects all data in a worksheet?",
    options: [
        "Ctrl + A",
        "Ctrl + B",
        "Ctrl + D",
        "Ctrl + E"
    ],
    answer: 0
},

{
    question: "Which feature keeps selected rows or columns visible while scrolling?",
    options: [
        "Freeze Panes",
        "Sort",
        "Filter",
        "Merge Cells"
    ],
    answer: 0
},

{
    question: "Which function counts the number of non-empty cells?",
    options: [
        "COUNT",
        "COUNTA",
        "SUM",
        "AVERAGE"
    ],
    answer: 1
},

{
    question: "Which shortcut is commonly used to undo the last action?",
    options: [
        "Ctrl + Z",
        "Ctrl + Y",
        "Ctrl + X",
        "Ctrl + U"
    ],
    answer: 0
}

];


const gkQuestions = [

    {
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "New Delhi",
            "Kolkata",
            "Chennai"
        ],
        answer: 1
    },

    {
        question: "Which planet is known as the Red Planet?",
        options: [
            "Earth",
            "Venus",
            "Mars",
            "Jupiter"
        ],
        answer: 2
    },

    {
        question: "How many days are there in a leap year?",
        options: [
            "365",
            "366",
            "364",
            "360"
        ],
        answer: 1
    },

    {
        question: "Which is the largest ocean in the world?",
        options: [
            "Atlantic Ocean",
            "Indian Ocean",
            "Pacific Ocean",
            "Arctic Ocean"
        ],
        answer: 2
    },

    {
        question: "Which is the national animal of India?",
        options: [
            "Lion",
            "Tiger",
            "Elephant",
            "Peacock"
        ],
        answer: 1
    },

    {
        question: "How many continents are there in the world?",
        options: [
            "5",
            "6",
            "7",
            "8"
        ],
        answer: 2
    },

    {
        question: "Which gas do plants mainly absorb from the atmosphere?",
        options: [
            "Oxygen",
            "Nitrogen",
            "Carbon Dioxide",
            "Hydrogen"
        ],
        answer: 2
    },

    {
        question: "Which is the largest planet in our solar system?",
        options: [
            "Earth",
            "Mars",
            "Jupiter",
            "Saturn"
        ],
        answer: 2
    },

    {
        question: "Who is known as the Father of the Nation in India?",
        options: [
            "Jawaharlal Nehru",
            "Mahatma Gandhi",
            "Sardar Patel",
            "B. R. Ambedkar"
        ],
        answer: 1
    },

    {
        question: "Which language is primarily used to structure web pages?",
        options: [
            "HTML",
            "Python",
            "SQL",
            "C++"
        ],
        answer: 0
    },  

    {
    question: "Which is the smallest continent by land area?",
    options: [
        "Asia",
        "Africa",
        "Australia",
        "Europe"
    ],
    answer: 2
},

{
    question: "Which is the longest river in India?",
    options: [
        "Yamuna",
        "Ganga",
        "Godavari",
        "Narmada"
    ],
    answer: 1
},

{
    question: "Which is the largest state in India by area?",
    options: [
        "Madhya Pradesh",
        "Maharashtra",
        "Rajasthan",
        "Uttar Pradesh"
    ],
    answer: 2
},

{
    question: "Which is the smallest state in India by area?",
    options: [
        "Goa",
        "Sikkim",
        "Tripura",
        "Manipur"
    ],
    answer: 0
},

{
    question: "What is the currency of Japan?",
    options: [
        "Won",
        "Yuan",
        "Yen",
        "Dollar"
    ],
    answer: 2
},

{
    question: "Which planet is closest to the Sun?",
    options: [
        "Venus",
        "Earth",
        "Mercury",
        "Mars"
    ],
    answer: 2
},

{
    question: "How many sides does a triangle have?",
    options: [
        "3",
        "4",
        "5",
        "6"
    ],
    answer: 0
},

{
    question: "Which organ pumps blood throughout the human body?",
    options: [
        "Lungs",
        "Heart",
        "Kidney",
        "Brain"
    ],
    answer: 1
},

{
    question: "Which gas is essential for human breathing?",
    options: [
        "Carbon Dioxide",
        "Oxygen",
        "Hydrogen",
        "Helium"
    ],
    answer: 1
},

{
    question: "Which is the largest mammal in the world?",
    options: [
        "Elephant",
        "Blue Whale",
        "Giraffe",
        "Hippopotamus"
    ],
    answer: 1
},

{
    question: "Which instrument is used to measure temperature?",
    options: [
        "Barometer",
        "Thermometer",
        "Hygrometer",
        "Compass"
    ],
    answer: 1
},

{
    question: "Which metal is liquid at room temperature?",
    options: [
        "Iron",
        "Copper",
        "Mercury",
        "Aluminium"
    ],
    answer: 2
},

{
    question: "How many players are there in a cricket team?",
    options: [
        "9",
        "10",
        "11",
        "12"
    ],
    answer: 2
},

{
    question: "Which country is known as the Land of the Rising Sun?",
    options: [
        "China",
        "Japan",
        "Thailand",
        "South Korea"
    ],
    answer: 1
},

{
    question: "Which is the largest desert in the world?",
    options: [
        "Sahara Desert",
        "Gobi Desert",
        "Antarctic Desert",
        "Thar Desert"
    ],
    answer: 2
},

{
    question: "Which vitamin is mainly produced in the skin through sunlight exposure?",
    options: [
        "Vitamin A",
        "Vitamin B",
        "Vitamin C",
        "Vitamin D"
    ],
    answer: 3
},

{
    question: "Which is the fastest land animal?",
    options: [
        "Lion",
        "Cheetah",
        "Tiger",
        "Horse"
    ],
    answer: 1
},

{
    question: "How many hours are there in one day?",
    options: [
        "12",
        "18",
        "24",
        "48"
    ],
    answer: 2
},

{
    question: "Which is the national flower of India?",
    options: [
        "Rose",
        "Lotus",
        "Sunflower",
        "Lily"
    ],
    answer: 1
},

{
    question: "Which ocean lies between Africa and Australia?",
    options: [
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean",
        "Arctic Ocean"
    ],
    answer: 2
}

];


// ==========================================
// SELECT QUESTIONS ACCORDING TO EXAM
// ==========================================

let questions;

if (selectedExam === 1) {

    questions = computerQuestions;

}
else if (selectedExam === 2) {

    questions = excelQuestions;

}
else if (selectedExam === 3) {

    questions = gkQuestions;

}
else {

    questions = computerQuestions;

}


/* ==========================================
   VARIABLES
========================================== */

let currentQuestion = 0;

let userAnswers = new Array(
    questions.length
).fill(null);

let markedQuestions = new Array(
    questions.length
).fill(false);


/* ==========================================
   TIMER
========================================== */
let timeLeft;

if (selectedExam === 1) {
    timeLeft = 30 * 60;
}
else if (selectedExam === 2) {
    timeLeft = 35 * 60;
}
else if (selectedExam === 3) {
    timeLeft = 40 * 60;
}
else {
    timeLeft = 30 * 60;
}

const timerElement =
    document.getElementById("timer");


function updateTimer() {

    const minutes =
        Math.floor(timeLeft / 60);

    const seconds =
        timeLeft % 60;

    timerElement.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    if (timeLeft <= 0) {

        clearInterval(timerInterval);

        submitExam();

        return;
    }

    timeLeft--;

}


const timerInterval =
    setInterval(updateTimer, 1000);

updateTimer();


/* ==========================================
   LOAD QUESTION
========================================== */

function loadQuestion() {

    const question =
        questions[currentQuestion];


    document.getElementById(
        "currentQuestion"
    ).textContent = currentQuestion + 1;


    document.getElementById(
        "questionNumber"
    ).textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;


    document.getElementById(
        "questionText"
    ).textContent =
        question.question;


    const progress =
        ((currentQuestion + 1) /
            questions.length) * 100;


    document.getElementById(
        "progressPercent"
    ).textContent =
        `${Math.round(progress)}%`;


    document.getElementById(
        "progressFill"
    ).style.width =
        `${progress}%`;


    const optionsContainer =
        document.getElementById(
            "optionsContainer"
        );


    optionsContainer.innerHTML = "";


    const letters = [
        "A",
        "B",
        "C",
        "D"
    ];


    question.options.forEach(
        (option, index) => {

            const optionDiv =
                document.createElement("div");


            optionDiv.className = "option";


            if (
                userAnswers[currentQuestion]
                === index
            ) {

                optionDiv.classList.add(
                    "selected"
                );

            }


            optionDiv.innerHTML = `
                <span class="option-letter">
                    ${letters[index]}
                </span>

                <span>
                    ${option}
                </span>
            `;


            optionDiv.addEventListener(
                "click",
                () => {

                    selectAnswer(index);

                }
            );


            optionsContainer.appendChild(
                optionDiv
            );

        }
    );


    document.getElementById(
        "previousBtn"
    ).disabled =
        currentQuestion === 0;


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        document.getElementById(
            "nextBtn"
        ).textContent =
            "Finish →";

    } else {

        document.getElementById(
            "nextBtn"
        ).textContent =
            "Next →";

    }


    renderQuestionNumbers();

}


/* ==========================================
   SELECT ANSWER
========================================== */

function selectAnswer(index) {

    userAnswers[currentQuestion] =
        index;

    loadQuestion();

}


/* ==========================================
   NEXT BUTTON
========================================== */

document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    () => {

        if (
            currentQuestion <
            questions.length - 1
        ) {

            currentQuestion++;

            loadQuestion();

        } else {

            submitExam();

        }

    }
);


/* ==========================================
   PREVIOUS BUTTON
========================================== */

document.getElementById(
    "previousBtn"
).addEventListener(
    "click",
    () => {

        if (currentQuestion > 0) {

            currentQuestion--;

            loadQuestion();

        }

    }
);


/* ==========================================
   QUESTION NAVIGATION
========================================== */

function renderQuestionNumbers() {

    const container =
        document.getElementById(
            "questionNumbers"
        );


    container.innerHTML = "";


    questions.forEach(
        (_, index) => {

            const button =
                document.createElement("button");


            button.className =
                "question-number";


            button.textContent =
                index + 1;


            if (
                index === currentQuestion
            ) {

                button.classList.add(
                    "current"
                );

            }


            if (
                userAnswers[index] !== null
            ) {

                button.classList.add(
                    "answered"
                );

            }


            button.addEventListener(
                "click",
                () => {

                    currentQuestion = index;

                    loadQuestion();

                }
            );


            container.appendChild(button);

        }
    );

}


/* ==========================================
   MARK QUESTION
========================================== */

document.getElementById(
    "markBtn"
).addEventListener(
    "click",
    () => {

        markedQuestions[currentQuestion] =
            !markedQuestions[currentQuestion];


        const button =
            document.getElementById(
                "markBtn"
            );


        if (
            markedQuestions[currentQuestion]
        ) {

            button.textContent =
                "★ Marked for Review";

        } else {

            button.textContent =
                "☆ Mark for Review";

        }

    }
);


/* ==========================================
   SUBMIT EXAM
========================================== */


document.getElementById("submitBtn").addEventListener("click", function () {
    submitExam();
});


function submitExam() {

    const confirmSubmit = confirm(
        "Are you sure you want to submit the exam?"
    );

    if (!confirmSubmit) {
        return;
    }

    localStorage.removeItem("selectedExamResult");

    // Stop timer
    clearInterval(timerInterval);


    // ==========================================
    // CALCULATE RESULT
    // ==========================================

    let score = 0;
    let wrong = 0;
    let skipped = 0;


    questions.forEach((question, index) => {

        // Question not answered
        if (userAnswers[index] === null) {

            skipped++;

        }

        // Correct answer
        else if (userAnswers[index] === question.answer) {

            score++;

        }

        // Wrong answer
        else {

            wrong++;

        }

    });


    // ==========================================
    // CREATE RESULT
    // ==========================================



    const result = {

      studentName:
    currentUser?.name || "Student",

       examName:
    selectedExam === 1
        ? "Computer Fundamentals"
        : selectedExam === 2
            ? "MS Excel"
            : "General Knowledge",

        totalQuestions: questions.length,

        correct: score,

        wrong: wrong,

        skipped: skipped,

        percentage: Math.round(
            (score / questions.length) * 100
        ),

        date: new Date().toLocaleString()

    };


    // ==========================================
    // SAVE RESULT HISTORY
    // ==========================================

    const examResults = JSON.parse(
        localStorage.getItem("examResults") || "[]"
    );


    examResults.push(result);


    localStorage.setItem(
        "examResults",
        JSON.stringify(examResults)
    );


    // ==========================================
    // SAVE LATEST RESULT
    // ==========================================

    localStorage.setItem(
        "examResult",
        JSON.stringify(result)
    );


    // ==========================================
    // OPEN RESULT PAGE
    // ==========================================

    window.location.href = "result.html";

}

loadQuestion();

// ==========================================
// CHECK LOGIN WHEN PAGE IS RESTORED
// ==========================================

window.addEventListener("pageshow", function () {

    if (!localStorage.getItem("currentUser")) {

        window.location.replace("index.html");

    }

});