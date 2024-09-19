// Get References to the form and display area:
var resumeForm = document.getElementById('resume_form') as HTMLFormElement;
var resumeDisplayElement = document.getElementById('resume_display') as HTMLDivElement;
var shareableLinkContainer = document.getElementById('shareable_link_container') as HTMLDivElement
var ShareableLink = document.getElementById('href_link') as HTMLLinkElement
var downloadButton = document.getElementById('download_pdf') as HTMLButtonElement

// Handling Form Submission:
resumeForm.addEventListener('submit', (event: Event) => {
    event.preventDefault(); //prevent page reload.

    // Collect Input Values
    const username = (document.getElementById('username') as HTMLInputElement).value
    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const address = (document.getElementById('address') as HTMLInputElement).value
    const education = (document.getElementById('education') as HTMLInputElement).value
    const experience = (document.getElementById('experience') as HTMLInputElement).value
    const skills = (document.getElementById('skills') as HTMLInputElement).value

    // save from data in local storage with the username as the key
    const resumeData = {
        name,
        email,
        phone,
        education,
        experience,
        skills

    };
    localStorage.setItem(username, JSON.stringify(resumeData)); // saving the data locally.



    // Generate Dynamic & Editable Resume Content:
    const resumeHTML = `
<div class="tsdiv" contenteditable = "true">
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
    // Display the genetated resume.    
    resumeDisplayElement.innerHTML = resumeHTML;

    // Generate the Shareable url with the username only.
    const shareableURL = `${window.location.origin}?username${encodeURIComponent(username)}`;

    // Display the shareable link.
    shareableLinkContainer.style.display = 'block';
    ShareableLink.href = shareableURL;
    ShareableLink.textContent = shareableURL;
})

    // Handle PDF Download.
    downloadButton.addEventListener('click', () => {
        window.print(); //This will open the print dailogue and allow the user to save as PDF.
    });

    //Prefill form based on the username in the url.
    window.addEventListener('DOMContentLoaded', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const username = urlParams.get('username');
        if (username) {
            const savedResumeData = localStorage.getItem(username);
            if (savedResumeData) {
                const resumeData = JSON.parse(savedResumeData);
                (document.getElementById('username') as HTMLInputElement).value = username;
                (document.getElementById('name') as HTMLInputElement).value = resumeData.name;
                (document.getElementById('email') as HTMLInputElement).value = resumeData.email;
                (document.getElementById('phone') as HTMLInputElement).value = resumeData.phone;
                (document.getElementById('address') as HTMLInputElement).value = resumeData.address;
                (document.getElementById('education') as HTMLInputElement).value = resumeData.education;
                (document.getElementById('experience') as HTMLInputElement).value = resumeData.experience;
                (document.getElementById('skills') as HTMLInputElement).value = resumeData.skills;


            }
        }
    })



