const socialList = document.getElementById("social-list")



const renderSocialLinks = () => {
    const socialIcons = [
        {
            icon: "<i class='bx bx-envelope'></i>",
            url: "mailito:sachacq1@gmail.com"
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
        <a href="${icon.url}">${icon.icon}</a>
         </li>
        `
    });
}
renderSocialLinks()