/* =========================================
   EXAMPRO
   STUDENT DASHBOARD
========================================= */


// =========================================
// CHECK LOGIN
// =========================================

const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser") || "null"
    );


// If user is not logged in
if (!currentUser) {

    window.location.replace("index.html");

    throw new Error("User is not logged in.");

}


// =========================================
// DISPLAY USER
// =========================================

document.getElementById("studentName")
    .textContent =
    currentUser.name || "Student";


document.getElementById("welcomeName")
    .textContent =
    `Hello, ${currentUser.name || "Student"}!`;


// =========================================
// AVAILABLE EXAMS
// =========================================

const exams = [

    {
        id: 1,

        title: "Computer Fundamentals",

        description:
            "Test your knowledge of basic computer concepts.",

        questions: 20,

        duration: 30,

        category: "Computer"
    },

    {
        id: 2,

        title: "MS Excel",

        description:
            "Test your knowledge of Excel formulas and tools.",

        questions: 25,

        duration: 35,

        category: "Office"
    },

    {
        id: 3,

        title: "General Knowledge",

        description:
            "Evaluate your general knowledge and awareness.",

        questions: 30,

        duration: 40,

        category: "GK"
    }

];


// =========================================
// DISPLAY EXAMS
// =========================================

const examContainer =
    document.getElementById("examContainer");


function displayExams() {

    examContainer.innerHTML = "";


    exams.forEach(
        function (exam) {

            const card =
                document.createElement("div");


            card.className =
                "exam-card";


            card.innerHTML = `

                <div class="exam-top">

                    <div class="exam-icon">

                        <i class="fa-solid fa-file-lines"></i>

                    </div>

                    <span class="exam-status">
                        Available
                    </span>

                </div>


                <h3>
                    ${exam.title}
                </h3>


                <p>
                    ${exam.description}
                </p>


                <div class="exam-info">

                    <span>

                        <i class="fa-solid fa-list"></i>

                        ${exam.questions} Questions

                    </span>


                    <span>

                        <i class="fa-solid fa-clock"></i>

                        ${exam.duration} Min

                    </span>

                </div>


                <button
                    class="start-btn"
                    onclick="startExam(${exam.id})"
                >

                    Start Exam

                </button>

            `;


            examContainer.appendChild(card);

        }
    );

}


displayExams();


// =========================================
// START EXAM
// =========================================

function startExam(examId) {

    // Remove previously selected result
    localStorage.removeItem("selectedExamResult");

    localStorage.setItem(
        "selectedExam",
        examId
    );

    window.location.href =
        "exam.html";
}


// =========================================
// GET ACTUAL RESULTS
// =========================================

const examResults =
    JSON.parse(
        localStorage.getItem("examResults") || "[]"
    );


// =========================================
// DISPLAY RESULTS
// =========================================

const resultTable =
    document.getElementById("resultTable");


function displayResults() {

    resultTable.innerHTML = "";


    // No results
    if (examResults.length === 0) {

        resultTable.innerHTML = `

            <tr>

                <td colspan="5">

                    No examination results found.

                </td>

            </tr>

        `;

        return;

    }


    // Show latest 5 results
    const recentResults =
        examResults.slice(-5).reverse();


    recentResults.forEach(
        function (result) {

            const row =
                document.createElement("tr");


            const percentage =
                Number(result.percentage) || 0;


            const status =
                percentage >= 40
                    ? "Passed"
                    : "Failed";


            const statusClass =
                percentage >= 40
                    ? "status-pass"
                    : "status-fail";


row.innerHTML = `
    <td>
        ${result.examName ||
        "Computer Fundamentals"}
    </td>

    <td>
        ${result.date || "N/A"}
    </td>

    <td>
        ${result.totalQuestions || 0}
    </td>

    <td>
        <strong>
            ${percentage}%
        </strong>
    </td>

    <td>
        <span class="${statusClass}">
            ${status}
        </span>
    </td>

    <td>
        <button
            class="view-btn"
            onclick="viewDashboardResult(${examResults.indexOf(result)})"
        >
            <i class="fa-solid fa-eye"></i>
            View
        </button>
    </td>
`;


            resultTable.appendChild(row);

        }
    );

}


displayResults();


// =========================================
// UPDATE STATISTICS
// =========================================

const totalExams =
    exams.length;


const completedExams =
    examResults.length;


let totalPercentage = 0;


examResults.forEach(
    function (result) {

        totalPercentage +=
            Number(result.percentage) || 0;

    }
);


const averageScore =
    completedExams > 0
        ? Math.round(
            totalPercentage /
            completedExams
        )
        : 0;


// =========================================
// TOTAL EXAMS
// =========================================

document.getElementById("totalExams")
    .textContent =
    totalExams;


// =========================================
// COMPLETED EXAMS
// =========================================

document.getElementById("completedExams")
    .textContent =
    completedExams;


// =========================================
// PENDING EXAMS
// =========================================

const pendingExams =
    Math.max(
        totalExams - completedExams,
        0
    );


document.getElementById("pendingExams")
    .textContent =
    pendingExams;


// =========================================
// AVERAGE SCORE
// =========================================

document.getElementById("averageScore")
    .textContent =
    averageScore + "%";


// =========================================
// LOGOUT
// =========================================

document.getElementById("logoutBtn")
    .addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "currentUser"
            );


            localStorage.removeItem(
                "selectedExam"
            );


            window.location.href =
                "index.html";

        }
    );


// =========================================
// MOBILE SIDEBAR
// =========================================

const mobileMenu =
    document.getElementById("mobileMenu");


const sidebar =
    document.querySelector(".sidebar");


mobileMenu.addEventListener(
    "click",
    function () {

        sidebar.classList.toggle("show");

    }
);

// =========================================
// VIEW DASHBOARD RESULT
// =========================================

function viewDashboardResult(index) {

    const selectedResult =
        examResults[index];

    if (!selectedResult) {
        return;
    }

    localStorage.setItem(
        "selectedExamResult",
        JSON.stringify(selectedResult)
    );

    window.location.href =
        "result.html";
}  

// =========================================
// CHECK LOGIN WHEN PAGE IS RESTORED
// =========================================

window.addEventListener("pageshow", function () {

    const user =
        localStorage.getItem("currentUser");

    if (!user) {

        window.location.replace("index.html");

    }

});