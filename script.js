"strict mode";

document.querySelector("#resumeForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    github: document.getElementById("github").value,
    linkedin: document.getElementById("linkedin").value,
    summary: document.getElementById("summary").value,
    education: document.getElementById("education").value,
    experience: document.getElementById("experience").value,
    projects: document.getElementById("projects").value,
    skills: document.getElementById("skills").value,
    certifications: document.getElementById("certifications").value,
  };
  localStorage.setItem("resumeData", JSON.stringify(data));
  window.location.href = "resume.html";
});

const data = JSON.parse(localStorage.getItem("resumeData"));
if (data) {
  document.getElementById("resumeContent").innerHTML = `
        <h1>${data.name}</h1>
        <div class="contact">
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            ${
              data.address
                ? `<p><strong>Address:</strong> ${data.address}</p>`
                : ""
            }
            ${
              data.github
                ? `<p><strong>GitHub:</strong> <a href="${data.github}" target="_blank">${data.github}</a></p>`
                : ""
            }
            ${
              data.linkedin
                ? `<p><strong>LinkedIn:</strong> <a href="${data.linkedin}" target="_blank">${data.linkedin}</a></p>`
                : ""
            }
        </div>
        ${
          data.summary
            ? `<div class="section"><h2>Professional Summary</h2><p>${data.summary}</p></div>`
            : ""
        }
        ${
          data.education
            ? `<div class="section"><h2>Education</h2><p>${data.education}</p></div>`
            : ""
        }
        ${
          data.experience
            ? `<div class="section"><h2>Work Experience</h2><p>${data.experience}</p></div>`
            : ""
        }
        ${
          data.projects
            ? `<div class="section"><h2>Projects</h2><p>${data.projects}</p></div>`
            : ""
        }
        ${
          data.skills
            ? `<div class="section"><h2>Skills</h2><div class="skills">${data.skills
                .split(",")
                .map((skill) => `<span>${skill.trim()}</span>`)
                .join("")}</div></div>`
            : ""
        }
        ${
          data.certifications
            ? `<div class="section"><h2>Certifications</h2><p>${data.certifications}</p></div>`
            : ""
        }
    `;
} else {
  document.getElementById("resumeContent").innerHTML =
    '<p style="text-align: center; color: #666;">No resume data found. Please go back and fill out the form.</p>';
}
