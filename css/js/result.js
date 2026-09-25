/* ==========================================
   EXAMPRO
   RESULT PAGE SCRIPT
========================================== */


// ==========================================
// GET RESULT
// ==========================================



// ==========================================
// CHECK LOGIN
// ==========================================

const currentUser =
    JSON.parse(
        localStorage.getItem("currentUser") || "null"
    );

if (!currentUser) {

    window.location.replace("index.html");

    throw new Error("User is not logged in.");

}

// ==========================================
// GET RESULT
// ==========================================

let resultData = null;


// ------------------------------------------
// 1. Check if result was opened from History
// ------------------------------------------

const selectedResult = JSON.parse(
    localStorage.getItem("selectedExamResult") || "null"
);


// ------------------------------------------
// 2. History View has priority
// ------------------------------------------

if (selectedResult) {

    resultData = selectedResult;

}


// ------------------------------------------
// 3. Otherwise get latest submitted result
// ------------------------------------------

if (!resultData) {

    const examResults = JSON.parse(
        localStorage.getItem("examResults") || "[]"
    );

    if (examResults.length > 0) {

        resultData =
            examResults[examResults.length - 1];

    }

}


// ------------------------------------------
// 4. Final fallback
// ------------------------------------------

if (!resultData) {

    resultData = JSON.parse(
        localStorage.getItem("examResult") || "null"
    );

}
// ==========================================
// DISPLAY RESULT
// ==========================================

if (resultData) {

    document.getElementById("studentName").textContent =
        resultData.studentName || "Shivangi";


    document.getElementById("examName").textContent =
        resultData.examName || "Computer Fundamentals";


    document.getElementById("totalQuestions").textContent =
        resultData.totalQuestions || 0;


    document.getElementById("correctAnswers").textContent =
        resultData.correct || 0;


    document.getElementById("wrongAnswers").textContent =
        resultData.wrong || 0;


    document.getElementById("skippedAnswers").textContent =
        resultData.skipped || 0;


    document.getElementById("score").textContent =
        `${resultData.correct || 0}/${resultData.totalQuestions || 0}`;


    document.getElementById("percentage").textContent =
        `${resultData.percentage || 0}%`;


    document.getElementById("progressBar").style.width =
        `${resultData.percentage || 0}%`;

}


// ==========================================
// PERFORMANCE MESSAGE
// ==========================================

const percentage =
    resultData
        ? Number(resultData.percentage) || 0
        : 0;


const performanceText =
    document.getElementById("performanceText");


if (percentage >= 80) {

    performanceText.textContent =
        "Excellent performance! Keep up the great work.";

}
else if (percentage >= 60) {

    performanceText.textContent =
        "Good performance! Keep practicing to improve your score.";

}
else if (percentage >= 40) {

    performanceText.textContent =
        "You passed. More practice will help improve your performance.";

}
else {

    performanceText.textContent =
        "Keep practicing and try again to improve your score.";

}


// ==========================================
// DASHBOARD BUTTON
// ==========================================

function goDashboard() {

    window.location.href =
        "dashboard.html";

}


// ==========================================
// RETAKE EXAM
// ==========================================

function retakeExam() {

    // Remove selected old result
    localStorage.removeItem("selectedExamResult");

    // Open new exam
    window.location.href =
        "exam.html";

}

// ==========================================
// RETAKE SAME EXAM
// ==========================================

const retakeBtn =
    document.getElementById("retakeBtn");

if (retakeBtn) {

    retakeBtn.addEventListener(
        "click",
        function () {

            // Clear history selection first.
            localStorage.removeItem(
                "selectedExamResult"
            );

            // Preserve the exam being retaken.
            if (resultData) {

                if (
                    resultData.examName ===
                    "MS Excel"
                ) {

                    localStorage.setItem(
                        "selectedExam",
                        "2"
                    );

                }
                else if (
                    resultData.examName ===
                    "General Knowledge"
                ) {

                    localStorage.setItem(
                        "selectedExam",
                        "3"
                    );

                }
                else {

                    localStorage.setItem(
                        "selectedExam",
                        "1"
                    );

                }

            }

        }
    );

}


// ==========================================
// CHECK LOGIN WHEN PAGE IS RESTORED
// ==========================================

window.addEventListener("pageshow", function () {

    if (!localStorage.getItem("currentUser")) {

        window.location.replace("index.html");

    }

});