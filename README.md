# Personal CV Website

Static portfolio website hosted on Netlify.
Built with HTML, CSS, and minimal JavaScript.

how to add new project (monthly workflow)

1. create folder:
images/new-project/
├── thumb.jpg
├── 01.jpg
├── 02.jpg

2.add entry to index.html
<a href="project.html?project=new-project" class="project-item">
  <img src="images/new-project/thumb.jpg">
  <div>
    <span class="title">New Project</span><br>
    <span class="meta">Medium, 2026</span>
  </div>
</a>

3.add project data to project.html

4.push
