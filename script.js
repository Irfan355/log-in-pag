document.getElementById('get-started-btn').addEventListener('click', function() {
    document.getElementById('welcome-panel').classList.remove('active');
    document.getElementById('signup-panel').classList.add('active');
});

document.getElementById('login-link').addEventListener('click', function() {
    document.getElementById('signup-panel').classList.remove('active');
    document.getElementById('login-panel').classList.add('active');
});

document.getElementById('signup-link').addEventListener('click', function() {
    document.getElementById('login-panel').classList.remove('active');
    document.getElementById('signup-panel').classList.add('active');
});

document.getElementById('home-btn').addEventListener('click', function() {
    document.getElementById('signup-panel').classList.remove('active');
    document.getElementById('welcome-panel').classList.add('active');
});

document.getElementById('home-btn-2').addEventListener('click', function() {
    document.getElementById('login-panel').classList.remove('active');
    document.getElementById('welcome-panel').classList.add('active');
});

document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-panel').classList.add('active');
});

document.getElementById('contact-btn-2').addEventListener('click', function() {
    document.getElementById('contact-panel').classList.add('active');
});

document.getElementById('contact-btn-3').addEventListener('click', function() {
    document.getElementById('contact-panel').classList.add('active');
});

document.getElementById('close-contact-btn').addEventListener('click', function() {
    document.getElementById('contact-panel').classList.remove('active');
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Sign Up Successful!');
});