let questionsPage1 = ["How does it work?", "Which platform do you support?", "How do I invite my teammates?", "Do you have annual plan?", "How to create new workspace", "How do I set roles & permissions?"]
let questionsPage2 = ["What is a Design System?", "Why is a Design System important for a product?", "How do you create a Design System?", "What are the main components of a Design System?", "How can a Design System improve collaboration within teams?", "How do you maintain and update a Design System?"];
let questionsPage3 = ["What is Brand Design?", "How do you develop an effective Brand Design?", "Why is consistent Brand Design important?", "What elements are part of Brand Design?", "How does Brand Design influence customer behavior?", "How can Brand Design be adapted for different media?"];
let questionsPage4 = ["What is website development?", "How do you develop a website?", "What programming languages are used for website development?", "Why is responsive web design important?", "How long does it take to develop a website?", "What is the difference between front-end and back-end development?"];
let answersPage1 = ["We have no clue, it somehow does", "In a situational interview, the interviewer may ask how you overcame a difficult situation and what you learned from it. You can use your response to demonstrate your flexibility and share an example of how you transformed a negative experience into a positive outcome", "Collect the contact information of your teammates, including their email addresses or usernames on the platform you will use.", "Yes, we have monthly and annual plans", "Please ask someone who knows about that stuff", "You will have no saying in how the software runs, we will keep all administration rights. For ever."];
let answersPage2 = ["A Design System is a collection of reusable components, guidelines, and standards that help create consistency and efficiency in designing and building digital products. It typically includes UI elements, patterns, typography, colors, and documentation.", "A Design System ensures a unified and cohesive user experience across all platforms and devices. It helps streamline design and development processes, reduces redundancy, and improves collaboration by providing clear guidelines and reusable assets.", "To create a Design System, start by defining the core design principles, setting up a style guide, and identifying key components like buttons, forms, and grids. Build reusable UI components and document them with clear usage guidelines to ensure consistency across your product.", "The main components of a Design System include: a style guide (colors, typography, spacing), UI components (buttons, input fields, navigation elements), design patterns (layouts, accessibility considerations), and documentation that explains how to use these elements effectively.", "A Design System enhances collaboration by providing a shared reference point for designers, developers, and other team members. It eliminates the need to reinvent the wheel with each project, ensuring that everyone follows the same visual and functional guidelines, leading to faster iteration and fewer miscommunications.", "Maintaining and updating a Design System involves regularly reviewing and improving components, ensuring consistency as the product evolves, and updating documentation. It's important to incorporate feedback from users and teams to adapt to new needs and design trends."];
let answersPage3 = ["Brand Design is the process of creating and defining a brand's visual identity, including logos, color schemes, typography, and other design elements. It aims to create a unique and recognizable brand presence in the market.", "To develop an effective Brand Design, it's important to understand the brand's values, mission, target audience, and market position. This includes designing a logo, selecting brand colors, choosing typography, and creating a consistent visual style across all brand materials.", "Consistent Brand Design ensures that the brand is easily recognizable and trustworthy across different platforms and touchpoints. It builds a strong identity that resonates with the audience and fosters brand loyalty.", "The key elements of Brand Design include the logo, color palette, typography, imagery, and overall style. These elements work together to communicate the brand’s personality and values visually.", "Brand Design influences customer behavior by creating an emotional connection. A well-designed brand can build trust, convey professionalism, and evoke specific emotions that drive customer decisions and brand loyalty.", "Brand Design can be adapted for different media by ensuring flexibility while maintaining the brand’s core identity. This may involve resizing logos, adjusting color schemes, or using alternative layouts to fit various platforms like websites, social media, print, or packaging."];
let answersPage4 = ["Website development refers to the process of building, creating, and maintaining a website. This involves web design, coding, content creation, and setting up web hosting and domain services.", "To develop a website, you need to plan its structure, design the layout, and then write the necessary code using programming languages such as HTML, CSS, and JavaScript. Afterward, you test the site for functionality and responsiveness before launching it.", "Common programming languages used for website development include HTML for structuring content, CSS for styling, JavaScript for interactivity, and server-side languages like PHP, Ruby, or Python for back-end functionality.", "Responsive web design ensures that a website works well on a variety of devices, from desktops to smartphones. It adapts the layout and content to different screen sizes and orientations, providing a better user experience.", "The time required to develop a website depends on its complexity. A simple website may take a few days or weeks, while more complex websites with custom features and integrations can take several months to develop.", "Front-end development refers to the parts of a website that users interact with directly, like the layout and design. Back-end development deals with the server-side functionality, databases, and application logic that power the website."];
let buttons = ["1", "2", "3", "4"];
let buttonOverview = document.querySelector("#overview_btn");
let buttonDsys = document.querySelector("#dsys_btn");
let buttonDesign = document.querySelector("#design_btn");
let buttonDev = document.querySelector("#dev_btn");

let pageID = 1;


buttonOverview.addEventListener("click", (event) => pageSwitch(event));
buttonDsys.addEventListener("click", (event) => pageSwitch(event));
buttonDesign.addEventListener("click", (event) => pageSwitch(event));
buttonDev.addEventListener("click", (event) => pageSwitch(event));


function addQuestions1() {
    let questionbox = document.querySelector(".question_container");

    for (let i = 0; i < questionsPage1.length; i++) {
        questionbox.innerHTML += `
            <div class="question_box_unselected">
                <div class="question_header">
                    <h4 class="question">${questionsPage1[i]}</h4>
                    <img src="resources/icons/Expand_down.svg" class="expand_unselected">
                </div>
                <p class="answer_unselected">${answersPage1[i]}</p>
            </div>
        `;
    }
    let questionElements = document.querySelectorAll(".question_box_unselected");
    questionElements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("question_box_selected");
            element.classList.toggle("question_box_unselected");
            toggleAnswer(element);
            toggleIcon(element);
            
        });
    });
}

function addQuestions2() {
    let questionbox = document.querySelector(".question_container");

    for (let i = 0; i < questionsPage2.length; i++) {
        questionbox.innerHTML += `
            <div class="question_box_unselected">
                <div class="question_header">
                    <h4 class="question">${questionsPage2[i]}</h4>
                    <img src="resources/icons/Expand_down.svg" class="expand_unselected">
                </div>
                <p class="answer_unselected">${answersPage2[i]}</p>
            </div>
        `;
    }
    let questionElements = document.querySelectorAll(".question_box_unselected");
    questionElements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("question_box_selected");
            element.classList.toggle("question_box_unselected");
            toggleAnswer(element);
            toggleIcon(element);
            
        });
    });
}

function addQuestions3() {
    let questionbox = document.querySelector(".question_container");

    for (let i = 0; i < questionsPage3.length; i++) {
        questionbox.innerHTML += `
            <div class="question_box_unselected">
                <div class="question_header">
                    <h4 class="question">${questionsPage3[i]}</h4>
                    <img src="resources/icons/Expand_down.svg" class="expand_unselected">
                </div>
                <p class="answer_unselected">${answersPage3[i]}</p>
            </div>
        `;
    }
    let questionElements = document.querySelectorAll(".question_box_unselected");
    questionElements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("question_box_selected");
            element.classList.toggle("question_box_unselected");
            toggleAnswer(element);
            toggleIcon(element);
            
        });
    });
}

function addQuestions4() {
    let questionbox = document.querySelector(".question_container");

    for (let i = 0; i < questionsPage4.length; i++) {
        questionbox.innerHTML += `
            <div class="question_box_unselected">
                <div class="question_header">
                    <h4 class="question">${questionsPage4[i]}</h4>
                    <img src="resources/icons/Expand_down.svg" class="expand_unselected">
                </div>
                <p class="answer_unselected">${answersPage4[i]}</p>
            </div>
        `;
    }
    let questionElements = document.querySelectorAll(".question_box_unselected");
    questionElements.forEach(element => {
        element.addEventListener("click", () => {
            element.classList.toggle("question_box_selected");
            element.classList.toggle("question_box_unselected");
            toggleAnswer(element);
            toggleIcon(element);
            
        });
    });
}

function toggleAnswer(element) {
    let answer = element.querySelector(".answer_unselected");
            if (answer) {
                answer.classList.toggle("answer_selected");
                answer.classList.toggle("answer_unselected");
            } else {
                let answer = element.querySelector(".answer_selected");
                answer.classList.toggle("answer_selected");
                answer.classList.toggle("answer_unselected");
            }
}

function toggleIcon(element) {
    let icon = element.querySelector(".expand_unselected");
            if (icon) {
                icon.classList.toggle("expand_selected");
                icon.classList.toggle("expand_unselected");
            } else {
                let icon = element.querySelector(".expand_selected");
                icon.classList.toggle("expand_selected");
                icon.classList.toggle("expand_unselected");
            }
}

function pageSwitch(event) {
    let buttonID = event.target.id;
    
    buttonOverview.classList.remove("selected");
    buttonDsys.classList.remove("selected");
    buttonDesign.classList.remove("selected");
    buttonDev.classList.remove("selected");

    buttonOverview.classList.add("unselected");
    buttonDsys.classList.add("unselected");
    buttonDesign.classList.add("unselected");
    buttonDev.classList.add("unselected");

    if (buttonID === "overview_btn") {
        pageID = 1;
        let questionbox = document.querySelector(".question_container");
        questionbox.innerHTML = "";
        addQuestions1();
        buttonOverview.classList.add("selected");
    } else if (buttonID === "dsys_btn") {
        pageID = 2;
        let questionbox = document.querySelector(".question_container");
        questionbox.innerHTML = "";
        addQuestions2();
        buttonDsys.classList.add("selected");
    } else if (buttonID === "design_btn") {
        pageID = 2;
        let questionbox = document.querySelector(".question_container");
        questionbox.innerHTML = "";
        addQuestions3();
        buttonDesign.classList.add("selected");
    } else if (buttonID === "dev_btn") {
        pageID = 2;
        let questionbox = document.querySelector(".question_container");
        questionbox.innerHTML = "";
        addQuestions4();
        buttonDev.classList.add("selected");
    }

    /* pageID = 2;
    let questionbox = document.querySelector(".question_container");
    questionbox.innerHTML = "";
    addQuestions2(); */
}



function test() {
    console.log("Geht");
}

addQuestions1();       