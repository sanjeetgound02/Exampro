/* =========================================
   EXAMPRO
   AUTHENTICATION
   LOGIN + REGISTRATION
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
    }

];


// =========================================
// CREATE DEFAULT USERS
// =========================================

let users =
    JSON.parse(
        localStorage.getItem("users") || "null"
    );


if (!users) {

    users = defaultUsers;

    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );

}


// =========================================
// LOGIN ELEMENTS
// =========================================

const loginSection =
    document.getElementById(
        "loginSection"
    );

const loginForm =
    document.getElementById(
        "loginForm"
    );

const emailInput =
    document.getElementById(
        "email"
    );

const passwordInput =
    document.getElementById(
        "password"
    );

const togglePassword =
    document.getElementById(
        "togglePassword"
    );

const message =
    document.getElementById(
        "message"
    );


// =========================================
// REGISTER ELEMENTS
// =========================================

const registerSection =
    document.getElementById(
        "registerSection"
    );

const registerForm =
    document.getElementById(
        "registerForm"
    );

const registerName =
    document.getElementById(
        "registerName"
    );

const registerEmail =
    document.getElementById(
        "registerEmail"
    );

const registerPassword =
    document.getElementById(
        "registerPassword"
    );

const confirmPassword =
    document.getElementById(
        "confirmPassword"
    );

const registerMessage =
    document.getElementById(
        "registerMessage"
    );

const showRegister =
    document.getElementById(
        "showRegister"
    );

const backToLogin =
    document.getElementById(
        "backToLogin"
    );


// =========================================
// SHOW / HIDE PASSWORD
// =========================================

if (togglePassword) {

    togglePassword.addEventListener(
        "click",
        function () {

            if (
                passwordInput.type ===
                "password"
            ) {

                passwordInput.type =
                    "text";

                togglePassword.textContent =
                    "🙈";

            } else {

                passwordInput.type =
                    "password";

                togglePassword.textContent =
                    "👁";

            }

        }
    );

}


// =========================================
// SHOW REGISTER
// =========================================

if (showRegister) {

    showRegister.addEventListener(
        "click",
        function () {

            loginSection.style.display =
                "none";

            registerSection.style.display =
                "block";

            message.textContent =
                "";

            registerMessage.textContent =
                "";

            registerForm.reset();

        }
    );

}


// =========================================
// BACK TO LOGIN
// =========================================

if (backToLogin) {

    backToLogin.addEventListener(
        "click",
        function () {

            registerSection.style.display =
                "none";

            loginSection.style.display =
                "block";

            message.textContent =
                "";

            registerMessage.textContent =
                "";

            loginForm.reset();

            registerForm.reset();

        }
    );

}


// =========================================
// LOGIN
// =========================================

if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                emailInput.value
                    .trim()
                    .toLowerCase();


            const password =
                passwordInput.value
                    .trim();


            // Get latest users

            users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    ) || "[]"
                );


            // Find user

            const user =
                users.find(
                    function (u) {

                        return (
                            u.email
                                .toLowerCase() ===
                            email &&
                            u.password ===
                            password
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


            // Success

            message.textContent =
                "Login successful!";

            message.style.color =
                "#16a34a";


            // Dashboard

            setTimeout(
                function () {

                    window.location.href =
                        "dashboard.html";

                },
                500
            );

        }
    );

}


// =========================================
// REGISTER
// =========================================

if (registerForm) {

    registerForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                registerName.value.trim();


            const email =
                registerEmail.value
                    .trim()
                    .toLowerCase();


            const password =
                registerPassword.value
                    .trim();


            const confirm =
                confirmPassword.value
                    .trim();


            // ==================================
            // NAME VALIDATION
            // ==================================

            if (name.length < 2) {

                registerMessage.textContent =
                    "Please enter a valid name.";

                registerMessage.style.color =
                    "#dc2626";

                return;

            }


            // ==================================
            // PASSWORD LENGTH
            // ==================================

            if (password.length < 6) {

                registerMessage.textContent =
                    "Password must be at least 6 characters.";

                registerMessage.style.color =
                    "#dc2626";

                return;

            }


            // ==================================
            // PASSWORD MATCH
            // ==================================

            if (password !== confirm) {

                registerMessage.textContent =
                    "Passwords do not match.";

                registerMessage.style.color =
                    "#dc2626";

                return;

            }


            // ==================================
            // GET USERS
            // ==================================

            users =
                JSON.parse(
                    localStorage.getItem(
                        "users"
                    ) || "[]"
                );


            // ==================================
            // CHECK EMAIL
            // ==================================

            const existingUser =
                users.find(
                    function (user) {

                        return (
                            user.email
                                .toLowerCase() ===
                            email
                        );

                    }
                );


            if (existingUser) {

                registerMessage.textContent =
                    "An account with this email already exists.";

                registerMessage.style.color =
                    "#dc2626";

                return;

            }


            // ==================================
            // CREATE USER
            // ==================================

            const newUser = {

                id:
                    Date.now(),

                name:
                    name,

                email:
                    email,

                password:
                    password,

                role:
                    "Student"

            };


            // Add new user

            users.push(
                newUser
            );


            // Save users

            localStorage.setItem(
                "users",
                JSON.stringify(
                    users
                )
            );


            // ==================================
            // SUCCESS
            // ==================================

            registerMessage.textContent =
                "Account created successfully!";

            registerMessage.style.color =
                "#16a34a";


            // Clear form

            registerForm.reset();


            // Automatically go to login

            setTimeout(
                function () {

                    registerSection.style.display =
                        "none";

                    loginSection.style.display =
                        "block";

                    message.textContent =
                        "Registration successful. Please login.";

                    message.style.color =
                        "#16a34a";

                },
                1000
            );

        }
    );

}