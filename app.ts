// Get References to the form and display area:
var resumeForm = document.getElementById('resume_form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume_display') as HTMLDivElement;

// Handling Form Submission:
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload.

    // Collect Input Values
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value



    // Generate Dynamic Resume Content:
    const resumeHTML = `
<div class="tsdiv">
<h2><b>Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b>${name}</p>
<p><b>Email:</b>${email}</p>
<p><b>Phone:</b>${phone}</p>
<p><b>Address:</b>${address}</p>
<p><b>Education:</b>${education}</p>
<p><b>Experience:</b>${experience}</p>
<p><b>Skills:</b>${skills}</p>

<h3>Education</h3>
<p>${education}</p>

<h3>Experience</h3>
<p>${experience}</p>

<h3>Skills</h3>
<p>${skills}</p>
</div>

`;
    // Displaying the Resume after statment:it will be show in div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('Display element not found. abcd') // this is for to force users to fill form fields.
    }

})