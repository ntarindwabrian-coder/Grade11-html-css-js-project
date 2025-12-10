document.addEventListener('DOMContentLoaded', function() {
    
    const themeToggleButton = document.getElementById('theme-toggle-btn');
    const body = document.body;

    themeToggleButton.addEventListener('click', function() {
        
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeToggleButton.textContent = 'Switch to Light Mode';
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeToggleButton.textContent = 'Switch to Dark Mode';
        }
    });


    
    const form = document.getElementById('registration-form');
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const usernameError = document.getElementById('username-error');
    const emailError = document.getElementById('email-error');
    const formSuccess = document.getElementById('form-success');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
      
        usernameError.textContent = '';
        emailError.textContent = '';
        formSuccess.textContent = '';
        let isValid = true;

       
        const username = usernameInput.value.trim();
        if (username === '') {
            usernameError.textContent = 'Username is required.';
            isValid = false;
        } else if (username.length < 4) {
            usernameError.textContent = 'Username must be at least 4 characters long.';
            isValid = false;
        }

       
        const email = emailInput.value.trim();
        // Simple regex to check for email format (contains @ and a dot)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        
        if (email === '') {
            emailError.textContent = 'Email address is required.';
            isValid = false;
        } else if (!emailRegex.test(email)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

  
        if (isValid) {
            formSuccess.textContent = 'Registration Successful! (Data not sent to server in this demo)';
            form.reset(); 
        } else {
            formSuccess.textContent = 'Please correct the errors above.';
        }
    });

});