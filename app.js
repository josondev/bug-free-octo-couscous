// Form validation functions
function validateName(name) {
    if (name.length < 2) {
        return "Name must be at least 2 characters long";
    }
    if (!/^[a-zA-Z\s]+$/.test(name)) {
        return "Name can only contain letters and spaces";
    }
    return "";
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return "Please enter a valid email address";
    }
    return "";
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
        return "Phone number must be 10 digits";
    }
    return "";
}

function validateAge(age) {
    if (age < 18) {
        return "You must be at least 18 years old";
    }
    if (age > 100) {
        return "Please enter a valid age";
    }
    return "";
}

// Show error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + "Error");
    const inputElement = document.getElementById(fieldId);
    
    errorElement.textContent = message;
    if (message) {
        inputElement.classList.add("invalid");
    } else {
        inputElement.classList.remove("invalid");
    }
}

// Validate individual field
function validateField(fieldId) {
    const field = document.getElementById(fieldId);
    const value = field.value.trim();
    let errorMessage = "";

    // Check if required field is empty
    if (field.hasAttribute('required') && !value) {
        errorMessage = "This field is required";
    } else if (value) {
        // Validate based on field type
        switch (fieldId) {
            case 'firstName':
                errorMessage = validateName(value);
                break;
            case 'lastName':
                errorMessage = validateName(value);
                break;
            case 'email':
                errorMessage = validateEmail(value);
                break;
            case 'phone':
                errorMessage = validatePhone(value);
                break;
            case 'age':
                errorMessage = validateAge(parseInt(value));
                break;
        }
    }

    showError(fieldId, errorMessage);
    return errorMessage === "";
}

// Validate checkbox
function validateCheckbox(checkboxId) {
    const checkbox = document.getElementById(checkboxId);
    const errorMessage = checkbox.checked ? "" : "You must agree to the terms";
    showError(checkboxId, errorMessage);
    return checkbox.checked;
}

// Validate entire form
function validateForm() {
    let isValid = true;
    
    // Validate all required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'age', 'eventType'];
    
    requiredFields.forEach(fieldId => {
        if (!validateField(fieldId)) {
            isValid = false;
        }
    });
    
    // Validate terms checkbox
    if (!validateCheckbox('terms')) {
        isValid = false;
    }
    
    return isValid;
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    if (validateForm()) {
        // Hide form and show success message
        document.getElementById('registrationForm').style.display = 'none';
        document.getElementById('successMessage').style.display = 'block';
        
        // Log form data to console
        const formData = new FormData(document.getElementById('registrationForm'));
        console.log('Form submitted with data:', Object.fromEntries(formData));
    }
}

// Add event listeners when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Add submit event listener
    document.getElementById('registrationForm').addEventListener('submit', handleSubmit);
    
    // Add real-time validation for required fields
    const fieldsToValidate = ['firstName', 'lastName', 'email', 'phone', 'age', 'eventType'];
    
    fieldsToValidate.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        field.addEventListener('blur', () => validateField(fieldId));
    });
    
    // Add validation for terms checkbox
    document.getElementById('terms').addEventListener('change', () => validateCheckbox('terms'));
});