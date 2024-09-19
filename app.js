// Get References to the form and display area:
var resumeForm = document.getElementById('resume_form');
var resumeDisplayElement = document.getElementById('resume_display');
var shareableLinkContainer = document.getElementById('shareable_link_container');
var ShareableLink = document.getElementById('href_link');
var downloadButton = document.getElementById('download_pdf');
// Handling Form Submission:
resumeForm.addEventListener('submit', function (event) {
    event.preventDefault(); //prevent page reload.
    // Collect Input Values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // save from data in local storage with the username as the key
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        experience: experience,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally.
    // Generate Dynamic & Editable Resume Content:
    var resumeHTML = "\n<div class=\"tsdiv\" contenteditable = \"true\">\n<h2><b>Editable Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n<p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n<p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n<p><b>Address:</b><span contenteditable=\"true\">").concat(address, "</span></p>\n<p><b>Education:</b><span contenteditable=\"true\">").concat(education, "</span></p>\n<p><b>Experience:</b><span contenteditable=\"true\">").concat(experience, "</span></p>\n<p><b>Skills:</b><span contenteditable=\"true\">").concat(skills, "</span></p>\n</div>\n\n");
    // Display the genetated resume.    
    resumeDisplayElement.innerHTML = resumeHTML;
    // Generate the Shareable url with the username only.
    var shareableURL = "".concat(window.location.origin, "?username").concat(encodeURIComponent(username));
    // Display the shareable link.
    shareableLinkContainer.style.display = 'block';
    ShareableLink.href = shareableURL;
    ShareableLink.textContent = shareableURL;
});
// Handle PDF Download.
downloadButton.addEventListener('click', function () {
    window.print(); //This will open the print dailogue and allow the user to save as PDF.
});
//Prefill form based on the username in the url.
window.addEventListener('DOMContentLoaded', function () {
    var urlParams = new URLSearchParams(window.location.search);
    var username = urlParams.get('username');
    if (username) {
        var savedResumeData = localStorage.getItem(username);
        if (savedResumeData) {
            var resumeData = JSON.parse(savedResumeData);
            document.getElementById('username').value = username;
            document.getElementById('name').value = resumeData.name;
            document.getElementById('email').value = resumeData.email;
            document.getElementById('phone').value = resumeData.phone;
            document.getElementById('address').value = resumeData.address;
            document.getElementById('education').value = resumeData.education;
            document.getElementById('experience').value = resumeData.experience;
            document.getElementById('skills').value = resumeData.skills;
        }
    }
});
