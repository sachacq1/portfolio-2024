const socialList = document.getElementById("social-list")



const renderSocialLinks = () => {
    const socialIcons = [
        {
            icon: "<i class='bx bx-envelope'></i>",
            url: "mailito:sachacq1@gmail.com",

        },
        {
            icon: "<i class='bx bx-phone-call'></i>",
            url: "tel:+5491137787569"
        },
        {
            icon: "<i class='bx bxl-linkedin-square' ></i>",
            url: "https://ar.linkedin.com/in/sacha-quinteros-71a124128"
        },
        {
            icon: "<i class='bx bxl-twitter'></i>",
            url: "https://www.x.com"
        },
        {
            icon: "<i class='bx bxl-github'></i>",
            url: "https://github.com/sachacq1"
        },

    ];

    socialIcons.forEach((icon) => {
        socialList.innerHTML += `
        <li>
        <a href="${icon.url}" target="_blank">${icon.icon}</a>
         </li>
        `

    });

}

const renderWorks = () => {
    const workArticle = document.getElementById("work-list")
    const works = [
        {
            name: "Financie Rapido",
            yearStart: 2012,
            yearEnd: 0,
            role: "Empleado administrativo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
        },
        {
            name: "Cives",
            yearStart: 2009,
            yearEnd: 2011,
            role: "Empleado administrativo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
        },
        {
            name: "Financie Rapido",
            yearStart: 2012,
            yearEnd: 0,
            role: "Empleado administrativo",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
        }
    ];
    works.forEach((work) => {
        workArticle.innerHTML += `
            <div>
            <div class="cont-name-work">
                <h3> <a href="#">${work.name}</a></h3>
                <h4>${work.yearStart} - ${work.yearEnd !== 0 ? work.yearEnd : "Actualidad"}</h4>
                </div>
                
                <h4>${work.role}</h4>
                <p>${work.description}</p>
            </div>`
    })
};
const renderEducation = () => {
    const educationArticle = document.getElementById("education-list")
    const educationTitle = [
        {
            name: "UTN",
            yearStart: 2024,
            yearEnd: 0,
            role: "Full stack devoleper",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
        },
        {
            name: "IMM",
            yearStart: 2006,
            yearEnd: 2008,
            role: "Bachiller",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae tempore dignissimos earum harum a aut corporis pariatur sit autem natus!"
        }
    ];
    educationTitle.forEach((work) => {
        educationArticle.innerHTML += `
            <div>
            <div class="cont-name-education">
                <h3> <a href="#">${work.name}</a></h3>
                <h4>${work.yearStart} - ${work.yearEnd !== 0 ? work.yearEnd : "Actualidad"}</h4>
                </div>
                
                <h4>${work.role}</h4>
                <p>${work.description}</p>
            </div>`
    })
}
renderSocialLinks(),
    renderWorks(),
    renderEducation()