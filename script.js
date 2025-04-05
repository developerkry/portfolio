document.addEventListener('DOMContentLoaded', () => {
    // Data for programming knowledge
    const skillsData = {
        labels: ['JavaScript', 'Lua', 'HTML & CSS', 'C#'],
        datasets: [{
            data: [40, 20, 30, 10], // Percentages
            backgroundColor: ['#FF0000', '#800080', '#FF4500', '#4CAF50'] // Red, dark purple, orange-red, green
        }]
    };

    // Render the pie chart
    const skillsChartElement = document.getElementById('skillsChart');
    if (skillsChartElement) {
        const ctx = skillsChartElement.getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: skillsData,
            options: {
                plugins: {
                    legend: {
                        labels: {
                            color: '#ffffff' // Set text color to white
                        }
                    }
                }
            }
        });
    }

    // Calculate and display age dynamically
    const ageElement = document.getElementById('age');
    if (ageElement) {
        const birthYear = parseInt(ageElement.getAttribute('data-birth-year'), 10);
        const currentYear = new Date().getFullYear();
        ageElement.textContent = currentYear - birthYear;
    }

    // Data for projects
    const projects = [
        { 
            title: 'Nova Gaming Network', 
            startDate: 'April 2025', 
            link: 'https://novagamingnet.com',
            logo: 'https://i.imgur.com/Q09QwLj.png'
        }
    ];

    // Populate the projects list
    const projectsList = document.getElementById('projectsList');
    if (projectsList) {
        projects.forEach(project => {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.innerHTML = `
                <div class="project-image">
                    <img src="${project.logo}" alt="${project.title} Logo">
                    <div class="project-overlay">
                        <h3>${project.title}</h3>
                        <p>${project.startDate}</p>
                    </div>
                </div>
                <a href="${project.link}" target="_blank" class="project-link">View Project</a>
            `;
            projectsList.appendChild(card);
        });
    }
});
