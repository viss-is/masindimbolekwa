const projectList = document.getElementById("projects");
const projectPage = document.getElementById("project");

// INDEX PAGE
if (projectList) {
  Object.entries(projects).forEach(([slug, project]) => {
    const div = document.createElement("div");
    div.className = "project-preview";
    div.innerHTML = `
      <a href="project.html?project=${slug}">
        <h2>${project.title}</h2>
        <p>${project.meta}</p>
      </a>
    `;
    projectList.appendChild(div);
  });
}

// PROJECT PAGE
if (projectPage) {
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("project");
  const project = projects[slug];

  if (!project) {
    projectPage.innerHTML = "<p>Project not found.</p>";
  } else {
    projectPage.innerHTML = `
      <h1>${project.title}</h1>
      <p>${project.meta}</p>
      <p>${project.description}</p>
      ${project.images.map(img =>
        `<img src="images/${img}" alt="${project.title}">`
      ).join("")}
    `;
  }
}
