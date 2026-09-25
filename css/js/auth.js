/* =========================================
   ONLINE EXAMINATION SYSTEM
   AUTHENTICATION
========================================= */

// =========================================
// DEFAULT USERS
// =========================================

const defaultUsers = [
    {
        id: 1,
        name: "Administrator",
        email: "admin@exam.com",
        password: "admin123",
        role: "Admin"
    },

    {
        id: 2,
        name: "Shivangi",
        email: "student@exam.com",
        password: "student123",
        role: "Student"
    }
];


// =========================================
// CREATE USERS
// =========================================

if (!localStorage.getItem("users")) {

    localStorage.setItem(
        "users",
        JSON.stringify(defaultUsers)
    );

}


// =========================================
// GET ELEMENTS
// =========================================

const loginForm =
    document.getElementById("loginForm");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");

const togglePassword =
    document.getElementById("togglePassword");

const message =
    document.getElementById("message");


// =========================================
// SHOW / HIDE PASSWORD
// =========================================

togglePassword.addEventListener(
    "click",
    function () {

        if (passwordInput.type === "password") {

            passwordInput.type = "text";

            togglePassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            togglePassword.textContent = "👁";

        }

    }
);


// =========================================
// LOGIN
// =========================================

loginForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();

        const email =
            emailInput.value.trim();

        const password =
            passwordInput.value.trim();


        // Get users
        const users =
            JSON.parse(
                localStorage.getItem("users")
            );


        // Find user
        const user =
            users.find(
                function (u) {

                    return (
                        u.email === email &&
                        u.password === password
                    );

                }
            );


        // User not found
        if (!user) {

            message.textContent =
                "Invalid email or password.";

            message.style.color =
                "#dc2626";

            return;

        }


        // Save logged-in user
        localStorage.setItem(
            "currentUser",
            JSON.stringify(user)
        );


        // Success message
        message.textContent =
            "Login successful!";

        message.style.color =
            "#16a34a";


        // Redirect
        setTimeout(
            function () {

                // This project currently uses the student dashboard
                // as the main application entry point for all demo accounts.
                window.location.href =
                    "dashboard.html";

            },
            700
        );

    }
);