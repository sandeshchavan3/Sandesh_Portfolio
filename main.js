const skillsDiv= document.getElementById("skills-div");
const portDiv= document.getElementById("port-div")
const skillsBtn= document.getElementById("skills-btn");
const portBtn= document.getElementById("port-btn");

function toggleTheme() {
    const htmlEl = document.documentElement;
    const sun = document.getElementById("sun");
    const moon = document.getElementById("moon");

    htmlEl.classList.toggle("dark");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
}

function showPortfolio(){
    skillsDiv.classList.add("hidden");
    portDiv.classList.remove("hidden");

    skillsBtn.style.backgroundColor="var(--theme-btn-bg)";
    portBtn.style.backgroundColor="var(--bg-color)";
}

function showSkills(){
    skillsDiv.classList.remove("hidden");
    portDiv.classList.add("hidden");

    skillsBtn.style.backgroundColor="var(--bg-color)";
    portBtn.style.backgroundColor="var(--theme-btn-bg)";
}