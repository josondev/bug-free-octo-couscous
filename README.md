# Community Event Registration Form

A simple, responsive web form for community event registration with real-time validation using HTML, CSS, and JavaScript.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [File Structure](#file-structure)
- [Form Fields](#form-fields)
- [Validation Rules](#validation-rules)
- [Setup Instructions](#setup-instructions)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [Browser Support](#browser-support)

## Overview

This project demonstrates fundamental web form development concepts including:
- HTML form structure and semantics
- CSS styling and responsive design
- JavaScript form validation and event handling
- User experience best practices

## Features

- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Real-time Validation**: Immediate feedback as users fill out the form
- **Clear Error Messages**: Specific, helpful validation messages
- **Accessibility**: Proper labels, semantic HTML, and keyboard navigation
- **Clean UI**: Simple, professional design focused on usability

## File Structure

```
community-event-registration/
├── index.html          # Main HTML structure
├── styles.css          # CSS styling and responsive design
├── app.js             # JavaScript validation logic
└── README.md          # Project documentation
```

## Form Fields

### Required Fields (marked with *)
- **First Name**: Text input, minimum 2 characters, letters only
- **Last Name**: Text input, minimum 2 characters, letters only
- **Email**: Email input with format validation
- **Phone Number**: Tel input, must be 10 digits
- **Age**: Number input, minimum 18 years old
- **Event Type**: Dropdown selection (Workshop, Networking, Seminar, Social Event)
- **Terms Agreement**: Checkbox, must be checked to submit

### Optional Fields
- **Address**: Textarea for complete address information

## Validation Rules

| Field | Rule | Error Message |
|-------|------|---------------|
| First/Last Name | Required, 2+ chars, letters only | "Name must be at least 2 characters long" |
| Email | Required, valid format | "Please enter a valid email address" |
| Phone | Required, 10 digits | "Phone number must be 10 digits" |
| Age | Required, 18-100 | "You must be at least 18 years old" |
| Event Type | Required selection | "This field is required" |
| Terms | Must be checked | "You must agree to the terms" |

## Setup Instructions

### 1. Download Files
Clone or download all three files to the same directory:
- `index.html`
- `styles.css`
- `app.js`

### 2. Local Development
Open `index.html` in any modern web browser to run the form locally.

### 3. GitHub Pages Deployment

1. **Create Repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/community-event-registration.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to Pages section
   - Select "Deploy from a branch"
   - Choose "main" branch
   - Save settings

3. **Access Live Site**:
   Your form will be available at: `https://yourusername.github.io/community-event-registration/`

## Testing

### Manual Testing Scenarios

1. **Required Field Validation**:
   - Leave required fields empty and try to submit
   - Verify error messages appear

2. **Email Format Testing**:
   - Try invalid emails: `test`, `test@`, `test@domain`
   - Try valid email: `test@domain.com`

3. **Age Boundary Testing**:
   - Enter age 17 (should show error)
   - Enter age 18 (should be valid)
   - Enter age 101 (should show error)

4. **Phone Number Testing**:
   - Enter letters or special characters
   - Enter less than 10 digits
   - Enter exactly 10 digits (should be valid)

5. **Name Validation**:
   - Enter numbers or special characters
   - Enter single character
   - Enter valid name with letters

6. **Form Submission**:
   - Fill all required fields correctly
   - Check terms agreement
   - Submit form and verify success message

### Browser Console
After successful submission, check browser console (F12) to see logged form data.

## Technologies Used

- **HTML5**: Semantic markup, form elements, input types
- **CSS3**: Flexbox, responsive design, transitions
- **JavaScript (ES6+)**: DOM manipulation, event handling, form validation

### Key Concepts Demonstrated

- Form validation with `addEventListener`
- Regular expressions for email/phone validation
- DOM manipulation with `getElementById`
- Event handling (`submit`, `blur`, `change`)
- CSS classes for dynamic styling
- Responsive design with media queries

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Breakpoints

- **Desktop**: 600px and above
- **Mobile**: Below 600px (simplified layout)

## Code Structure

### HTML (`index.html`)
- Semantic form structure
- Proper label-input associations
- Input types for better mobile experience
- Required attributes for basic validation

### CSS (`styles.css`)
- Mobile-first responsive design
- Error state styling (`.invalid` class)
- Focus states for accessibility
- Clean, professional styling

### JavaScript (`app.js`)
- Modular validation functions
- Real-time error feedback
- Form submission handling
- Console logging for debugging

## Learning Objectives

This project covers essential web development concepts:

1. **HTML Forms**: Structure, input types, attributes
2. **CSS Styling**: Layout, responsiveness, user feedback
3. **JavaScript DOM**: Event handling, validation, manipulation
4. **User Experience**: Error messages, real-time feedback
5. **Best Practices**: Semantic HTML, accessibility, code organization

## Contributing

This is an educational project. Feel free to fork and modify for learning purposes.