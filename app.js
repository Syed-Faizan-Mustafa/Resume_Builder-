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
    // Generate Dynamic & Editable Resume Content:
    var resumeHTML = "\n<div class=\"tsdiv\">\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n<p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n<p><b>Education:</b><span contenteditable=\"true\">").concat(education, "</span></p>\n<p><b>Experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n<p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n</div>\n\n");
    // Displaying the Resume after statment:it will be show in div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('Display element not found.'); // this is for to force users to fill form fields.
    }
});
