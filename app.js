// ======================
// FAKE STORAGE (TEMP ONLY)
// ======================
let users = [];

// ======================
// SIGN UP
// ======================
function signUp() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    users.push({ email, password });

    alert("Account created!");
    window.location.href = "login.html";
}

// ======================
// LOGIN
// ======================
function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login success!");
        window.location.href = "dashboard.html";
    } else {
        alert("Wrong email or password");
    }
}

// ======================
// STRIPE PAYMENT (REAL LINK)
// ======================
function buyCourse() {
    // Replace with real Stripe checkout link later
    window.location.href = "https://buy.stripe.com/test_XXXXXX";
}
