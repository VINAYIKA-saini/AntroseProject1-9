function validateForm() {
    const name = document.getElementById('name');
    const url = document.getElementById('url');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');
    const phone = document.getElementById('phone');
    const file = document.getElementById('file');

     const nameRegex = /^[a-zA-Z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const phoneRegex = /^\+91\d{10}$/;

    
    if (!nameRegex.test(name.value) || name.value.trim() === '') {
        setInvalid(name);
        return false;
    } else {
        setValid(name);
    }

    if (!emailRegex.test(email.value) || email.value.trim() === '') {
        setInvalid(email);
        return false;
    } else {
        setValid(email);
    }

    if (!passwordRegex.test(password.value) || password.value.trim() === '') {
        setInvalid(password);
        return false;
    } else {
        setValid(password);
    }

    if (password.value !== confirmPassword.value || confirmPassword.value.trim() === '') {
        setInvalid(confirmPassword);
        return false;
    } else {
        setValid(confirmPassword);
    }

    if (!phoneRegex.test(phone.value) || phone.value.trim() === '') {
        setInvalid(phone);
        return false;
    } else {
        setValid(phone);
    }

    if (!file.files[0] || !file.files[0].name.toLowerCase().endsWith('.pdf')) {
        setInvalid(file);
        return false;
    } else {
        setValid(file);
    }

    // If all validations pass
    document.getElementById('myForm').reset();
    return true;
}

function setInvalid(element) {
    element.setCustomValidity('Empty');
    element.style.borderColor = 'red';
}

function setValid(element) {
    element.setCustomValidity('');
    element.style.borderColor = 'green';
}
