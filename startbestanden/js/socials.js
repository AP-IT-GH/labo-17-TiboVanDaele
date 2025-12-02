const socialsListEl = document.querySelector("#socials");
console.log(socialsListEl);
const socialPlatforms = ["youtube", "instagram", "facebook", "twitter"];
const socialLinks = ["https://www.youtube.com", "https://www.instagram.com/", "https://www.facebook.com/", "https://twitter.com/"];

/*for (let i = 0; i < socialPlatforms.length; i++) {
    document.querySelector("#socials").innerHTML +=
        `<li>
            <a href=socialLinks[i]} target="_blank">\n
                <img src="assets/icon${socialPlatforms[i]}.png"/>
            </a>
        </li>`
}*/

for (let i = 0; i < socialPlatforms.length; i++){
    const platformEl = document.createElement("li");
    platformEl.innerHTML = `
        <a href="${socialLinks[i]}">
            <img src="./assets/icon${socialPlatforms[i]}.png">
        </a>
    `;
    socialsListEl.appendChild(platformEl);
}