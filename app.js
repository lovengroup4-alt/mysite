// Fake login (you can upgrade to Firebase later)
function login() {
    alert("Google Login will be added with Firebase Authentication");
}

// Stripe payment (safe method - no card handling by you)
function buyCourse() {
    alert("Redirecting to secure payment (Stripe)");

    // In real version you would redirect to Stripe Checkout:
    window.location.href = "https://stripe.com";
}
const courses = [
  {
    title: "Cybersecurity Basics",
    video: "https://youtube.com",
    description: "Learn hacking basics"
  },
  {
    title: "Network Security",
    video: "https://youtube.com",
    description: "Learn networks"
  }
];
