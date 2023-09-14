const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

// Method to show error
function showError(input, message){
    const formControl = input.parentElement
    formControl.className = "form-control error"

    const small = formControl.querySelector('small')
    small.innerText = message
}

// Method to show success
function showSuccess(input){
    const formControl = input.parentElement
    formControl.className = "form-control success"
}

// Method to validate the empty fields
function checkRequired(inputArr){
    inputArr.forEach(input => {
        if(input.value==""){
        showError(input, `${input.id} is required`)
        } else {
            showSuccess(input)
        }
    });
}

// --TODO--
// 1. Check the number of characters in the 25 > username > 3 
// 2. email -- regex
// 3. 20>password > 6
// 4. password == password


// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault()

    // Following code lead to brekage of DRY principle 
    // if(username.value==""){
    //     showError(username, 'Username is required')
    // } else {
    //     showSuccess()
    // }

    checkRequired([username, email, password, password2])

    //console.log(username.parentElement.querySelector('small'))
})

// Method to validate username length
function checkUsernameLength(input) {
    const usernameValue = input.value.trim(); // Trim to remove leading/trailing whitespace
    if (usernameValue.length < 3 || usernameValue.length > 25) {
        showError(input, 'Username must be between 3 and 25 characters');
    } else {
        showSuccess(input);
    }
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([email, password, password2]);
    checkUsernameLength(username);
});

// Method to validate password length
function checkPasswordLength(input) {
    const passwordValue = input.value;
    if (passwordValue.length < 6 || passwordValue.length > 20) {
        showError(input, 'Password must be between 6 and 20 characters');
    } else {
        showSuccess(input);
    }
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkUsernameLength(username);
    checkPasswordLength(password);
});



// Method to check if passwords match
function checkPasswordsMatch(password, confirmPassword) {
    if (password.value !== confirmPassword.value) {
        showError(confirmPassword, 'Passwords do not match');
    } else {
        showSuccess(confirmPassword);
    }
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkUsernameLength(username);
    checkPasswordLength(password);
    checkPasswordsMatch(password, password2);
});


// Method to validate email using regex
function checkEmail(input) {
    const emailValue = input.value.trim(); // Trim to remove leading/trailing whitespace
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for a basic email format

    if (!emailPattern.test(emailValue)) {
        showError(input, 'Invalid email format');
    } else {
        showSuccess(input);
    }
}

// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkUsernameLength(username);
    checkPasswordLength(password);
    checkPasswordsMatch(password, password2);
    checkEmail(email);
});



