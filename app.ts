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



    // Generate Dynamic & Editable Resume Content:
    const resumeHTML = `
<div class="tsdiv">
<h2><b>Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name:</b><span contenteditable="true">${name}</span></p>
<p><b>Email:</b><span contenteditable="true">${email}</span></p>
<p><b>Phone:</b><span contenteditable="true">${phone}</span></p>
<p><b>Address:</b><span contenteditable="true">${address}</span></p>
<p><b>Education:</b><span contenteditable="true">${education}</span></p>
<p><b>Experience:</b><span contenteditable="true">${experience}</span></p>
<p><b>Skills:</b><span contenteditable="true">${skills}</span></p>
</div>

`;
    // Displaying the Resume after statment:it will be show in div
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    } else {
        console.error('Display element not found.') // this is for to force users to fill form fields.
    }

})