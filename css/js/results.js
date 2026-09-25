/* ==========================================
   EXAM MANAGEMENT SYSTEM
   RESULTS HISTORY SCRIPT
========================================== */


// ==========================================
// CHECK LOGIN
// ==========================================

const currentUser = JSON.parse(
    localStorage.getItem("currentUser") || "null"
);

if (!currentUser) {

    window.location.replace("index.html");

    throw new Error("User is not logged in.");

}


// ==========================================
// DISPLAY CURRENT USER
// ==========================================

const headerStudentName =
    document.getElementById("headerStudentName");

if (headerStudentName) {

    headerStudentName.textContent =
        currentUser.name || "Student";

}


// ==========================================
// GET RESULTS
// ==========================================

let results = JSON.parse(
    localStorage.getItem("examResults") || "[]"
);


// ==========================================
// FALLBACK LATEST RESULT
// ==========================================

const latestResult = JSON.parse(
    localStorage.getItem("examResult") || "null"
);

if (results.length === 0 && latestResult) {

    results = [latestResult];

}


// ==========================================
// CURRENT FILTER
// ==========================================

let currentFilter = "all";


// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        updateSummary();

        renderResults();

        const filterSelect =
            document.getElementById("filterSelect");

        const clearHistoryBtn =
            document.getElementById("clearHistoryBtn");

        if (filterSelect) {

            filterSelect.addEventListener(
                "change",
                filterResults
            );

        }

        if (clearHistoryBtn) {

            clearHistoryBtn.addEventListener(
                "click",
                clearHistory
            );

        }

    }
);


// ==========================================
// UPDATE SUMMARY
// ==========================================

function updateSummary() {

    const totalExams =
        results.length;

    let passed = 0;

    let totalPercentage = 0;

    let bestScore = 0;


    results.forEach(
        function (result) {

            const percentage =
                Number(result.percentage) || 0;


            totalPercentage +=
                percentage;


            if (percentage >= 40) {

                passed++;

            }


            if (percentage > bestScore) {

                bestScore =
                    percentage;

            }

        }
    );


    const averageScore =
        totalExams > 0
            ? Math.round(
                totalPercentage /
                totalExams
            )
            : 0;


    const totalExamsElement =
        document.getElementById(
            "totalExams"
        );

    const passedExamsElement =
        document.getElementById(
            "passedExams"
        );

    const averageScoreElement =
        document.getElementById(
            "averageScore"
        );

    const bestScoreElement =
        document.getElementById(
            "bestScore"
        );


    if (totalExamsElement) {

        totalExamsElement.textContent =
            totalExams;

    }


    if (passedExamsElement) {

        passedExamsElement.textContent =
            passed;

    }


    if (averageScoreElement) {

        averageScoreElement.textContent =
            averageScore + "%";

    }


    if (bestScoreElement) {

        bestScoreElement.textContent =
            bestScore + "%";

    }

}


// ==========================================
// RENDER RESULTS
// ==========================================

function renderResults() {

    const table =
        document.getElementById(
            "resultsTable"
        );

    const emptyResults =
        document.getElementById(
            "emptyResults"
        );


    if (!table || !emptyResults) {

        return;

    }


    table.innerHTML = "";


    // ======================================
    // FILTER
    // ======================================

    const filteredResults =
        results.filter(
            function (result) {

                const percentage =
                    Number(
                        result.percentage
                    ) || 0;


                if (
                    currentFilter ===
                    "passed"
                ) {

                    return percentage >= 40;

                }


                if (
                    currentFilter ===
                    "failed"
                ) {

                    return percentage < 40;

                }


                return true;

            }
        );


    // ======================================
    // EMPTY
    // ======================================

    if (
        filteredResults.length === 0
    ) {

        emptyResults.style.display =
            "block";

        return;

    }


    emptyResults.style.display =
        "none";


    // ======================================
    // CREATE ROWS
    // ======================================

    filteredResults.forEach(
        function (result) {


            // Find original position
            const originalIndex =
                results.indexOf(result);


            const percentage =
                Number(
                    result.percentage
                ) || 0;


            const correct =
                Number(
                    result.correct
                ) || 0;


            const wrong =
                Number(
                    result.wrong
                ) || 0;


            const skipped =
                Number(
                    result.skipped
                ) || 0;


            const totalQuestions =
                Number(
                    result.totalQuestions
                ) || 0;


            const status =
                percentage >= 40
                    ? "Passed"
                    : "Failed";


            const statusClass =
                percentage >= 40
                    ? "passed"
                    : "failed";


            // ==================================
            // CREATE ROW
            // ==================================

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${originalIndex + 1}
                </td>


                <td>

                    <strong>
                        ${
                            result.examName ||
                            "Computer Fundamentals"
                        }
                    </strong>

                </td>


                <td>
                    ${result.date || "N/A"}
                </td>


                <td>

                    <strong class="correct-number">
                        ${correct}
                    </strong>

                </td>


                <td>

                    <strong class="wrong-number">
                        ${wrong}
                    </strong>

                </td>


                <td>

                    <strong class="skipped-number">
                        ${skipped}
                    </strong>

                </td>


                <td>
                    ${correct}/${totalQuestions}
                </td>


                <td>

                    <strong>
                        ${percentage}%
                    </strong>

                </td>


                <td>

                    <span class="status ${statusClass}">
                        ${status}
                    </span>

                </td>


                <td>

                    <button
                        class="view-btn"
                        type="button"
                        onclick="viewResult(${originalIndex})"
                    >

                        <i class="fa-solid fa-eye"></i>
                        View

                    </button>


                    <button
                        class="delete-result-btn"
                        type="button"
                        onclick="deleteResult(${originalIndex})"
                    >

                        <i class="fa-solid fa-trash"></i>
                        Delete

                    </button>

                </td>

            `;


            table.appendChild(row);

        }
    );

}


// ==========================================
// FILTER RESULTS
// ==========================================

function filterResults() {

    const filterSelect =
        document.getElementById(
            "filterSelect"
        );


    if (!filterSelect) {

        return;

    }


    currentFilter =
        filterSelect.value;


    renderResults();

}


// ==========================================
// VIEW RESULT
// ==========================================

function viewResult(index) {

    const selectedResult =
        results[index];


    if (!selectedResult) {

        return;

    }


    localStorage.setItem(
        "selectedExamResult",
        JSON.stringify(
            selectedResult
        )
    );


    window.location.href =
        "result.html";

}


// ==========================================
// CLEAR HISTORY
// ==========================================

function clearHistory() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete all examination history?"
        );


    if (!confirmDelete) {

        return;

    }


    localStorage.removeItem(
        "examResults"
    );

    localStorage.removeItem(
        "examResult"
    );

    localStorage.removeItem(
        "selectedExamResult"
    );


    results = [];


    currentFilter =
        "all";


    const filterSelect =
        document.getElementById(
            "filterSelect"
        );


    if (filterSelect) {

        filterSelect.value =
            "all";

    }


    updateSummary();

    renderResults();


    alert(
        "Examination history has been cleared."
    );

}


// ==========================================
// DELETE INDIVIDUAL RESULT
// ==========================================

function deleteResult(index) {

    const selectedResult =
        results[index];


    if (!selectedResult) {

        return;

    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this result?"
        );


    if (!confirmDelete) {

        return;

    }


    // Remove selected result

    results.splice(
        index,
        1
    );


    // Save updated history

    localStorage.setItem(
        "examResults",
        JSON.stringify(
            results
        )
    );


    // Update latest result

    if (results.length > 0) {

        localStorage.setItem(
            "examResult",
            JSON.stringify(
                results[
                    results.length - 1
                ]
            )
        );

    } else {

        localStorage.removeItem(
            "examResult"
        );

    }


    updateSummary();

    renderResults();


    alert(
        "Result deleted successfully."
    );

}


// ==========================================
// LOGOUT
// ==========================================

const logoutLink =
    document.getElementById(
        "logoutLink"
    );


if (logoutLink) {

    logoutLink.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "currentUser"
            );

            localStorage.removeItem(
                "selectedExam"
            );

            localStorage.removeItem(
                "selectedExamResult"
            );

        }
    );

}


// ==========================================
// MOBILE SIDEBAR
// ==========================================

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const sidebar =
    document.getElementById(
        "sidebar"
    );

const sidebarOverlay =
    document.getElementById(
        "sidebarOverlay"
    );


function closeSidebar() {

    if (sidebar) {

        sidebar.classList.remove(
            "show"
        );

    }

    if (sidebarOverlay) {

        sidebarOverlay.classList.remove(
            "show"
        );

    }

}


function openSidebar() {

    if (sidebar) {

        sidebar.classList.add(
            "show"
        );

    }

    if (sidebarOverlay) {

        sidebarOverlay.classList.add(
            "show"
        );

    }

}


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        function () {

            if (
                sidebar &&
                sidebar.classList.contains(
                    "show"
                )
            ) {

                closeSidebar();

            } else {

                openSidebar();

            }

        }
    );

}


if (sidebarOverlay) {

    sidebarOverlay.addEventListener(
        "click",
        function () {

            closeSidebar();

        }
    );

}


// Close sidebar after menu click on mobile

document
    .querySelectorAll(".sidebar-link")
    .forEach(
        function (link) {

            link.addEventListener(
                "click",
                function () {

                    if (
                        window.innerWidth <= 800
                    ) {

                        closeSidebar();

                    }

                }
            );

        }
    );


// ==========================================
// CHECK LOGIN WHEN PAGE IS RESTORED
// ==========================================

window.addEventListener(
    "pageshow",
    function () {

        if (
            !localStorage.getItem(
                "currentUser"
            )
        ) {

            window.location.replace(
                "index.html"
            );

        }

    }
);