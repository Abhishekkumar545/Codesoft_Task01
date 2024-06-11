// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");
    skills.forEach(skill => {
        skill.addEventListener("mouseover", () => {
            skill.style.backgroundColor = getRandomColor();
        });

        skill.addEventListener("mouseout", () => {
            skill.style.backgroundColor = "#333";
        });
    });
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
