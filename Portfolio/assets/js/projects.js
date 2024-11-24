// FUNCTION TO LOAD PROJECTS DYNAMICALLY

function loadProjects(filter = "all") {
    const container = document.getElementById("projects-container");
    container.innerHTML = ""; 

    // Fetch projects data from JSON file
    fetch("assets/js/projects.json")
        .then(response => response.json())
        .then(projects => {
            projects.forEach(project => {
                if (filter === "all" || project.category === filter) {

                    const projectCard = document.createElement("div");
                    projectCard.classList.add("project-card", project.category);

                    projectCard.innerHTML = `
                        <a href="${project.link}">
                            <div class="image-container">
                                <img src="${project.image}" alt="${project.title}">
                                <div class="overlay"> View Project </div>
                            </div>
                        </a>
                        <div class="project-info">
                            <h3> ${project.title} </h3>
                            <p> ${project.description} </p>
                        </div>
                    `;

                    container.appendChild(projectCard);
                }
            });
        })
        .catch(error => console.error("Error loading projects: ", error));
}

// Filter projects based on category
function filterProjects(category) {
    loadProjects(category);
}

document.addEventListener("DOMContentLoaded", () => loadProjects("all"));
