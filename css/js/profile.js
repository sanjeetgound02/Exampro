/* ==========================================
   EXAMPRO
   PROFILE PAGE SCRIPT
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
// DISPLAY USER INFORMATION
// ==========================================

document.getElementById("profileName").textContent =
    currentUser.name || "Student";

document.getElementById("profileEmail").textContent =
    currentUser.email || "Not Available";

document.getElementById("profileRole").textContent =
    currentUser.role || "Student";


// ==========================================
// CHECK LOGIN WHEN PAGE IS RESTORED
// ==========================================

window.addEventListener("pageshow", function () {

    if (!localStorage.getItem("currentUser")) {

        window.location.replace("index.html");

    }

});