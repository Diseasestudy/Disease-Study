function sayHello() {
    alert("Welcome to my website!");
}

function toggleTheme() {
    alert("Button click ho gaya");
    document.body.classList.toggle("light-mode");
    let btn = document.getElementById("theme-btn");
    btn.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    let name = this.querySelector('input[type="text"]').value;
    let email = this.querySelector('input[type="email"]').value;
    let msg = this.querySelector('textarea').value;
    
    if (name === "" || email === "" || msg === "") {
        alert("Bhai saare fields bharo!");
    } else {
        alert("Message mil gaya " + name + "!");
        this.reset();
    }
});
document.querySelector('.btn-login').onclick = function() {
    alert('Login page abhi bana nahi');
}

document.querySelector('.btn-signup').onclick = function() {
    alert('Sign Up page abhi bana nahi');
}