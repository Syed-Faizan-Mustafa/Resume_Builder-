// Get References to the form and display area:
var resumeForm = document.getElementById('resume_form');
var resumeDisplayElement = document.getElementById('resume_display');
// Handling Form Submission:
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload.
    // Collect Input Values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Generate Dynamic Resume Content:
    var resumeHTML = "\n<div class=\"tsdiv\">\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b>".concat(name, "</p>\n<p><b>Email:</b>").concat(email, "</p>\n<p><b>Phone:</b>").concat(phone, "</p>\n<p><b>Address:</b>").concat(address, "</p>\n<p><b>Education:</b>").concat(education, "</p>\n<p><b>Experience:</b>").concat(experience, "</p>\n<p><b>Skills:</b>").concat(skills, "</p>\n\n<h3>Education</h3>\n<p>").concat(education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(experience, "</p>\n\n<h3>Skills</h3>\n<p>").concat(skills, "</p>\n</div>\n\n");
    // Displaying the Resume after statment:it will be show in div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Display element not found. abcd'); // this is for to force users to fill form fields.
    }
});
