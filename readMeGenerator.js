// the readme format

function generateReadMe(data) {

    // need to stay on the same line
    return ` # ${data.title} ![licence icon](https://img.shields.io/badge/License-${data.license}-lavender.svg)

## 📝 Table of Contents
* [License Utilized](#license-utilized)
* [Project Details](#project-details)
* [Usage Information](#usage-information)
* [Installation Instructions](#installation-instructions)
* [Contribution Guidelines](#contribution-guidelines)
* [Testing Guidelines](#testing-guidelines)
* [Any Questions ?](#any-questions)

## 🔑 License Utilized
${data.license} ![licence icon](https://img.shields.io/badge/License-${data.license}-lavender.svg)

## 🚀 Project Details
${data.projectDesc}

## 👩‍💻 Usage Information
${data.useInfo}

## 💻 Installation Instructions
${data.installInst}

## 🤝 Contribution Guidelines
${data.contributeGuide}

## 💡 Testing Guidelines
${data.testing}

## 🙋‍♀️ Any Questions?

If you have any further questions please reach out.

Email: ${data.emailAddress}

GitHub link: [${data.gitHubLink}](https://github.com/${data.gitHubLink}/)

GitHub username: ${data.gitHubUsername}

    `
}

// exporting a function, modularization
module.exports = generateReadMe




